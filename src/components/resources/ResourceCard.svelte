<script lang="ts">
	import Link from '$components/common/Link.svelte';
	import type { ResourceSection } from '$data/resources/types';
	import CircleChevronRight from '@iconify-svelte/lucide/circle-chevron-right';
	import Dot from '@iconify-svelte/lucide/dot';

	const { section, parentId }: { section: ResourceSection; parentId: string } = $props();
</script>

<div class="shadow h-full bg-base-200 border-primary border" id={`${parentId}-${section.id}`}>
	<div class="w-full py-2 px-4 bg-primary font-semibold text-lg">{section.title}</div>
	<div class="p-4 flex flex-col gap-4">
		{#each section.items as item, k (k)}
			<div>
				<div class="flex gap-2 items-center" class:mb-2={item.info?.length}>
					<CircleChevronRight height="1rem" class="shrink-0 text-accent/80" />

					<!-- A bit stupid but it's for keeping type checker happy -->
					{#if item.external}
						<Link href={item.url} external label={item.title} color="text-info" />
					{:else}
						<Link href={item.url} external={false} label={item.title} color="text-info" />
					{/if}
				</div>
				<ul class="flex flex-col gap-2">
					{#each item.info as point, i (i)}
						<li class="text-neutral/80 flex gap-2 items-start">
							<Dot height="1.8rem" class="shrink-0" />{point}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
