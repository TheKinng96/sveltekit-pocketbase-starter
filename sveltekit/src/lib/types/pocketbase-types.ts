/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	AuthProviders = "authProviders",
	Shops = "shops",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum AuthProvidersProviderOptions {
	"colorme" = "colorme",
	"shopify" = "shopify",
}
export type AuthProvidersRecord = {
	accessToken: string
	deletedAt?: IsoDateString
	provider: AuthProvidersProviderOptions
	providerId: string
	userId: RecordIdString
}

export type ShopsRecord = {
	deletedAt?: IsoDateString
	shopEmail: string
	shopLogoUrl: string
	url: string
	userId: RecordIdString
}

export type UsersRecord = {
	avatar?: string
	lastLogin?: IsoDateString
}

// Response types include system fields and match responses from the PocketBase API
export type AuthProvidersResponse<Texpand = unknown> = Required<AuthProvidersRecord> & BaseSystemFields<Texpand>
export type ShopsResponse<Texpand = unknown> = Required<ShopsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	authProviders: AuthProvidersRecord
	shops: ShopsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	authProviders: AuthProvidersResponse
	shops: ShopsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'authProviders'): RecordService<AuthProvidersResponse>
	collection(idOrName: 'shops'): RecordService<ShopsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
