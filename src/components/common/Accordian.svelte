<script lang="ts">
	import type { Component } from 'svelte';
	import AccordianItem from './AccordianItem.svelte';

	interface Item {
		icon?: Component;
		content: Component | string;
		title: string;
	}

	const { items, name }: { items: Item[]; name: string } = $props();
</script>

<div class="flex flex-col gap-2">
	{#each items as item, i (i)}
		<AccordianItem
			{name}
			title={item.title}
			icon={item.icon}
			defaultOpen={i === 0}
			id={`${name}-${i}`}
		>
			{#if typeof item.content === 'string'}
				<p class="text-neutral/80">
					{item.content}
				</p>
			{:else}
				<item.content />
			{/if}
		</AccordianItem>
	{/each}
</div>
