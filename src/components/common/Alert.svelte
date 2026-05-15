<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { Info } from '@lucide/svelte';
	import type { ResolvedPathname } from '$app/types';

	let smallAlertOpen = $state(false);
	const {
		title,
		mainText,
		callToActionLink,
		callToActionText
	}: {
		mainText: Snippet;
		callToActionLink: ResolvedPathname;
		callToActionText: string;
		title: string;
	} = $props();

	onMount(() => (smallAlertOpen = true));
</script>

{#snippet button()}
	<a class="btn btn-primary flex sm:btn-sm btn-sm" href={callToActionLink}>{callToActionText}</a>
{/snippet}

<div role="alert" class="alert alert-horizontal hidden sm:grid">
	<Info class="text-info" />
	<div>
		<h3 class="font-bold lg:text-lg text-base">{title}</h3>
		<div class="text-sm text-justify lg:text-base">
			{@render mainText()}
		</div>
	</div>

	<div class="flex gap-2">{@render button()}</div>
</div>
<div role="alert" class="collapse bg-base-200 sm:hidden collapse-arrow shadow">
	<input type="checkbox" bind:checked={smallAlertOpen} />
	<div class="flex items-center gap-2 collapse-title">
		<Info class="text-info" />
		<h3 class="font-bold">{title}</h3>
	</div>

	<div class="text-sm text-justify col-span-2 flex flex-col gap-4 items-end collapse-content">
		<div class="w-full">{@render mainText()}</div>
		<div>{@render button()}</div>
	</div>
</div>

<style>
	.shadow {
		box-shadow:
			0 3px 0 -2px oklch(100% 0 0 / calc(var(--depth) * 0.08)) inset,
			0 1px
				color-mix(
					in oklab,
					color-mix(in oklab, #000 20%, var(--alert-color, var(--color-base-200)))
						calc(var(--depth) * 20%),
					#0000
				),
			0 4px 3px -2px oklch(0% 0 0 / calc(var(--depth) * 0.08));
	}
</style>
