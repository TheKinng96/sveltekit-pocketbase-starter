import type { Actions } from './$types'
import { fail, message, superValidate, type Infer } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { formSchema } from './schema'
import type { Message } from '$lib/types/response.types'
import * as m from '$lib/paraglide/messages.js'
import { ColormeTokenRequest } from '$lib/server/Colorme.api'
import { COLORME_CLIENT, COLORME_REDIRECT_URL } from '$env/static/private'

export const load = async () => {
	const form = await superValidate<Infer<typeof formSchema>, Message>(zod(formSchema))

	return {
		form,
		colormeLoginUrl: await new ColormeTokenRequest(
			COLORME_CLIENT,
			COLORME_REDIRECT_URL,
		).getAuthUrl(),
	}
}

export const actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, zod(formSchema))

		if (!form.valid) {
			return fail(400, { form })
		}

		const { email, password } = form.data

		try {
			await locals.pb.collection('users').authWithPassword(email, password)
		} catch (error) {
			return message(form, {
				text: {
					title: m.error_failedToLogin(),
					description: m.error_failedToLoginDescription(),
				},
				status: 'error',
			})
		}

		return message(form, {
			status: 'success',
		})
	},
} satisfies Actions
