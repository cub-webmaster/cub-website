<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import type { RelatedLink } from '$data/home/faq';
	import CircleChevronRight from '@iconify-svelte/lucide/circle-chevron-right';
	const { related, answer }: { answer: string; related?: RelatedLink[] } = $props();
</script>

<p class="text-neutral/80">
	{answer}
</p>
{#if related}
	<div class="pt-8 flex flex-wrap gap-y-2 gap-x-8">
		{#each related as { link, label, external }, i (i)}
			<div class="flex gap-2 items-center">
				<div class="bg-primary font-semibold py-1 px-2 shrink-0">Related link</div>
				<CircleChevronRight height="1rem" class="text-secondary" />
				{#if external}
					<a href={link} class="link link-info link-hover font-semibold" rel="external">{label}</a>
				{:else}
					<a href={link as ResolvedPathname} class="link link-info link-hover font-semibold"
						>{label}</a
					>
				{/if}
			</div>
		{/each}
	</div>
{/if}
