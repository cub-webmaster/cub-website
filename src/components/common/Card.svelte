<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import { colorTransitionClasses, generateClassString, type Icon } from '$lib/util';
	import CircleChevronRight from '@iconify-svelte/lucide/circle-chevron-right';
	import type { Snippet } from 'svelte';

	const {
		href,
		icon: CardIcon,
		children,
		title
	}: { href?: ResolvedPathname; icon: Icon; title: string; children: Snippet } = $props();

	const hoverClasses =
		'hover:[&_.card]:bg-accent/80 hover:[&_.red]:bg-primary hover:[&_.red-text]:text-primary hover:text-base-200';
</script>

{#snippet main()}
	<div
		class={`bg-base-300 card shadow-sm main h-full ${generateClassString(...colorTransitionClasses)}`}
	>
		<div class="card-body">
			<div class="flex justify-between gap-2">
				<div class="flex flex-col gap-3">
					<div class="card-title w-full">
						<CardIcon height="1.5rem" class="text-accent/80 red-text shrink-0" />{title}
					</div>
					<div class="h-1 bg-accent/80 w-12 red"></div>
				</div>
				{#if href}<CircleChevronRight
						height="1.3rem"
						class="text-accent/80 mt-2 mr-1 red-text shrink-0"
					/>{/if}
			</div>

			<div class="mt-2 text-base">{@render children()}</div>
		</div>
	</div>
{/snippet}

{#if href}
	<a {href} class={generateClassString(hoverClasses, 'h-full')}>
		{@render main()}
	</a>
{:else}
	<div class="h-full">
		{@render main()}
	</div>
{/if}
