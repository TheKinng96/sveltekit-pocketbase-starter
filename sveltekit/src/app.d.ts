import type { AvailableLanguageTag } from '../../lib/paraglide/runtime'
import type { ParaglideLocals } from '@inlang/paraglide-sveltekit'
import type { TypedPocketBase, AuthSystemFields } from '$lib/types/pocketbase-types'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			paraglide: ParaglideLocals<AvailableLanguageTag>

			pb: TypedPocketBase
			user: AuthSystemFields | undefined
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		namespace Superforms {
			type Message = {
				status: 'error' | 'success'
				text?: {
					title: string
					description?: string
				}
			}
		}
	}
}

export {}
