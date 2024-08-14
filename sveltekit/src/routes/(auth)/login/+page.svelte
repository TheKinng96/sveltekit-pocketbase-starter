<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js'
	import { cn } from '$lib/utils.js'
	import * as Form from '$lib/components/ui/form'
	import { formSchema } from './schema'
	import { superForm } from 'sveltekit-superforms'
	import { zodClient } from 'sveltekit-superforms/adapters'
	import { toast } from 'svelte-sonner'
	import type { PageData } from './$types'
	import * as m from '$lib/paraglide/messages.js'
	import { LogIn } from 'lucide-svelte'

	export let data: PageData

	const form = superForm(data.form, {
		validators: zodClient(formSchema),
	})

	const { form: formData, enhance, message } = form

	$: if (!!$message?.status) {
		if ($message.status === 'success') {
			toast.success($message.text)
		} else {
			toast.error($message.text)
		}
	}

	let className: string | undefined | null = undefined
	export { className as class }
</script>

<div class="flex flex-col space-y-2 text-center">
	<h1 class="text-2xl font-semibold tracking-tight">{m.auth_login_formTitle()}</h1>
</div>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<form method="POST" use:enhance>
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>{m.form_emailLabel()}</Form.Label>
				<Input {...attrs} bind:value={$formData.email} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>{m.form_passwordLabel()}</Form.Label>
				<Input {...attrs} bind:value={$formData.password} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button class="mt-4 flex gap-4">
			<LogIn size="18" />
			{m.button_login()}
		</Form.Button>
	</form>
</div>
