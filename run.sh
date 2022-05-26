#!/bin/bash
#
# This script assumes a lot :)
#
# Essentially:
#
#   - This repository is checked out in $HOME/agora and it contains a valid sources.yaml.
#   - There is a $HOME/agora-server directory with virtualenvs set up, e.g. if you cd there and run ./run-dev.sh the server starts.
#   - There is a $USER/agora-bridge directory with virtualenvs set up, e.g. if you cd there and run ./run-dev.sh the bridge starts.
#
# This should all work out of the box if you run an Agora on [[docker]]/[[podman]]; so see instructions in Dockerfile if you haven't set up agora-server, agora-bridge yet.

MODE=${1:-dev}

cd ../agora-server && ./run-${MODE}.sh 2>&1 > agora-server.log &
cd ../agora-bridge && ./run-${MODE}.sh 2>&1 > agora-bridge.log &

wait -n
exit $?
