<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

	import '../app.pcss'
	import { Toaster } from '$lib/components/ui/sonner'
</script>

<ParaglideJS {i18n}>
	<Toaster richColors />

	<slot />
</ParaglideJS>
