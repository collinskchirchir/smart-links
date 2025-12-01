import { Hono } from 'hono'

export const App = new Hono<{Bindings: Env}>();

App.get('/:id', async (c) => {
	const cf = c.req.raw.cf
	const country = cf?.country
	const lat = cf?.latitude
	const long = cf?.longitude
	const {} = c.req.param('id')
	return c.json({
		country,
		lat,
		long
	})
})
