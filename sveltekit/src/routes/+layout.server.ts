import type { LayoutServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'

export const load = (async ({ locals }) => {
	// console.log(locals)
	// if (!locals.user) {
	// 	throw redirect(302, '/login')
	// }

	return {}
}) satisfies LayoutServerLoad
