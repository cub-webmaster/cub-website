<script lang="ts">
	import type { Icon } from '$lib/util';
	import CircleChevronRight from '@iconify-svelte/lucide/circle-chevron-right';
	import type { Component } from 'svelte';

	const {
		items,
		bottomMargin = true
	}: {
		items: {
			title: string;
			subtitle?: string;
			end: Component | string;
			decoration?: Icon | string;
		}[];
		bottomMargin?: boolean;
	} = $props();
</script>

<ul class="list bg-base-200 border border-primary shadow-md" class:mb-6={bottomMargin}>
	{#each items as item, i (i)}
		<li class="list-row hover:bg-neutral/10">
			<div class="flex items-center text-secondary">
				{#if !item.decoration}
					<CircleChevronRight height="1.2rem" class="shrink-0" />
				{:else if typeof item.decoration === 'string'}
					<div class={`${item.decoration} h-4 w-4 border border-neutral/50`}></div>
				{:else}
					<item.decoration height="1.2rem" />
				{/if}
			</div>
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
