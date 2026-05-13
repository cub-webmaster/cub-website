<script lang="ts">
	import { resolve } from '$app/paths';
	import type { RoutesWithChildren, Subsection } from '$data/navigation.svelte';
	import { colorTransitionClasses, generateClassString } from '$lib/util';
	import { CircleChevronRight } from '@lucide/svelte';

	const {
		subsections,
		parentRoute
	}: { subsections: Subsection[]; parentRoute: RoutesWithChildren } = $props();
</script>

{#snippet navCard(sub: Subsection)}
	<a
		href={resolve(`${parentRoute}/${sub.slug}`)}
		class="hover:[_&_.card]:bg-accent/80 hover:[_&_.red]:bg-primary hover:[_&_.red-text]:text-primary hover:text-base-200"
	>
		<div
			class={`bg-base-300 card shadow-sm main h-full ${generateClassString(...colorTransitionClasses)}`}
		>
			<div class="card-body">
				<div class="flex justify-between">
					<div class="flex flex-col gap-3">
						<div class="card-title w-full">
							<sub.icon class="text-accent/80 red-text" />{sub.label}
						</div>
						<div class="h-1 bg-accent/80 w-12 red"></div>
					</div>
					<CircleChevronRight class="text-accent/80 mt-2 mr-1 red-text" />
				</div>

				<div class="text-sm mt-2">{sub.desc}</div>
			</div>
		</div>
	</a>
{/snippet}

<div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-12 px-4 py-8 gap-6 w-full">
	{#each subsections as sub (sub.slug)}
		{@render navCard(sub)}
	{/each}
</div>
