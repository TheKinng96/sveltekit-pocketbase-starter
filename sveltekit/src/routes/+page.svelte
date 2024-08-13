<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import * as m from '$lib/paraglide/messages.js'
	import { languageTag } from '$lib/paraglide/runtime.js'
</script>

<h1>Welcome to SvelteKit in {languageTag()}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button href="/login" variant="outline" class="absolute right-4 top-4 md:right-8 md:top-8">
	{m.button_login()}
</Button>
