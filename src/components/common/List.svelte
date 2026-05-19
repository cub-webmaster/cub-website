<script lang="ts">
	import { CircleChevronRight } from '@lucide/svelte';
	import type { Component } from 'svelte';

	const { items }: { items: { title: string; subtitle?: string; end: Component | string }[] } =
		$props();
</script>

<ul class="list bg-base-200 border border-primary shadow-md mb-6">
	{#each items as item, i (i)}
		<li class="list-row hover:bg-neutral/10">
			<div class="flex items-center text-secondary"><CircleChevronRight /></div>
			<div>
				<div class="text-neutral text-base">{item.title}</div>
				{#if item.subtitle}
					<div class="text-xs uppercase font-semibold opacity-60 text-left">
						{item.subtitle}
					</div>
				{/if}
			</div>
			{#if typeof item.end === 'string'}
				<div class="flex items-center text-base font-semibold">{item.end}</div>
			{:else}
				<item.end />
			{/if}
		</li>
	{/each}
</ul>
