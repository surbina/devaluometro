from flask_restful import Api
from server.api.resources.Quotations import Quotations

def init_api(app):
	def get_resource_path(Resource):
		API_PATH = '/api'

		return '{}{}'.format(API_PATH, Resource.PATH)

	api = Api(app)

	api.add_resource(Quotations, get_resource_path(Quotations))

	return api
