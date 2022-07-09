#!/bin/bash -x
# Runs what I run in the anagora.org environment (Debian Linux).
#
# This script assumes a lot :)
#
# Essentially:
#
#   - This repository is checked out in $HOME/agora and it contains a valid sources.yaml.
#   - There is a $HOME/agora-server directory with virtualenvs set up, e.g. if you cd there and run ./update-dev.sh the server starts.
#   - There is a $USER/agora-bridge directory with virtualenvs set up, e.g. if you cd there and run ./update-dev.sh the bridge starts.
#
# This should all work out of the box if you run an Agora on [[docker]]/[[podman]]; so see instructions in Dockerfile if you haven't set up agora-server, agora-bridge yet.

MODE=${1:-dev}

git pull
echo "Updating agora-server..."
cd $HOME/agora-server && ./update.sh 2>&1 > agora-server-update.log &
echo "Updating agora-bridge..."
cd $HOME/agora-bridge && ./update.sh 2>&1 > agora-bridge-update.log &

wait -n
exit $?
