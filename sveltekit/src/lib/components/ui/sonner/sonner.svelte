<script lang="ts">
	import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner'
	import { mode } from 'mode-watcher'

	type $$Props = SonnerProps
</script>

<Sonner
	theme={$mode}
	class="toaster group"
	toastOptions={{
		classes: {
			toast:
				'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
			description: 'group-[.toast]:text-muted-foreground',
			actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
			cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
			error:
				'group toast group-[.toaster]:bg-red group-[.toaster]:text-red-600 dark:group-[.toaster]:text-foreground group-[.toaster]:shadow-lg',
			success:
				'group toast group-[.toaster]:bg-green group-[.toaster]:text-green-600 dark:group-[.toaster]:text-foreground group-[.toaster]:shadow-lg',
			warning:
				'group toast group-[.toaster]:bg-yellow group-[.toaster]:text-yellow-600 dark:group-[.toaster]:text-foreground group-[.toaster]:shadow-lg',
			info: 'group toast group-[.toaster]:bg-blue group-[.toaster]:text-blue-600 dark:group-[.toaster]:text-foreground group-[.toaster]:shadow-lg',
		},
	}}
	{...$$restProps}
/>
