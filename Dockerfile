# In development, but this already works (results in a simple agora-server and agora-bridge setup running in the same container).
#
# To build (you should be able to replace podman with docker):
#
# $ podman build -t agora .
#
# To drop into a debugging shell in the container:
#
# $ podman run -it --entrypoint /bin/bash agora
#
# Check that you can write to 'agora' in the container. If you don't, and you're using podman rootless containers (like I do), you probably need to run something like the following in the *host* first:
#
# $ podman unshare chgrp -R 1001 agora
#
# To then run an Agora interactively on port 5017:
#
# $ podman run -it -p 5017:5017 -v /home/agora/agora:/home/agora/agora:Z -u agora agora
#
# To run an Agora detached (good for serving mode):
#
# $ podman run -dt -p 5017:5017 -v /home/agora/agora:/home/agora/agora:Z -u agora agora
#
# Enjoy!

FROM debian

MAINTAINER Flancian "0@flancia.org"

# We install first as root.
USER root

RUN apt-get update
RUN apt-get install -y git python3 python3-pip python3-venv
RUN pip3 install poetry
RUN groupadd -r agora -g 1001 && useradd -u 1001 -r -g agora -s /bin/bash -c "Agora" agora

WORKDIR /home/agora
USER agora

RUN git clone https://github.com/flancian/agora-server.git
RUN git clone https://github.com/flancian/agora-bridge.git

WORKDIR /home/agora/agora-server
RUN poetry install
EXPOSE 5017

WORKDIR /home/agora/agora-bridge
RUN poetry install
EXPOSE 5018

# This is where this repository (the one containing this Dockerfile) should be mounted in the container.
WORKDIR /home/agora/agora

# This should probably be ./run-prod.sh plus nginx.
# But perhaps we want to move on to [[docker compose]] for that?
# [[agora bridge]] and [[agora server]] could also be separate containers with [[agora]] being a shared volume?
CMD ./run-dev.sh
# for debugging
# CMD bash
