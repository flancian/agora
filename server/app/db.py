import glob
import markdown
import os
from operator import attrgetter

BASE='../../agora/'

class Node:
    def __init__(self, path):
        self.dir = path_to_url(path)
        self.wikilink = path_to_wikilink(path)
        self.url = '/node/' + self.wikilink
        with open(path) as f:
            self.content = f.read()

def path_to_url(path):
    return os.path.split(path)[0].replace(BASE, '')

def path_to_wikilink(path):
    return os.path.splitext(os.path.basename(path))[0]

def all_nodes():
    l = sorted([f for f in glob.glob(BASE + '**/*.md', recursive=True)])
    return [Node(f) for f in l]

def all_journals():
    # hack hack.
    l = sorted([f for f in glob.glob(BASE + '**/????-??-??.md', recursive=True)])
    return sorted([Node(f) for f in l], key=attrgetter('wikilink'), reverse=True)


def nodes_by_wikilink(wikilink):
    nodes = [node for node in all_nodes() if node.wikilink == wikilink]
    return nodes
