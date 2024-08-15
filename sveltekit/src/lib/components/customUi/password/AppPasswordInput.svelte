<script lang="ts">
	import { Input } from '$lib/components/ui/input'
	import { Eye, EyeOff } from 'lucide-svelte'
	import * as m from '$lib/paraglide/messages.js'

	export let value: string

	let type = 'password'

	const handleToggle = () => {
		type = type === 'password' ? 'text' : 'password'
	}
</script>

<div class="relative">
	<Input {type} {...$$restProps} bind:value />

	<button
		type="button"
		on:click={handleToggle}
		class="absolute right-2 top-0 h-full"
		title={m.button_passwordHover()}
	>
		{#if type == 'password'}
			<Eye size="20" />
		{:else}
			<EyeOff size="20" />
		{/if}
	</button>
</div>
