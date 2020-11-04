import datetime
from flask import Blueprint, url_for, render_template, current_app, Response, redirect
from markupsafe import escape
from . import db
bp = Blueprint('agora', __name__)

@bp.route('/')
def index():
    return render_template('index.html', help=url_for('agora.help'), nodes=url_for('agora.nodes'), journals=url_for('agora.journals'))

@bp.route('/help')
def help():
    current_app.logger.warning('Not implemented.')
    return 'If I had implemented help already, here you\'d see documentation on all URL endpoints. For now, please refer to the <a href="https://flancia.org/go/agora">code</a>.'

@bp.route('/notes') # alias for now
@bp.route('/nodes')
def nodes():
    return render_template('nodes.html', nodes=db.all_nodes())

@bp.route('/journals')
def journals():
    return render_template('nodes.html', nodes=db.all_journals())

@bp.route('/today')
def today():
    today = datetime.datetime.now().date()
    return redirect("https://anagora.org/node/%s" % today.strftime("%Y-%m-%d"))

@bp.route('/u/<username>')
@bp.route('/user/<username>')
def user(username):
    current_app.logger.warning('Not implemented.')
    return 'If I had implemented reading user profiles already, here you would see user named "%s".' % escape(username)

@bp.route('/garden/<garden>')
def garden(garden):
    current_app.logger.warning('Not implemented.')
    return 'If I had implemented rendering gardens already, here you would see garden named "%s".' % escape(garden)

@bp.route('/node/<node>')
@bp.route('/wikilink/<node>') # alias for now
def wikilink(node):
    return render_template('nodes_rendered.html', wikilink=node, nodes=db.nodes_by_wikilink(node), backlinks=db.nodes_by_outlink(node))

@bp.route('/raw/<node>')
def raw(node):
    return Response("\n\n".join([str(n.outlinks) for n in db.nodes_by_wikilink(node)]), mimetype="text/plain")

@bp.route('/backlinks/<node>')
def backlinks(node):
    return render_template('nodes.html', nodes=db.nodes_by_outlink(node))
