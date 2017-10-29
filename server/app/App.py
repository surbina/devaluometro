from flask import Flask
from flask_cors import CORS
from server.api.Api import init_api

app = Flask(__name__)
# Allow CORS for local development
cors = CORS(app, resources={ r"/api/*": {"origins": [ "http://localhost:3000" ]} })
init_api(app)
