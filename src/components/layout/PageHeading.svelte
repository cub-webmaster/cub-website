<script lang="ts">
	import type { Component } from 'svelte';

	let { text, icon: HeadingIcon, id }: { text: string; icon?: Component; id: string } = $props();
</script>

<h2
	class="xl:text-3xl flex gap-4 items-center md:text-3xl sm:text-2xl text-xl font-semibold heading"
	{id}
>
	{#if HeadingIcon}
		<HeadingIcon size="1.5rem" class="shrink-0" />
	{/if}
	{text}
</h2>
<div class="h-1 bg-accent/80 w-20 mt-2 mb-4"></div>
