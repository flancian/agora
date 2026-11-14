{
  description = "The Agora of Flancia: unified Nix flake composing agora-server and agora-bridge";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    agora-server = {
      url = "github:flancian/agora-server";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    agora-bridge = {
      url = "github:flancian/agora-bridge";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      self,
      nixpkgs,
      agora-server,
      agora-bridge,
      ...
    }:
    let
      inherit (nixpkgs) lib;
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      forAllSystems = lib.genAttrs systems;
    in
    {
      packages = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          serverPkg = agora-server.packages.${system}.default;
          bridgePkg = agora-bridge.packages.${system}.default;

          agora = pkgs.symlinkJoin {
            name = "agora-0.1.0";
            paths = [
              serverPkg
              bridgePkg
            ];
            postBuild = ''
              cat > $out/bin/agora <<'EOF'
              #!@runtimeShell@
              set -euo pipefail

              usage() {
                cat <<USAGE
              Usage: agora [options] [command] [args...]

              Control center for the Agora stack (agora-server + agora-bridge).
              Defaults to 'up' when no command is given.

              Commands:
                up                   Start agora-bridge and agora-server together (default)
                init [dir]           Initialize a starter Agora directory at [dir] (or AGORA_PATH)
                status               Show resolved paths, ports, and configuration
                server [args...]     Run agora-server directly
                uwsgi [args...]      Run agora-server under uWSGI
                worker [args...]     Run agora-server-worker (rebuild agora.db index)
                bridge [args...]     Run agora-bridge directly
                pull [args...]       Run agora-pull directly
                import-stoa [args..] Run agora-import-stoa directly
                feed [args...]       Run agora-feed directly

              Options (override environment defaults):
                -p, --path DIR       Agora root directory (sets AGORA_PATH)
                    --server-port P  Server HTTP port (default: 5017)
                    --bridge-port P  Bridge HTTP port (default: 5018)
                -c, --config CLASS   Flask config class (default: ProductionConfig)
                -w, --workers N      Gunicorn worker count (default: 4)
                    --url-base URL   Public base URL for canonical links
                    --bridge-url URL Override agora-bridge URL used by agora-server
                    --dev            Shortcut for DevelopmentConfig, FLASK_ENV=development, workers=1
                    --pull           For 'up': run an initial agora-pull before starting
                -h, --help           Show this top-level help (use '<cmd> --help' for tool help)

              Environment:
                AGORA_PATH           Agora root (default: \$PWD if sources.yaml exists, else \$HOME/agora)
                AGORA_SERVER_PORT    Server HTTP port (default: 5017)
                AGORA_BRIDGE_PORT    Bridge HTTP port (default: 5018)
                AGORA_CONFIG         Flask config class (default: ProductionConfig)
                GUNICORN_WORKERS     Gunicorn worker count (default: 4)
                URL_BASE             External base URL (default: http://127.0.0.1:<server-port>)
                AGORA_BRIDGE_URL     Bridge URL (default: http://127.0.0.1:<bridge-port>)

              Examples:
                agora --path /tmp/my-agora --server-port 8080 --dev
                agora init /tmp/my-agora
                agora --path /tmp/my-agora status
                agora pull --help
              USAGE
              }

              resolve_agora_path() {
                if [ -n "''${AGORA_PATH:-}" ]; then
                  printf '%s\n' "$AGORA_PATH"
                elif [ -f "$PWD/sources.yaml" ]; then
                  printf '%s\n' "$PWD"
                else
                  printf '%s\n' "$HOME/agora"
                fi
              }

              init_agora_dir() {
                local dir="$1"
                mkdir -p "$dir/garden/agora" "$dir/stoa" "$dir/stream"
                if [ ! -f "$dir/sources.yaml" ]; then
                  cat > "$dir/sources.yaml" <<YAML
              # Starter Agora sources registry. Add digital gardens or feeds here.
              - target: garden/agora
                url: https://example.com/agora.git
                format: foam
              YAML
                fi
                if [ ! -f "$dir/garden/agora/welcome.md" ]; then
                  cat > "$dir/garden/agora/welcome.md" <<MD
              # Welcome to your Agora

              This Agora was initialized by Nix. Add Markdown files under \`garden/\`
              and link concepts with \`[[wikilinks]]\`.
              MD
                fi
              }

              require_arg() {
                if [ "$#" -lt 2 ] || [ -z "$2" ]; then
                  echo "Missing value for option: $1" >&2
                  exit 2
                fi
              }

              cmd=""
              run_pull=0
              pos_args=()

              while [ "$#" -gt 0 ]; do
                case "$1" in
                  -h|--help)
                    usage
                    exit 0
                    ;;
                  -p|--path)
                    require_arg "$@"
                    export AGORA_PATH="$2"
                    shift 2
                    ;;
                  --path=*)
                    export AGORA_PATH="''${1#*=}"
                    shift
                    ;;
                  --server-port)
                    require_arg "$@"
                    export AGORA_SERVER_PORT="$2"
                    shift 2
                    ;;
                  --server-port=*)
                    export AGORA_SERVER_PORT="''${1#*=}"
                    shift
                    ;;
                  --bridge-port)
                    require_arg "$@"
                    export AGORA_BRIDGE_PORT="$2"
                    shift 2
                    ;;
                  --bridge-port=*)
                    export AGORA_BRIDGE_PORT="''${1#*=}"
                    shift
                    ;;
                  -c|--config)
                    require_arg "$@"
                    export AGORA_CONFIG="$2"
                    shift 2
                    ;;
                  --config=*)
                    export AGORA_CONFIG="''${1#*=}"
                    shift
                    ;;
                  -w|--workers)
                    require_arg "$@"
                    export GUNICORN_WORKERS="$2"
                    shift 2
                    ;;
                  --workers=*)
                    export GUNICORN_WORKERS="''${1#*=}"
                    shift
                    ;;
                  --url-base)
                    require_arg "$@"
                    export URL_BASE="$2"
                    shift 2
                    ;;
                  --url-base=*)
                    export URL_BASE="''${1#*=}"
                    shift
                    ;;
                  --bridge-url)
                    require_arg "$@"
                    export AGORA_BRIDGE_URL="$2"
                    shift 2
                    ;;
                  --bridge-url=*)
                    export AGORA_BRIDGE_URL="''${1#*=}"
                    shift
                    ;;
                  --dev)
                    export AGORA_CONFIG="DevelopmentConfig"
                    export FLASK_ENV="development"
                    export GUNICORN_WORKERS="''${GUNICORN_WORKERS:-1}"
                    shift
                    ;;
                  --pull)
                    run_pull=1
                    shift
                    ;;
                  help)
                    usage
                    exit 0
                    ;;
                  up|init|status)
                    if [ -z "$cmd" ]; then
                      cmd="$1"
                      shift
                    else
                      pos_args+=("$1")
                      shift
                    fi
                    ;;
                  server|uwsgi|worker|bridge|pull|import-stoa|feed)
                    if [ -z "$cmd" ]; then
                      cmd="$1"
                      shift
                      break
                    else
                      pos_args+=("$1")
                      shift
                    fi
                    ;;
                  --)
                    shift
                    pos_args+=("$@")
                    break
                    ;;
                  -*)
                    echo "Unknown option: $1" >&2
                    usage >&2
                    exit 2
                    ;;
                  *)
                    if [ -z "$cmd" ]; then
                      echo "Unknown command: $1" >&2
                      usage >&2
                      exit 2
                    fi
                    pos_args+=("$1")
                    shift
                    ;;
                esac
              done

              cmd="''${cmd:-up}"

              case "$cmd" in
                init)
                  if [ "''${#pos_args[@]}" -gt 1 ]; then
                    echo "Usage: agora init [dir]" >&2
                    exit 2
                  fi
                  target_dir="''${pos_args[0]:-$(resolve_agora_path)}"
                  init_agora_dir "$target_dir"
                  echo "Initialized Agora root at: $target_dir"
                  ;;
                status)
                  resolved_path="$(resolve_agora_path)"
                  server_port="''${AGORA_SERVER_PORT:-5017}"
                  bridge_port="''${AGORA_BRIDGE_PORT:-5018}"
                  echo "AGORA_PATH:        $resolved_path"
                  echo "sources.yaml:      $( [ -f "$resolved_path/sources.yaml" ] && echo "present" || echo "missing (auto-created on 'up')" )"
                  echo "agora.db:          $( [ -s "$resolved_path/agora.db" ] && echo "present" || echo "missing (indexed on 'up')" )"
                  echo "AGORA_SERVER_PORT: $server_port"
                  echo "AGORA_BRIDGE_PORT: $bridge_port"
                  echo "AGORA_CONFIG:      ''${AGORA_CONFIG:-ProductionConfig}"
                  echo "GUNICORN_WORKERS:  ''${GUNICORN_WORKERS:-4}"
                  echo "URL_BASE:          ''${URL_BASE:-http://127.0.0.1:$server_port}"
                  echo "AGORA_BRIDGE_URL:  ''${AGORA_BRIDGE_URL:-http://127.0.0.1:$bridge_port}"
                  ;;
                server)
                  export AGORA_PATH="$(resolve_agora_path)"
                  export PORT="''${AGORA_SERVER_PORT:-''${PORT:-5017}}"
                  exec "@out@/bin/agora-server" "$@"
                  ;;
                uwsgi)
                  export AGORA_PATH="$(resolve_agora_path)"
                  export PORT="''${AGORA_SERVER_PORT:-''${PORT:-5017}}"
                  exec "@out@/bin/agora-server-uwsgi" "$@"
                  ;;
                worker)
                  export AGORA_PATH="$(resolve_agora_path)"
                  exec "@out@/bin/agora-server-worker" "$@"
                  ;;
                bridge)
                  export AGORA_PATH="$(resolve_agora_path)"
                  export PORT="''${AGORA_BRIDGE_PORT:-''${PORT:-5018}}"
                  exec "@out@/bin/agora-bridge" "$@"
                  ;;
                pull)
                  export AGORA_PATH="$(resolve_agora_path)"
                  exec "@out@/bin/agora-pull" "$@"
                  ;;
                import-stoa)
                  export AGORA_PATH="$(resolve_agora_path)"
                  exec "@out@/bin/agora-import-stoa" "$@"
                  ;;
                feed)
                  export AGORA_PATH="$(resolve_agora_path)"
                  exec "@out@/bin/agora-feed" "$@"
                  ;;
                up)
                  if [ "''${#pos_args[@]}" -gt 0 ]; then
                    echo "Unexpected arguments for 'up': ''${pos_args[*]}" >&2
                    usage >&2
                    exit 2
                  fi
                  export AGORA_PATH="$(resolve_agora_path)"
                  if [ ! -f "$AGORA_PATH/sources.yaml" ]; then
                    echo "No sources.yaml found in $AGORA_PATH; initializing a starter Agora..."
                    init_agora_dir "$AGORA_PATH"
                  fi

                  server_port="''${AGORA_SERVER_PORT:-5017}"
                  bridge_port="''${AGORA_BRIDGE_PORT:-5018}"

                  export AGORA_BRIDGE_URL="''${AGORA_BRIDGE_URL:-http://127.0.0.1:$bridge_port}"
                  export URL_BASE="''${URL_BASE:-http://127.0.0.1:$server_port}"

                  if [ "$run_pull" -eq 1 ]; then
                    echo "[agora] Running initial agora-pull..."
                    "@out@/bin/agora-pull" --config "$AGORA_PATH/sources.yaml" --output-dir "$AGORA_PATH" --once True || true
                  fi

                  if [ ! -s "$AGORA_PATH/agora.db" ]; then
                    echo "[agora] Indexing Agora into $AGORA_PATH/agora.db..."
                    "@out@/bin/agora-server-worker"
                  fi

                  echo "[agora] Starting agora-bridge on port $bridge_port (AGORA_PATH=$AGORA_PATH)..."
                  PORT="$bridge_port" "@out@/bin/agora-bridge" &
                  bridge_pid=$!

                  echo "[agora] Starting agora-server on port $server_port..."
                  PORT="$server_port" "@out@/bin/agora-server" &
                  server_pid=$!

                  cleanup() {
                    kill "$server_pid" "$bridge_pid" 2>/dev/null || true
                    wait "$server_pid" "$bridge_pid" 2>/dev/null || true
                  }
                  trap cleanup EXIT INT TERM

                  wait -n "$bridge_pid" "$server_pid"
                  ;;
              esac
              EOF
              substituteInPlace $out/bin/agora \
                --replace-fail '@runtimeShell@' '${pkgs.runtimeShell}' \
                --replace-fail '@out@' "$out"
              chmod +x $out/bin/agora
            '';

            meta = {
              description = "Unified Agora stack (agora-server + agora-bridge)";
              homepage = "https://anagora.org";
              mainProgram = "agora";
            };
          };
        in
        {
          default = agora;
          inherit agora;
          server = serverPkg;
          bridge = bridgePkg;
        }
      );

      devShells = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        {
          default = pkgs.mkShell {
            packages = [
              self.packages.${system}.agora
              pkgs.git
            ];
          };
        }
      );

      checks = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          agora = self.packages.${system}.agora;
        in
        {
          smoke-test = pkgs.runCommand "agora-stack-smoke-test" {
            nativeBuildInputs = [ pkgs.curl ];
          } ''
            set -euo pipefail
            export HOME="$TMPDIR/home"
            export AGORA_PATH="$TMPDIR/my-agora"
            export AGORA_SERVER_PORT=15017
            export AGORA_BRIDGE_PORT=15018

            mkdir -p "$HOME"
            ${agora}/bin/agora --help | grep -q "Control center"
            ${agora}/bin/agora init "$AGORA_PATH"
            ${agora}/bin/agora --path "$AGORA_PATH" --server-port "$AGORA_SERVER_PORT" --bridge-port "$AGORA_BRIDGE_PORT" --dev status | grep -q "DevelopmentConfig"

            ${agora}/bin/agora --path "$AGORA_PATH" --server-port "$AGORA_SERVER_PORT" --bridge-port "$AGORA_BRIDGE_PORT" --dev > "$TMPDIR/agora.log" 2>&1 &
            PID=$!
            trap 'kill "$PID" 2>/dev/null || true' EXIT

            for i in $(seq 1 30); do
              if curl -fsS "http://127.0.0.1:$AGORA_SERVER_PORT/" > "$TMPDIR/server.html" \
                 && curl -fsS "http://127.0.0.1:$AGORA_BRIDGE_PORT/" > "$TMPDIR/bridge.html"; then
                break
              fi
              sleep 0.5
            done

            if ! grep -qi "Agora" "$TMPDIR/server.html"; then
              cat "$TMPDIR/agora.log"
              exit 1
            fi
            if ! grep -qi "Agora" "$TMPDIR/bridge.html"; then
              cat "$TMPDIR/agora.log"
              exit 1
            fi

            curl -fsS "http://127.0.0.1:$AGORA_SERVER_PORT/node/welcome" > "$TMPDIR/node.html"
            grep -qi "Welcome to your Agora" "$TMPDIR/node.html"

            touch "$out"
          '';
        }
      );
    };
}
