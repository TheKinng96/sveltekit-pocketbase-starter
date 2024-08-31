import { COLORME_CLIENT, COLORME_CLIENT_SECRET, COLORME_REDIRECT_URL } from '$env/static/private'
import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { ColormeAuthenticatedRequest, ColormeTokenRequest } from '$lib/server/Colorme.api'
import * as m from '$lib/paraglide/messages.js'
import { generatePassword } from '@/auth/passwordGenerator'
import { fetchFromApi } from '@/api/api-utils'
import type { AuthProviderInfo } from 'pocketbase'
import type { AuthProvidersResponse } from '@/types/pocketbase-types'

export const load: PageServerLoad = async function ({ url, locals }) {
	const code = url.searchParams.get('code') || ''

	if (!code) {
		error(401, m.error_unauthorized())
	}

	// const accessToken = await new ColormeTokenRequest(
	// 	COLORME_CLIENT,
	// 	COLORME_REDIRECT_URL,
	// 	COLORME_CLIENT_SECRET,
	// ).getAccessToken(code)

	// const colormeShopData = await new ColormeAuthenticatedRequest(accessToken).getShopInfo()

	// if (!accessToken) {
	// 	error(401, m.error_unauthorized())
	// }

	// const password = await generatePassword(colormeShopData.id)
	const password = await generatePassword('colormeShopData.id')

	const authData = await fetchFromApi<AuthProvidersResponse>('colorme/auth', {
		accessToken: 'token',
		password,
		colormeShopData: {
			id: 'string',
			login_id: 'string',
			name1: 'name1',
			name2: 'name2',
			user_mail: 'user@test.com',
			shop_mail_1: 'shop1@test.com',
			shop_mail_2: 'shop2@test.com',
			url: 'https://test.com',
			shop_logo_url: 'https://test.com',
		},
	})

	console.log('authdata', authData, password)

	return {}
}
