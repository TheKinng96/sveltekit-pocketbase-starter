import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { PUBLIC_APP_URL } from '$env/static/public'

export const POST: RequestHandler = async ({ request, locals }) => {
	const body = await request.json()

	// At this point, new user should haven't been created yet
	try {
		console.log('install', body)
		// Update plan history
		// await locals.pb.collection('planHistories').create({
		// 	accountId: body.account_id,
		// 	recurringApplicationChargeId: body.recurring_application_charge_id,
		// 	applicationChargeSourceId: body.application_charge_source_id,
		// 	mail: body.mail,
		// })

		// Redirect to login page
		return json({
			redirect_url: `${PUBLIC_APP_URL}login`,
		})
	} catch (error) {
		throw new Error()
	}
}
