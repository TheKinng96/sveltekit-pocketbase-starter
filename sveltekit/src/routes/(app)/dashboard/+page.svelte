<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1>DASHBOARD</h1>

<div>
	Welcome, {data.user.username}!
</div>
