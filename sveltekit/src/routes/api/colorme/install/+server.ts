import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { PUBLIC_APP_URL } from '$env/static/public'

export const POST: RequestHandler = async ({ request, locals }) => {
	const body = await request.json()

	// At this point, new user should haven't been created yet
	try {
		console.log('install', body)
		// Redirect to login page
		return json({
			redirect_url: `${PUBLIC_APP_URL}login`,
		})
	} catch (error) {
		throw new Error()
	}
}
