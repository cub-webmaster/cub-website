<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageHeading from './PageHeading.svelte';

	const {
		children,
		headingText,
		headingId
	}: { children: Snippet; headingText?: string; headingId?: string } = $props();
</script>

{#if headingText && headingId}<PageHeading text={headingText} id={headingId} />{/if}
<div class="text-justify text-neutral/80 pb-4 flex flex-col gap-4">
	{@render children()}
</div>
