#!/bin/bash
#
# Caveats in run.sh apply :)

# ./run.sh dev

#!/bin/bash
# hack hack hack
#
#nohup deno task watch-web &
#nohup deno task watch-server ~/garden &
#nohup deno task watch-plugs

echo "This assumes you are running tmux... and a lot more :)"
tmux split-window -h "cd ~/agora-server && ./run-localdev.sh"
tmux split-window -h "cd ~/agora-server && npx esbuild app/js-src/index.ts --bundle --outfile=app/static/js/index.js --watch"
tmux split-window -h "cd ~/agora-bridge && ./run-dev.sh"
