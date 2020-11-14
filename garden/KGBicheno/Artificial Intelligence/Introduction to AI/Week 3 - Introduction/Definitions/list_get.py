#!/home/websinthe/anaconda3/bin/python.
"""
Google Machine Learning Glossary index creator.

This script takes the output files from the glossary cutter
and forms an index MD file from them.
"""

import os


def ret_clean_file(listitems: list()):
    """
    Clean all index entries of non-sortable characters.

    Parameters
    ----------
    listitems

    Returns
    -------
    The items in the list stripped of the bracket characters.
    """
    for fname in listitems:
        fname.replace("[[", "")
        fname.replace("]]", "")
    return fname


def sort_file(entry: str):
    """
    sort_file takes a list of files and sorts them in alpha order at runtime.

    Parameters
    ----------
    entry : str
        The string describing the entry into the glossary index.

    Returns
    -------
    dir_list : dict
        The dictionary that holds the index entries as they are
        being sorted.

    """
    dir_list = list()
    dir_list.append(entry)
    dir_list.sort(key=ret_clean_file)
    print(dir_list[-1])
    return dir_list


index_list = list()
with os.scandir('/home/websinthe/code/') as dir_source:
    with open("index.md", "x") as index:
        index.write("# Glossary File Index")
        index.write("")
        index.write("Go back to [[Week 3]].")
        index.write("See the [[Main AI Page]] or /"
                    "the [[Master of Philosophy - Main Page]].")
        index.write("")
        for entry in dir_source:
            entrant = str(entry.name)[:-3]
            entrant = entrant + "|" + str(entry.name)[:-3].replace("_", " ")
            entrant = " - [[" + entrant + "]]\r\n"
            # print(entrant)
            sort_file(entrant)
        # for item in index_list:
            # index.write(item)
            # print(item, " added to index.")
