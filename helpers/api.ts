export const API = {
	topPage: {
		find: process.env.PUBLIC_BACKEND + '/api/top-page/find',
		byAlias: process.env.PUBLIC_BACKEND + '/api/top-page/byAlias/'
	},
	product: {
		find: process.env.PUBLIC_BACKEND + '/api/product/find'
	},
	review: {
		createDemo: process.env.PUBLIC_BACKEND + '/api/review/create-demo'
	}
}