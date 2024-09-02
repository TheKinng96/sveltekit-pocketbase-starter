<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import * as m from '$lib/paraglide/messages.js'
	import { setUser } from '@/stores/user'
	import type { PageData } from './$types'

	export let data: PageData

	$: if (data.success && browser) {
		setUser(data.user)
		goto('/dashboard')
	}
</script>

<span class="text-2xl text-neutral-800 dark:text-neutral-100">{m.callback_default()}</span>
