import type { RequestHandler } from './$types'
import * as m from '$lib/paraglide/messages.js'

export const POST: RequestHandler = async ({ locals }) => {
	await locals.pb.authStore.clear()
	return new Response(m.success_message())
}
