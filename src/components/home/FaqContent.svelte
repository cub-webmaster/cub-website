<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import { CircleChevronRight } from '@lucide/svelte';

	const {
		related,
		answer
	}: { answer: string; related?: { link: ResolvedPathname; label: string }[] } = $props();
</script>

<p class="text-neutral/80">
	{answer}
</p>
{#if related}
	<div class="pt-8 flex flex-wrap gap-y-2 gap-x-8">
		{#each related as { link, label }, i (i)}
			<div class="flex gap-2 items-center">
				<div class="bg-primary font-semibold py-1 px-2 shrink-0">Related link</div>
				<CircleChevronRight size="1rem" class="text-secondary" />
				<a href={link} class="link link-info link-hover font-semibold">{label}</a>
			</div>
		{/each}
	</div>
{/if}
