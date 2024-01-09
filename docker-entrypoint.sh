#!/bin/bash
#
# Caveats in run.sh apply :)

# This should probably be optional, but in this alpha state I think it's what at least I prefer.
git pull

# Docker should probably also run uwsgi with a cache like I do in anagora.org.
# Otherwise performance will be terrible in medium-sized Agoras like the Agora of Flancia 
# as it is already by early 2024.
#
# But for now, YOLO :)
./run.sh dev
