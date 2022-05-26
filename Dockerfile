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

RUN apt-get update
RUN apt-get install -y git python3 python3-pip python3-venv

WORKDIR /home/agora

# This results in all directories owned by root and in /, fix.
COPY . agora

RUN git clone https://github.com/flancian/agora-server.git
RUN git clone https://github.com/flancian/agora-bridge.git

WORKDIR /home/agora/agora-server
RUN python3 -m venv venv
RUN . venv/bin/activate
RUN pip3 install -r requirements.txt

WORKDIR /home/agora/agora-bridge
RUN python3 -m venv venv
RUN . venv/bin/activate
RUN pip3 install -r requirements.txt

EXPOSE 8000

CMD /bin/bash
