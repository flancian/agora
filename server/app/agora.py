from flask import Blueprint, url_for, render_template, current_app
from markupsafe import escape
from . import db
bp = Blueprint('agora', __name__)

@bp.route('/')
def index():
    return render_template('index.html', help=url_for('agora.help'))

@bp.route('/help')
def help():
    current_app.logger.warning('Not implemented.')
    return 'If I had implemented help already, here you\'d see documentation on all URL endpoints. For now, please refer to the <a href="https://flancia.org/go/agora">code</a>.'

@bp.route('/notes')
def notes():
    return render_template('notes.html', notes=db.all_notes())

@bp.route('/user/<username>')
def user(username):
    current_app.logger.warning('Not implemented.')
    return 'If I had implemented reading user profiles already, here you would see user named "%s".' % escape(username)

@bp.route('/garden/<garden>')
def garden(garden):
    current_app.logger.warning('Not implemented.')
    return 'If I had implemented rendering gardens already, here you would see garden named "%s".' % escape(garden)

@bp.route('/note/<note>')
def note(note):
    return render_template('note.html', note=note)

@bp.route('/wikilink/<wikilink>')
def wikilink(wikilink):
    return render_template('notes_rendered.html', notes=db.notes_by_wikilink(wikilink))
