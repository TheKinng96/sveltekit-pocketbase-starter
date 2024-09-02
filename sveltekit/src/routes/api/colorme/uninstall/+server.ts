import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request, locals }) => {
	const body = await request.json()

	try {
		console.log('uninstall', body)
		return new Response()
	} catch (error) {
		throw new Error()
	}
}
