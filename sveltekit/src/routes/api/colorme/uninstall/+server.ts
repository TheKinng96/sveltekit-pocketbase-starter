import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request, locals }) => {
	const body = await request.json()

	try {
		console.log('uninstall', body)
		// Update plan history
		// await locals.pb.collection('planHistories').create({
		// 	accountId: body.account_id,
		// 	recurringApplicationChargeId: body.recurring_application_charge_id,
		// 	applicationChargeSourceId: body.application_charge_source_id,
		// 	reason: body.reason,
		// 	uninstalledAt: new Date(body.uninstalled_at * 1000),
		// })

		return new Response()
	} catch (error) {
		throw new Error()
	}
}
