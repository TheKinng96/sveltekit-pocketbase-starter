import { i18n } from '$lib/i18n'
import { sequence } from '@sveltejs/kit/hooks'
import Pocketbase from 'pocketbase'
import type { Handle } from '@sveltejs/kit'
import type { AuthSystemFields, TypedPocketBase } from '$lib/types/pocketbase-types'

const handlePocketbase: Handle = async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase('http://pocketbase:8090') as TypedPocketBase

	// Remove this line if you want to stop multiple request calling at the same time
	event.locals.pb.autoCancellation(false)

	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = event.locals.pb.authStore.model as AuthSystemFields
	} else {
		event.locals.user = undefined
	}

	const response = await resolve(event)

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

	return response
}

export const handle = sequence(i18n.handle(), handlePocketbase)
