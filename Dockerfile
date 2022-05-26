# In development, this doesn't yet work.
#
# To build:
# $ docker build -t agora .
#
# Then to drop into a shell, for example:
# $ docker run -it --entrypoint /bin/bash agora
#
# (What's t

FROM debian

MAINTAINER Flancian "0@flancia.org"

USER root

RUN apt-get update
RUN apt-get install -y git python3 python3-pip python3-venv
RUN groupadd -r agora -g 1000 && useradd -u 1000 -r -g agora -s /bin/bash -c "Agora" agora
WORKDIR /home/agora
COPY . agora
RUN chown -R agora:agora /home/agora

USER agora

RUN git clone https://github.com/flancian/agora-server.git
RUN git clone https://github.com/flancian/agora-bridge.git

WORKDIR /home/agora/agora-server
RUN python3 -m venv venv
RUN . venv/bin/activate && pip3 install -r requirements.txt
EXPOSE 5017

WORKDIR /home/agora/agora-bridge
RUN python3 -m venv venv
RUN . venv/bin/activate && pip3 install -r requirements.txt
EXPOSE 5018

WORKDIR /home/agora/agora

# This should probably be ./run-prod.sh plus nginx.
# But perhaps we want to move on to [[docker compose]] for that?
# [[agora bridge]] and [[agora server]] could also be separate containers with [[agora]] being a shared volume?
CMD ./run-dev.sh
