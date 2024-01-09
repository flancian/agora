#!/bin/sh

docker build -t git.coopcloud.tech/flancian/agora $@ .

echo "To push use e.g.:\n\ndocker push git.coopcloud.tech/flancian/agora\n"
