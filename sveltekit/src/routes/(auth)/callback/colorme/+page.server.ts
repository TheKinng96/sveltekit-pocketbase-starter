import { COLORME_CLIENT, COLORME_CLIENT_SECRET, COLORME_REDIRECT_URL } from '$env/static/private'
import type { PageServerLoad } from './$types'
import { error, redirect } from '@sveltejs/kit'
import { ColormeAuthenticatedRequest, ColormeTokenRequest } from '$lib/server/Colorme.api'
import * as m from '$lib/paraglide/messages.js'
import { generatePassword } from '@/auth/passwordGenerator'
import { fetchFromApi } from '@/api/api-utils'
import type { AuthProvidersResponse } from '@/types/pocketbase-types'

export const load: PageServerLoad = async function ({ url, locals }) {
	const code = url.searchParams.get('code') || ''

	if (!code) {
		error(401, m.error_unauthorized())
	}

	const accessToken = await new ColormeTokenRequest(
		COLORME_CLIENT,
		COLORME_REDIRECT_URL,
		COLORME_CLIENT_SECRET,
	).getAccessToken(code)

	const colormeShopData = await new ColormeAuthenticatedRequest(accessToken).getShopInfo()

	if (!accessToken) {
		error(401, m.error_unauthorized())
	}

	const password = await generatePassword(colormeShopData.id)

	const { authProvider } = await fetchFromApi<{ authProvider: AuthProvidersResponse }>(
		'colorme/auth',
		{
			accessToken,
			password,
			colormeShopData,
		},
	)

	if (!authProvider) {
		throw error(420, 'User creation failed')
	}

	await locals.pb.collection('users').authWithPassword('user@test.com', password)
	redirect(303, '/dashboard')
}
