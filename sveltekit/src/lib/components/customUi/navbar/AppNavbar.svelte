<script lang="ts">
	import * as m from '$lib/paraglide/messages.js'
	import { Button } from '$lib/components/ui/button'
	import { page } from '$app/stores'
	import { LogIn, UserRoundPlus } from 'lucide-svelte'
	import UserNav from './components/UserNav.svelte'
	import type { Option } from '@/types/default.types'
	import { userStore } from '$lib/stores/user'
	import type { UsersResponse } from '@/types/pocketbase-types'
	import { onDestroy } from 'svelte'

	let user: UsersResponse | null = null

	const unsubscribe = userStore.subscribe((value: UsersResponse | null) => {
		user = value
	})

	onDestroy(() => {
		unsubscribe()
	})

	const guestItems: Option[] = [
		{
			label: m.nav_awards(),
			value: 'awards',
		},
		{
			label: m.nav_about(),
			value: 'about',
		},
	]

	// Guest navigation
	let navItems: Option[] = guestItems

	$: if (user) {
		navItems = [
			{
				label: m.nav_dashboard(),
				value: '/dashboard',
			},
		]
	} else {
		navItems = guestItems
	}
</script>

<div class="sticky top-0 z-40 w-[100vw] bg-slate-50 dark:bg-slate-800">
	<div class="mx-auto flex min-h-[4rem] max-w-[60rem] items-center justify-between gap-4">
		<!-- Logo -->
		{#if user}
			<a href="/dashboard">
				<img class="size-10" src="/favicon.png" alt="app logo" />
			</a>
		{:else}
			<a href="/">
				<img class="size-10" src="/favicon.png" alt="app logo" />
			</a>
		{/if}

		<!-- Content -->
		<div class="ml-8 flex flex-1 justify-start gap-4">
			{#each navItems as item (item.value)}
				{@const link = user ? item.value : `#${item.value}`}
				<Button variant="ghost" href={link}>
					{item.label}
				</Button>
			{/each}
		</div>

		<!-- Profile / login signup -->
		{#if user}
			<UserNav {user} />
		{:else if $page.url.pathname === '/register'}
			<Button variant="ghost" href="/login" class="flex gap-2">
				<LogIn size="18" />
				{m.button_login()}
			</Button>
		{:else}
			<Button variant="ghost" href="/register" class="flex gap-2">
				<UserRoundPlus size="18" />
				{m.button_register()}
			</Button>
		{/if}
	</div>
</div>
