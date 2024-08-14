<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

	import '../app.pcss'
	import { Toaster } from '$lib/components/ui/sonner'
	import { AppNavbar } from '$lib/components/navbar'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<ParaglideJS {i18n}>
	<Toaster richColors />
	<AppNavbar {data} />

	<slot />
</ParaglideJS>
