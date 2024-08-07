<script lang="ts">
	import type { PageData } from './$types'
	import { Button } from '$lib/components/ui/button/index.js'

	export let data: PageData
</script>

<h1>Login Page</h1>

<Button href="/register" variant="outline" class="absolute right-4 top-4 md:right-8 md:top-8">
	Register
</Button>
