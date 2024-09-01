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
	import { UserRoundPlus } from 'lucide-svelte'
	import { AppPasswordInput } from '$lib/components/customUi/password'
	import { goto } from '$app/navigation'
	import Button from '@/components/ui/button/button.svelte'
	import { Icons } from '$lib/icons'

	export let data: PageData

	const form = superForm(data.form, {
		validators: zodClient(formSchema),
	})

	const { form: formData, enhance, message } = form

	$: if (!!$message?.status && $message.text) {
		if ($message.status === 'success') {
			toast.success($message.text.title)
			goto('/dashboard')
		} else {
			toast.error($message.text.title, {
				description: $message.text.description,
			})
		}
	}

	let className: string | undefined | null = undefined
	export { className as class }
</script>

<div class="flex flex-col space-y-2 text-center">
	<h1 class="text-2xl font-semibold tracking-tight">{m.auth_register_formTitle()}</h1>
	<p class="text-muted-foreground text-sm">{m.auth_register_formDescription()}</p>
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
				<AppPasswordInput {...attrs} bind:value={$formData.password} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="passwordConfirm">
			<Form.Control let:attrs>
				<Form.Label>{m.form_passwordConfirmLabel()}</Form.Label>
				<AppPasswordInput {...attrs} bind:value={$formData.passwordConfirm} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button class="mt-4 flex w-full flex-1 gap-4">
			<UserRoundPlus size="18" />
			{m.button_login()}
		</Form.Button>
	</form>

	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t" />
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background text-muted-foreground px-2"> Or continue with </span>
		</div>
	</div>

	<Button variant="outline" href={data.colormeUrl} class="flex gap-2">
		<Icons.colorme class="h-full scale-90" />
		ColorMe
	</Button>
</div>

<p class="text-muted-foreground px-8 text-center text-sm">
	{@html m.auth_register_termsAndConditions({
		termsLink: `<a href="/terms" class="hover:text-primary underline underline-offset-4">${m.auth_register_termsOfService()}</a>`,
		privacyLink: `<a href="/privacy" class="hover:text-primary underline underline-offset-4">${m.auth_register_privacyPolicy()}</a>`,
	})}
</p>
