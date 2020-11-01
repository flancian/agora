from flask import Blueprint, url_for, render_template, current_app
from markupsafe import escape
import glob
bp = Blueprint('agora', __name__)

path='../../'

@bp.route('/')
def index():
    return render_template('index.html', help=url_for('agora.help'))

@bp.route('/help')
def help():
    current_app.logger.warning('Not implemented.')
    return 'If I had implemented help already, here you\'d see documentation on all URL endpoints. For now, please refer to the <a href="https://flancia.org/go/agora">code</a>.'

@bp.route('/ls')
def ls():
    current_app.logger.warning('Not implemented.')
    posts = [f for f in glob.glob(path + '**/*.md', recursive=True)]
    return str(posts)

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
    current_app.logger.warning('Not implemented.')
    return 'If I had implemented reading notes already, here you would see the note named "%s".' % escape(note)
