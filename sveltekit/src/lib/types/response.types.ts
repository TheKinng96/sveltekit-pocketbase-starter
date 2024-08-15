export interface ValidationError {
	code: string
	message: string
}

export interface ErrorResponse<T extends Record<string, ErrorDetail>> {
	code: number
	message: string
	data: T
}

export interface ErrorDetail {
	code: string
	message: string
}

export type Message = {
	status: 'error' | 'success'
	text?: {
		title: string
		description?: string
	}
}
