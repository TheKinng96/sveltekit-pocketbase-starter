import type { PageServerLoad } from './$types'

export const load = (async ({ locals }) => {
	const user = locals.user

	if (!user) {
		throw new Error('Not authenticated')
	}

	return { user }
}) satisfies PageServerLoad
