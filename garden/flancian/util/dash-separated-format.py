#!/usr/bin/python3
import pathlib
import subprocess
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--run', action='store_true', help='whether to actually run potentially destructive commands')
args = parser.parse_args()

for filename in pathlib.Path('.').glob('**/*.md'):
    new_filename = str(filename).lower().replace(' ', '-')
    command = ['git', 'mv', str(filename), new_filename]
    print('would run: %s' % command)
    if args.run:
        subprocess.run(command)
