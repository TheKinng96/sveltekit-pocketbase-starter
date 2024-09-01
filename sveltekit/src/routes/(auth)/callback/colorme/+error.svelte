<script lang="ts">
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import * as m from '$lib/paraglide/messages.js'

	onMount(() => {
		setTimeout(() => {
			goto('/login')
		}, 2000)
	})
</script>

<h1 class="text-xl text-red-800">{m.callback_error()}</h1>
