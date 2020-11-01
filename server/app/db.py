import glob
import markdown
import os

BASE='../../agora/'

class Note:
    def __init__(self, path):
        self.dir = path_to_url(path)
        self.wikilink = path_to_wikilink(path)
        self.url = '/wikilink/' + self.wikilink
        with open(path) as f:
            self.content = f.read()

def path_to_url(path):
    return os.path.split(path)[0].replace(BASE, '')

def path_to_wikilink(path):
    return os.path.splitext(os.path.basename(path))[0]

def all_notes():
    l = sorted([f for f in glob.glob(BASE + '**/*.md', recursive=True)])
    return [Note(f) for f in l]

def notes_by_wikilink(wikilink):
    notes = [note for note in all_notes() if note.wikilink == wikilink]
    return notes
