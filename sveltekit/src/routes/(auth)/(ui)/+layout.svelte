<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js'
	import AuthenticationLight from '$lib/img/auth/authentication-light.png'
	import AuthenticationDark from '$lib/img/auth/authentication-dark.png'
	import * as m from '$lib/paraglide/messages.js'
</script>

<div class="md:hidden">
	<enhanced:img src={AuthenticationLight} alt="Authentication" class="block dark:hidden" />
	<enhanced:img src={AuthenticationDark} alt="Authentication" class="hidden dark:block" />
</div>
<div
	class="container relative hidden min-h-[calc(100vh-4rem)] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<div class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
		<div
			class="absolute inset-0 bg-cover"
			style="
				background-image:
					url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
		/>
		<div class="relative z-20 flex items-center text-lg font-medium">Acme Inc</div>
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2">
				<p class="text-lg">
					{@html m.auth_quote_content()}
				</p>
				<footer class="text-sm">{m.auth_quote_author()}</footer>
			</blockquote>
		</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:-mt-8 sm:w-[350px]">
			<slot />
		</div>
	</div>
</div>
