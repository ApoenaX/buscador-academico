import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

export function makeServer({ environment = 'development' } = {}) {
	let server = createServer({
		environment,

		models: {
			result: Model,
		},

		factories: {
			result: Factory.extend({
				title(i) {
					return `${faker.commerce.product()} ${faker.commerce.product()} ${faker.commerce.product()}`
				},
				description() {
					return faker.commerce.productDescription()
				},
				category() {
					const categories = [
						'primeira',
						'segunda',
						'terceira',
						'quarta',
						'quinta',
					]
					return categories[Math.floor(Math.random() * 5)]
				},
			}),
		},

		seeds(server) {
			server.createList('result', 100)
		},

		routes() {
			this.namespace = 'api'

			this.get(
				'/search',
				(schema, request) => {
					let q = request.queryParams.q
					return schema.results.where(
						(result) => result.category === q
					)
				},
				{ timing: 1000 } // adiciona delay na requisição
			)
		},
	})

	return server
}
