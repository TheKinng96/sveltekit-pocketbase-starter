import type { Actions } from './$types'
import { fail, message, superValidate, type Infer } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { formSchema, type RegisterErrorKeys, type RegisterFormError } from './schema'
import type { ErrorResponse, Message } from '$lib/types/response.types'
import * as m from '$lib/paraglide/messages.js'

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
			const err = error as {
				response: ErrorResponse<RegisterFormError>
			}

			let errorCode: RegisterErrorKeys = err.response.data?.email?.code as RegisterErrorKeys

			// To parse the error message from pocketbase to locales
			const errors = {
				validation_invalid_email: m.error_validationInvalidEmail(),
			} as Record<NonNullable<RegisterErrorKeys>, string>

			return message(form, {
				text: {
					title: err.response.message,
					description: errorCode ? errors[errorCode] : undefined,
				},
				status: 'error',
			})
		}

		return message(form, {
			text: {
				title: m.success_createAccount(),
			},
			status: 'success',
		})
	},
} satisfies Actions
