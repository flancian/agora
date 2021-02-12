#!/bin/bash -x
# imports [[lord enki]] from [[medium backup]]
#
# requires:
#
# apt-get install python3-html2markdown wget

# import
TMPDIR=$(mktemp -d)
OUTPUTDIR=$HOME/agora/garden/enki

mkdir -p $OUTPUTDIR
if [[ ! -d $OUTPUTDIR ]]; then echo "couldn't create target directory $OUTPUTDIR" && exit 42; fi

cd $TMPDIR
wget --mirror http://www.lord-enki.net/medium-backup/
cd www.lord-enki.net/medium-backup/

# hack hack
for i in *html; do 
    html2markdown ${i} > $(echo $i | sed -e 's/^.*_//' -e 's/^-*//' -e 's/-*[a-z0-9]*.html//').md
done
cp *md $OUTPUTDIR

