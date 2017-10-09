from flask import Flask
from server.api.Api import init_api

app = Flask(__name__)
init_api(app)
