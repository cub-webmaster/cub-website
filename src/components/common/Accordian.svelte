<script lang="ts">
	import type { Component } from 'svelte';

	interface AccordianItem {
		icon?: Component;
		content: Component | string;
		title: string;
	}

	const { items, radioName }: { items: AccordianItem[]; radioName: string } = $props();
</script>

<div class="flex flex-col gap-2">
	{#each items as item, i (i)}
		<div class="collapse collapse-plus bg-base-200 border border-primary">
			<input type="radio" name={radioName} checked={i == 0} />
			<div class="collapse-title font-semibold flex gap-2 items-center">
				<item.icon class="shrink-0 text-secondary" />
				<span class="text-neutral">{item.title}</span>
			</div>
			<div class="collapse-content">
				{#if typeof item.content === 'string'}
					<p class="text-neutral/80">
						{item.content}
					</p>
				{:else}
					<item.content />
				{/if}
			</div>
		</div>
	{/each}
</div>
