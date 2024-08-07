import type { Actions } from './$types'

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData()

		console.log(data)
	},
} satisfies Actions
