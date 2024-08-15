<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js'
	import * as Avatar from '$lib/components/ui/avatar/index.js'
	import { Button } from '$lib/components/ui/button/index.js'
	import type { AuthSystemFields } from '$lib/types/pocketbase-types'
	import { invalidateAll } from '$app/navigation'

	export let user: AuthSystemFields

	const userNameAbbr = () => {
		const username = user.username.split('@')[0]
		return username.length > 3 ? username.slice(0, 2) : username
	}

	const handleLogout = async () => {
		const response = await fetch('/logout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (response.status === 200) {
			invalidateAll()
		}
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} class="relative h-8 w-8 rounded-full">
			<Avatar.Root class="size-10">
				<Avatar.Image
					src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${user.username}`}
					alt={`${user.username}'s avatar`}
				/>
				<Avatar.Fallback class="uppercase">{userNameAbbr()}</Avatar.Fallback>
			</Avatar.Root>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" align="end">
		<DropdownMenu.Label class="font-normal">
			<div class="flex flex-col space-y-1">
				<p class="text-sm font-medium leading-none">{user.username}</p>
				<p class="text-muted-foreground text-xs leading-none">{user.email}</p>
			</div>
		</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				Profile
				<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				Billing
				<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				Settings
				<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>New Team</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item on:click={handleLogout} class="cursor-pointer">
			Log out
			<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
