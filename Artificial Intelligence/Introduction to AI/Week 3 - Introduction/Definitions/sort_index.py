#!/home/websinthe/anaconda3/bin/python.
"""
Google Machine Learning Glossary index creator.

This script takes the output files from the glossary cutter
and forms an index MD file from them.
"""

import os
import pprint

file_list = list()


with os.scandir('/home/websinthe/code/') as dir_source:
    for file_name in dir_source:
        file_list.append(file_name.name)
pprint.pprint(file_list)
file_list.sort()
pprint.pprint(file_list)
with open("index.md", "x") as index:
    index.write("# Glossary File Index\r\n")
    index.write("")
    index.write("Go back to [[Week 3]].\r\n")
    index.write("See the [[Main AI Page]] or /"
                "the [[Master of Philosophy - Main Page]].\r\n")
    index.write("\r\n")
    for entry in file_list:
        entrant = str(entry)[:-3]
        entrant = entrant + "|" + str(entry)[:-3].replace("_", " ")
        entrant = " - [[" + entrant + "]]\r\n"
        index.write(entrant)
print(len(file_list))
