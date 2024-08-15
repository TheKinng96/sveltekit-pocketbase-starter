import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load = (async ({ locals, parent }) => {
	await parent()

	if (!locals.user) {
		redirect(302, '/')
	}
	return {}
}) satisfies LayoutServerLoad
