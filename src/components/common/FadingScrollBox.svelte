<script lang="ts">
	import { generateClassString } from '$lib/util';
	import type { Snippet } from 'svelte';

	let wrapperWidth = $state(0);
	let wrapperHeight = $state(0);
	let contentWidth = $state(0);
	let contentHeight = $state(0);
	let scrollX = $state(0);
	let scrollY = $state(0);

	let overflowWidth = $derived(contentWidth - wrapperWidth);
	let fadeXSize = $derived(((overflowWidth - scrollX) / overflowWidth) * 80);

	let overflowHeight = $derived(contentHeight - wrapperHeight);
	let fadeYSize = $derived(((overflowHeight - scrollY) / overflowHeight) * 80);

	const { children, extraClasses }: { children: Snippet; extraClasses?: string } = $props();
</script>

<div class="relative grid">
	<div
		class={generateClassString('w-full overflow-scroll', extraClasses ?? '')}
		bind:clientWidth={wrapperWidth}
		bind:clientHeight={wrapperHeight}
		onscroll={(e) => {
			scrollY = e.currentTarget?.scrollTop ?? 0;
			scrollX = e.currentTarget?.scrollLeft ?? 0;
		}}
	>
		<div
			class="absolute h-full right-0 bg-linear-to-r from-transparent to-base-200 z-2"
			style:width={`${fadeXSize}px`}
			hidden={overflowWidth < 10 || fadeXSize < 10}
		></div>

		<div
			class="absolute w-full bottom-0 bg-linear-to-b from-transparent to-base-200 z-2"
			style:height={`${fadeYSize}px`}
			hidden={overflowHeight < 10 || fadeYSize < 10}
		></div>

		<div
			bind:clientWidth={contentWidth}
			bind:clientHeight={contentHeight}
			class="w-fit"
			style:min-width={`${wrapperWidth}px`}
		>
			{@render children()}
		</div>
	</div>
</div>
