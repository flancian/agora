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
              Usage: agora [command] [args...]

              Commands:
                up [--pull]       Start agora-bridge and agora-server together (default)
                init [dir]        Initialize a starter Agora directory at [dir] (or \$AGORA_PATH)
                server [args...]  Run agora-server directly
                worker [args...]  Run agora-server-worker (rebuild agora.db index)
                bridge [args...]  Run agora-bridge directly
                pull [args...]    Run agora-pull directly

              Environment:
                AGORA_PATH         Agora root directory (default: \$PWD if sources.yaml exists, else \$HOME/agora)
                AGORA_SERVER_PORT  Server HTTP port (default: 5017)
                AGORA_BRIDGE_PORT  Bridge HTTP port (default: 5018)
                AGORA_CONFIG       Flask config class (default: ProductionConfig)
                GUNICORN_WORKERS   Gunicorn worker count (default: 4)
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

              cmd="''${1:-up}"
              if [ "$#" -gt 0 ]; then
                shift
              fi

              case "$cmd" in
                -h|--help|help)
                  usage
                  exit 0
                  ;;
                init)
                  target_dir="''${1:-$(resolve_agora_path)}"
                  init_agora_dir "$target_dir"
                  echo "Initialized Agora root at: $target_dir"
                  ;;
                server)
                  export AGORA_PATH="$(resolve_agora_path)"
                  exec "@out@/bin/agora-server" "$@"
                  ;;
                worker)
                  export AGORA_PATH="$(resolve_agora_path)"
                  exec "@out@/bin/agora-server-worker" "$@"
                  ;;
                bridge)
                  export AGORA_PATH="$(resolve_agora_path)"
                  exec "@out@/bin/agora-bridge" "$@"
                  ;;
                pull)
                  export AGORA_PATH="$(resolve_agora_path)"
                  exec "@out@/bin/agora-pull" "$@"
                  ;;
                up)
                  run_pull=0
                  while [ "$#" -gt 0 ]; do
                    case "$1" in
                      --pull) run_pull=1 ;;
                      -h|--help) usage; exit 0 ;;
                      *) echo "Unknown option for 'up': $1" >&2; usage >&2; exit 2 ;;
                    esac
                    shift
                  done

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
                *)
                  echo "Unknown command: $cmd" >&2
                  usage >&2
                  exit 2
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
            export GUNICORN_WORKERS=1
            export AGORA_CONFIG=DevelopmentConfig
            export FLASK_ENV=development

            mkdir -p "$HOME"
            ${agora}/bin/agora init "$AGORA_PATH"

            ${agora}/bin/agora up > "$TMPDIR/agora.log" 2>&1 &
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
