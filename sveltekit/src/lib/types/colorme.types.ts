export interface ShopResponse {
	shop: {
		id: string
		login_id: string
		name1: string
		name2: string
		user_mail: string
		shop_mail_1: string
		shop_mail_2: string
		url: string
		shop_logo_url: string
	}
}

/**
 * Type for app use
 */
export interface ColormeShop {
	id: string
	name: string
	email: string
	shopMail: string
	url: string
	shopLogoUrl: string
}

export interface AuthResponse {
	access_token: string
	token_type: string
	scope: string
	created_at: number
}

export interface CouponResponse {
	shop_coupons: Coupon[]
}

export interface Coupon {
	id: number
	name: string
	code: string
	coupon_type: string
	discount_amount: number
	minimum_amount: number
	starts_at: number
	ends_at: number
	total_usage_limit: number
	usage_limit: string
	group_limit_type: string
	status: string
	created_at: number
	updated_at: number
}

export interface ColormeCoupon {
	id: number
	name: string
	code: string
	usageLimit: string
	startsAt: number
	endsAt: number
	totalUsageLimit: number
	status: string
}

export interface Customer {
	id: number
	account_id: string
	name: string
	furigana: string
	hojin: string
	busho: string
	sex: string
	birthday: string
	postal: string
	pref_id: string
	pref_name: string
	address1: string
	address2: string
	mail: string
	tel: string
	fax: string
	tel_mobile: string
	other: string
	points: number
	member: boolean
	sales_count: number
	receive_mail_magazine: boolean
	answer_free_form1: string
	answer_free_form2: string
	answer_free_form3: string
}
