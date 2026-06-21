<script lang="ts">
	import CircleChevronRight from '@iconify-svelte/lucide/circle-chevron-right';
	import RichText from './RichText.svelte';
	const {
		items,
		indent = true,
		iconColor = 'text-secondary',
		textColor = 'text-info',
		extraClasses
	}: {
		items: string[];
		indent?: boolean;
		textColor?: string;
		iconColor?: string;
		extraClasses?: string;
	} = $props();
</script>

<ul class:ml-4={indent} class={`${extraClasses ?? ''}`}>
	{#each items as item (item)}
		<li class="flex gap-2 py-1 text-left text-base">
			<div class="mt-1"><CircleChevronRight height="1rem" class={`shrink-0 ${iconColor}`} /></div>
			<span class={`${textColor}`}><RichText raw={item} /></span>
		</li>
	{/each}
</ul>
