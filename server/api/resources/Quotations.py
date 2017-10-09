import requests
from flask_restful import Resource

class Quotations(Resource):
	PATH = '/quotations'

	def get(self):
		return requests.get('https://www.bloomberg.com/markets/api/bulk-time-series/price/USDARS%3ACUR?timeFrame=5_YEAR').json(), 200
