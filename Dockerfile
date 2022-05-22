# In development, this doesn't yet work.
#
# To build:
# $ docker build -t agora .
#
# To drop into a shell, for example:
# $ docker run -it --entrypoint /bin/bash agora

FROM debian

MAINTAINER Flancian "0@flancia.org"

RUN apt-get update
RUN apt-get install -y git python3 python3-pip

# This results in all directories owned by root and in /, fix.
COPY . agora

RUN git clone https://github.com/flancian/agora-server.git
RUN git clone https://github.com/flancian/agora-bridge.git

CMD /bin/bash
