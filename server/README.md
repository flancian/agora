# To develop

Install OS dependencies:
```
$ apt-get install python3 python3-venv python3-pip
```

Then Flask inside a virtual environment in this directory:
```
python3 -m venv venv
. venv/bin/activate
pip install Flask
```

Then run the development server:
```
./run.sh
```

## Optional: my git configuration

(Tangent) in case this is your first git contribution/you just haven't done it and you find this useful. This is my git config:

```
git config --global user.email "0@flancia.org"
git config --global user.name "Flancian"
git config --global alias.st status
git config --global alias.ci commit
git config --global alias.co checkout
git config --global alias.f "reset --hard HEAD"
```

## About the project
As you might have inferred from the above, this project is based on [Flask](https://flask.palletsprojects.com). ```/app``` hosts the Flask app. In it:

```/templates``` are Jinja2 templates.
(...)
