import { ColormeTokenRequest } from '@/server/Colorme.api'
import type { LayoutServerLoad } from './$types'
import { COLORME_CLIENT, COLORME_REDIRECT_URL } from '$env/static/private'

export const load = (async () => {
	const colormeUrl = await new ColormeTokenRequest(
		COLORME_CLIENT,
		COLORME_REDIRECT_URL,
	).getAuthUrl()

	return { colormeUrl }
}) satisfies LayoutServerLoad
