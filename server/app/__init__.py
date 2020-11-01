import bleach
import os
from flask import Flask
from flaskext.markdown import Markdown
from markdown.extensions.wikilinks import WikiLinkExtension

def wikilink_to_url(label, base, end):
    label = label.lower()
    label = label.replace(' ', '-')
    url = '/wikilink/' + label
    return url

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # Add blueprints here.
    from . import agora
    app.register_blueprint(agora.bp)
    app.add_url_rule('/', endpoint='index')

    # Jinja2 extensions.
    Markdown(app, extensions=[WikiLinkExtension(build_url=wikilink_to_url)])
 
    @app.template_filter('linkify')
    def linkify(s):
         return bleach.linkify(s)

    return app
