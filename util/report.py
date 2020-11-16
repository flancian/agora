#!/usr/bin/python3
import pathlib
import titlecase

for filename in pathlib.Path('.').glob('**/*.md'):
    f = open(filename)
    print('file: %s' % filename)
    lines = f.readlines()
    if lines:
        if lines[0].startswith('#'):
            print(filename, 'has a header')
        else:
            sanitized_filename = str(filename).replace('-', ' ')
            sanitized_filename = sanitized_filename.replace('.md', '')
            sanitized_filename = sanitized_filename.replace('journal/', '')
            header = '# ' + titlecase.titlecase(sanitized_filename)
            print('would add header:', header)
