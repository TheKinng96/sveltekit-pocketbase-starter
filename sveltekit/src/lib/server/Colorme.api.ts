import type {
	CouponResponse,
	Coupon,
	Customer,
	ShopResponse,
	ColormeShop,
	ColormeCoupon,
} from '$lib/types/colorme.types'
import { PUBLIC_APP_URL } from '$env/static/public'

abstract class ColormeRequest {
	protected baseUrl: string

	constructor() {
		this.baseUrl = 'https://api.shop-pro.jp/'
	}
}

export class ColormeTokenRequest extends ColormeRequest {
	private clientId: string
	private clientSecret: string
	private redirectUri: string

	constructor(clientId: string, redirectUri: string, clientSecret?: string) {
		super()
		this.clientId = clientId
		this.redirectUri = redirectUri
		this.clientSecret = clientSecret ?? ''
	}

	// Method to create the authorization URL
	getAuthUrl() {
		const params = new URLSearchParams({
			response_type: 'code',
			client_id: this.clientId,
			redirect_uri: this.redirectUri,
			scope:
				'read_sales write_sales read_products write_products read_shop_coupons write_application_charge read_shop_script_tags write_shop_script_tags',
		})
		return `${this.baseUrl}oauth/authorize?${params.toString()}`
	}

	// Method to exchange the authorization code for an access token
	async getAccessToken(authorizationCode: string) {
		const body = new URLSearchParams({
			grant_type: 'authorization_code',
			code: authorizationCode,
			redirect_uri: this.redirectUri,
			client_id: this.clientId,
			client_secret: this.clientSecret,
		})

		const response = await fetch(`${this.baseUrl}oauth/token`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: body.toString(),
		})

		const all = await response.json()
		return all.access_token
	}
}

export class ColormeAuthenticatedRequest extends ColormeRequest {
	token: string // Access token

	constructor(token: string) {
		super()
		this.token = token
	}

	async getShopInfo(): Promise<ColormeShop> {
		const response = await fetch(`${this.baseUrl}v1/shop`, {
			headers: { Authorization: `Bearer ${this.token}` },
		})

		const { shop } = (await response.json()) as ShopResponse

		if (!shop.id)
			return {
				id: '',
				name: '',
				email: '',
				shopMail: '',
				url: '',
				shopLogoUrl: '',
			}

		const { id, name1, user_mail, shop_mail_1, url, shop_logo_url } = shop

		return {
			id,
			name: name1,
			email: user_mail,
			shopMail: shop_mail_1,
			url,
			shopLogoUrl: shop_logo_url,
		}
	}

	async getCoupons(): Promise<ColormeCoupon[]> {
		const response = await fetch(`${this.baseUrl}v1/shop_coupons`, {
			headers: { Authorization: `Bearer ${this.token}` },
		})

		const shopResponse: CouponResponse = await response.json()
		return shopResponse.shop_coupons.map((coupon): ColormeCoupon => {
			const { id, name, code, usage_limit, starts_at, ends_at, total_usage_limit, status } = coupon

			return {
				id,
				name,
				code,
				usageLimit: usage_limit,
				startsAt: starts_at,
				endsAt: ends_at,
				totalUsageLimit: total_usage_limit,
				status,
			}
		})
	}

	async getCustomerInfo(customerId: string): Promise<Customer> {
		const response = await fetch(`${this.baseUrl}v1/customers/${customerId}`, {
			headers: { Authorization: `Bearer ${this.token}` },
		})

		const customerResponse: { customer: Customer; meta: object } = await response.json()
		return customerResponse.customer
	}
}

export class ColormeSetScriptRequest extends ColormeAuthenticatedRequest {
	private surveyId: string
	private destination: 'shop' | 'thanks_page'

	constructor(token: string, destination: 'shop' | 'thanks_page' = 'shop', surveyId: string) {
		super(token)
		this.surveyId = surveyId
		this.destination = destination
	}

	async setScript(hash: string) {
		const body = JSON.stringify({
			script_tag: {
				src: `${PUBLIC_APP_URL}scripts/${this.surveyId}.js`,
				integrity: hash,
				display_scope: this.destination,
			},
		})

		const response = await fetch(`${this.baseUrl}appstore/v1/script_tags.json`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${this.token}`,
				'Content-Type': 'application/json',
			},
			body,
		})

		const scriptTagResponse = await response.json()
		return scriptTagResponse.script_tag.id
	}

	async updateScript(tagId: string, hash: string) {
		const response = await fetch(`${this.baseUrl}appstore/v1/script_tags/${tagId}.json`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${this.token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				script_tag: {
					src: `${PUBLIC_APP_URL}scripts/${this.surveyId}.js`,
					integrity: hash,
					display_scope: this.destination,
				},
			}),
		})

		const scriptTagResponse = await response.json()
		return scriptTagResponse.script_tag.id
	}
}
