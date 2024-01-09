# In development, but this already works (results in a simple agora-server and agora-bridge setup running in the same container).
#
# As of 2023, you probably want to look at the [[coop cloud]] recipe if you are considering running an Agora for your community :) https://anagora.org/agora-recipe for more.
#
# To build (you should be able to replace docker with podman):
#
# $ docker build -t agora .
#
# To drop into a debugging shell in the container:
#
# $ docker run -it --entrypoint /bin/bash agora
#
# If you are running rootless, check that you can write to 'agora' in the container. You may need to:
#
# $ podman unshare chgrp -R 1001 agora  # I only tested this with podman so far.
#
# To then run an Agora interactively based directly on the upstream container on port 5017:
#
# $ docker run -it -p 5017:5017 -v ${PWD}/agora:/home/agora/agora:Z -u agora agora
#
# To run the Agora detached (serving mode): 
#
# $ docker run -dt -p 5017:5017 -v ${PWD}/agora:/home/agora/agora:Z -u agora agora
#
# To run the reference Agora directly from upstream packages, skipping building:
#
# $ docker run -dt -p 5017:5017 -v ${PWD}/agora:/home/agora/agora:Z -u agora git.coopcloud.tech/flancian/agora
#
# Enjoy!

FROM debian

MAINTAINER Flancian "0@flancia.org"

# We install first as root.
USER root

RUN apt-get update
RUN apt-get install -y git python3 python3-pip npm
RUN pip3 install poetry --break-system-packages
RUN groupadd -r agora -g 1001 && useradd -u 1001 -r -g agora -s /bin/bash -c "Agora" agora
RUN mkdir -p /home/agora && chown -R agora:agora /home/agora

WORKDIR /home/agora
USER agora

RUN git clone https://github.com/flancian/agora-server.git
RUN git clone https://github.com/flancian/agora-bridge.git

# This technically shouldn't be needed as we expect the user to mount an Agora as a volume, 
# but it makes the Agora easier to run off-the-shelf from head. 
RUN git clone https://github.com/flancian/agora.git
# RUN git clone https://gitlab.com/flancia/agora.git

WORKDIR /home/agora/agora-server
RUN npm install

# This seems to work around some version issues. Why it's needed I can't currently tell.
RUN poetry lock
RUN poetry install
EXPOSE 5017

WORKDIR /home/agora/agora-bridge
# This seems to work around some version issues. Why it's needed I can't currently tell.
RUN poetry lock
RUN poetry install
EXPOSE 5018

# This is where this repository (the one containing this Dockerfile) should be mounted in the container.
WORKDIR /home/agora/agora

# This should probably be ./run-prod.sh plus nginx.
# But perhaps we want to move on to [[docker compose]] for that?
# [[agora bridge]] and [[agora server]] could also be separate containers with [[agora]] being a shared volume?
CMD ./docker-entrypoint.sh
# for debugging
# CMD bash
