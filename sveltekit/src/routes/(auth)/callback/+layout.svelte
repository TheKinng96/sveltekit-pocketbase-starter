<script lang="ts">
	import { AppSpinner } from '$lib/components/customUi/loader/'
</script>

<div
	class="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-[#97EBF4] bg-gradient-to-tr from-[#97EBF4] to-white dark:from-black dark:to-[#04619F]"
>
	<div class="flex -translate-y-16 flex-col items-center justify-center gap-6">
		<slot />

		<AppSpinner />
	</div>
</div>
