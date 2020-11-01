#!/bin/bash
uwsgi --socket 0.0.0.0:5000 --protocol=http --module 'app:create_app()'                       
