<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

	import '../app.pcss'
	import { Toaster } from '$lib/components/ui/sonner'
	import { AppNavbar } from '$lib/components/customUi/navbar'
	import type { PageData } from './$types'
	import { setUser } from '@/stores/user'

	export let data: PageData

	$: if (data.user) {
		setUser(data.user)
	}
</script>

<ParaglideJS {i18n}>
	<Toaster richColors />
	<AppNavbar />

	<slot />
</ParaglideJS>
