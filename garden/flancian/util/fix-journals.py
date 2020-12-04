#!/usr/bin/python3
# Run this from the journal directory.
import pathlib
import subprocess
import argparse
import dateparser

parser = argparse.ArgumentParser()
parser.add_argument('--run', action='store_true', help='whether to actually run potentially destructive commands')
args = parser.parse_args()

for filename in pathlib.Path('.').glob('*.md'):
    filename = str(filename)
    print(filename)
    new_filename = dateparser.parse(filename.replace('.md', '')).date().isoformat()
    if filename != new_filename:
        command = ['git', 'mv', str(filename), new_filename]
        print('would run: %s' % command)
        if args.run:
            subprocess.run(command)
