import { Hono } from 'hono'

export const App = new Hono<{Bindings: Env}>();

App.get('/:id', async (c) => {
	const {} = c.req.param('id')
	return c.json({
		message: 'Hellow world',
	})
})
