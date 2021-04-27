#!/bin/bash -x
# imports [[x]] from a [[web mirror]]
#
# requires:
#
# apt-get install python3-html2markdown wget

# import

USER=${1:-x}
URL=${2}
TMPDIR=$(mktemp -d)
OUTPUTDIR=$HOME/agora/garden/$USER

if [[ -z "$URL" ]]; then echo "Usage: $0 <user> <url>"; exit 42; fi

mkdir -p $OUTPUTDIR
if [[ ! -d $OUTPUTDIR ]]; then echo "couldn't create target directory $OUTPUTDIR" && exit 42; fi

cd $TMPDIR
wget --mirror "$URL"
cd "$URL"

# hack hack
for i in *html; do 
    html2markdown ${i} > $(echo $i | sed -e 's/^.*_//' -e 's/^-*//' -e 's/-*[a-z0-9]*.html//').md
done
cp *md $OUTPUTDIR

