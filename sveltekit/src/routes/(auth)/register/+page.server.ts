import type { Actions } from './$types'
import { fail, message, superValidate, type Infer } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { formSchema, type FormSchema } from './schema'
import type { ErrorResponse, Message } from '$lib/types/response.types'

export const load = async () => {
	const form = await superValidate<Infer<typeof formSchema>, Message>(zod(formSchema))

	return { form }
}

export const actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, zod(formSchema))

		if (!form.valid) {
			return fail(400, { form })
		}

		const { email, password } = form.data

		const data = {
			username: email.split('@')[0],
			email: email,
			emailVisibility: true,
			password: password,
			passwordConfirm: password,
			name: 'test',
		}

		try {
			await locals.pb.collection('users').create(data)
		} catch (error) {
			const err = error as { response: ErrorResponse<FormSchema> }

			return message(form, { text: err.response.message, status: 'error' })
		}

		return message(form, { text: 'created successfully!', status: 'success' })
	},
} satisfies Actions
