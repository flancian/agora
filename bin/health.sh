#!/bin/bash
# Tries to assist in gauging garden health.

ls -altr

echo "# Markdown files under $PWD":
find . -iname '*md' | wc -l
echo "# JPG files under $PWD":
find . -iname '*jpg' | wc -l

echo "# Attempting to pull all git repositories under $PWD":
export GIT_TERMINAL_PROMPT=0
for i in $(find -type d -iname '.git'); 
do
	dir=${i/\/.git/}
	echo "# Pulling $dir"
	git -C $dir pull 2>&1 >> pull.log 
done
