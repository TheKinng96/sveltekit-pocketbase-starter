import { PASSWORD_SECRET } from '$env/static/private'

export async function generatePassword(userKey: string): Promise<string> {
	const combinedKey = `${PASSWORD_SECRET}:${userKey}`

	const encoder = new TextEncoder()
	const keyData = encoder.encode(combinedKey)

	const cryptoKey = await crypto.subtle.importKey(
		'raw',
		keyData,
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign'],
	)

	const signature = await crypto.subtle.sign('HMAC', cryptoKey, keyData)

	const hashArray = Array.from(new Uint8Array(signature))
	const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')

	const password = hashHex.substring(0, 16)

	return password
}
