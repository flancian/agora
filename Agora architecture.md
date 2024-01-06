# What is an Agora?

An [Agora](https://anagora.org/wiki/Agora) is a distributed, goal-oriented social network operating on a cooperatively built and maintained knowledge graph. The implementation you are currently looking at tries to assemble such a graph out of a collection of [digital gardens](flancia.org/go/garden), but other data sources are coming.

You can view the reference Agora at https://anagora.org. 
# Architecture 

This Agora's architecture has several components distributed over three git repositories:

- The *Agora root repository*, which you are browsing: <https://github.com/flancian/agora>. 
  - This root repository contains a high level definition of the Agora as expressed by the list of digital gardens to be integrated (`sources.yaml`) and the contract agreed upon by the community (`CONTRACT.md`).
- The *Agora Server*: <https://github.com/flancian/agora-server>.
  - Which contains a reference Python / Flask web app that integrates and serves content. It is live at <https://anagora.org>.
- The *Agora Bridge*: <https://github.com/flancian/agora-bridge>.
  - Which contains a set of processes to retrieve content as volunteered by users.

# To run

To run the reference Agora: 

- Clone all three repositories described above (ideally in the $HOME directory of a dedicated user; this is not strictly needed, but scripts might assume this).
- Install Python requirements in each of `agora-server` and `agora-bridge`:
```
python3 -m venv venv
. venv/bin/activate
pip3 install -r requirements.txt
```
- In `agora-bridge`: run `./run-dev.sh` to start updating repositories defined in `sources.yaml`.
- In `agora-server`: run `./run-dev.sh` to start the dev web interface; or refer to <https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uswgi-and-nginx-on-ubuntu-18-04> for instructions on how to set up the Agora as a system service on top of uwsgi (see `prod.ini`) and nginx.

Of course you are also free to run your own Agora! To do this, just run the bridge against a local `sources.yaml` file -- or fork the root repository and adjust as wished. As usual please reach out if you need a hand with anything :)

# To join

Please see [[README]].


