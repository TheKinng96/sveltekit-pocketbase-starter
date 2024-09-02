// Basically all data is passed through dedicated server file
// This store is used on the client side navigation
// To sync the latest version of the state because
// The loaded layout will stay in the same state when loaded
// Eg the user will keep undefined even if it is login on the server side
import type { UsersResponse } from '@/types/pocketbase-types'
import { writable } from 'svelte/store'

export const userStore = writable<UsersResponse | null>(null)

export function setUser(user: UsersResponse | null) {
	userStore.set(user)
}

export function clearUser() {
	userStore.set(null)
}
