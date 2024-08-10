export interface ValidationError {
	code: string
	message: string
}

export interface ErrorResponse<T> {
	code: number
	message: string
	data: T
}

export type Message = { status: 'error' | 'success'; text: string }
