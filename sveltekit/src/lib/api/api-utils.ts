export async function fetchFromApi<T>(
	url: string,
	body: Record<string, unknown>,
	method: 'POST' | 'GET' | 'PUT' | 'DELETE' = 'POST',
	additionalHeaders: Record<string, string> = {},
): Promise<T> {
	try {
		const headers = {
			'Content-Type': 'application/json',
			...additionalHeaders,
		}

		const response = await fetch(`http://pocketbase:8090/api/${url}`, {
			method,
			headers,
			body: JSON.stringify(body),
		})

		if (response.ok) {
			return response.json() as Promise<T>
		} else {
			const errorData = await response.json()
			throw new Error(`Error: ${response.status} - ${JSON.stringify(errorData)}`)
		}
	} catch (error) {
		console.error('Fetch error:', error)
		throw new Error(
			`Failed to fetch from ${url}: ${error instanceof Error ? error.message : String(error)}`,
		)
	}
}
