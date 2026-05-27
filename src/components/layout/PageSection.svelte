<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageHeading from './PageHeading.svelte';

	const { children, headingText, id }: { children: Snippet; headingText?: string; id?: string } =
		$props();
</script>

{#if headingText && id}<PageHeading text={headingText} {id} />{/if}
<div class="text-justify text-neutral/80 pb-4 flex flex-col gap-4">
	{@render children()}
</div>
