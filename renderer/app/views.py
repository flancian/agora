from flask import Flask, url_for, render_template
from markupsafe import escape
app = Flask(__name__)

@app.route('/')
def index():
        return render_template('index.html', help=url_for('help'))

@app.route('/help')
def help():
    return 'If I had implemented help already, here you\'d see documentation on all URL endpoints. For now, please refer to the <a href="https://flancia.org/go/agora">code</a>.'

@app.route('/user/<username>')
def user(username):
        return 'If I had implemented reading user profiles already, here you would see user named "%s".' % escape(username)

@app.route('/garden/<garden>')
def garden(garden):
        return 'If I had implemented rendering gardens already, here you would see garden named "%s".' % escape(garden)


@app.route('/note/<note>')
def note(note):
        return 'If I had implemented reading notes already, here you would see the note named "%s".' % escape(note)
