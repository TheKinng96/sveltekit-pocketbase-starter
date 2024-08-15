import { z } from 'zod'
import * as m from '$lib/paraglide/messages.js'
import { parseZodSchema } from 'zod-key-parser'
import type { ErrorDetail } from '$lib/types/response.types'

export const formSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(8),
		passwordConfirm: z.string().min(8),
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: 'custom',
				message: m.validation_passwordConfirm(),
				path: ['passwordConfirm'],
			})
		}
	})

export type RegisterFormSchema = typeof formSchema
const { keys } = parseZodSchema(formSchema)
export type RegisterFormError = {
	[K in keyof typeof keys]: ErrorDetail
}
export type RegisterErrorKeys = 'validation_invalid_email' | undefined
