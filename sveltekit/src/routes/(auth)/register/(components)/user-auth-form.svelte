<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js'
	import { cn } from '$lib/utils.js'
	import * as Form from '$lib/components/ui/form'
	import { formSchema, type FormSchema } from '../schema'
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms'
	import { zodClient } from 'sveltekit-superforms/adapters'
	import { toast } from 'svelte-sonner'

	export let data: SuperValidated<Infer<FormSchema>>

	const form = superForm(data, {
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

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<form method="POST" use:enhance>
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input {...attrs} bind:value={$formData.email} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>Password</Form.Label>
				<Input {...attrs} bind:value={$formData.password} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button>Submit</Form.Button>
	</form>
</div>
