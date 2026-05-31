<script lang="ts">
	import { Minus, Plus } from '@lucide/svelte';
	import { type Component, type Snippet } from 'svelte';

	const {
		id,
		name,
		icon: Icon,
		title,
		defaultOpen = false,
		children
	}: {
		id: string;
		name: string;
		icon?: Component;
		title: string;
		defaultOpen?: boolean;
		children: Snippet;
	} = $props();

	// svelte-ignore state_referenced_locally
	let opened = $state(defaultOpen);
	let changed: boolean = $state(false);
	let element: Element | null = $state(null);
	$effect(() => {
		if (!changed && defaultOpen === !opened) {
			changed = true;
		}
		if (changed && opened) {
			setTimeout(() => {
				if (element)
					element.scrollIntoView({
						behavior: 'smooth',
						block: 'nearest'
					});
			}, 100);
		}
	});
</script>

<details
	class="collapse bg-base-200 border border-primary"
	{name}
	bind:open={opened}
	bind:this={element}
>
	<summary class="collapse-title font-semibold flex justify-between items-center pr-4 gap-4" {id}>
		<div class="flex items-center gap-2">
			<Icon class="shrink-0 text-secondary" />
			<span class="text-neutral">{title}</span>
		</div>

		{#if opened}
			<Minus size="1rem" class="shrink-0" />
		{:else}
			<Plus size="1rem" class="shrink-0" />
		{/if}
	</summary>
	<div class="collapse-content">
		{@render children()}
	</div>
</details>
