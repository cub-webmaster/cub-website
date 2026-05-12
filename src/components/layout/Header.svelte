<script lang="ts">
	import type { Snippet } from 'svelte';
	import Navbar from './Navbar.svelte';

	let headerHeight = $state(0);

	let {
		title,
		metaDescription,
		override,
		showBrand = true
	}: {
		title: string;
		metaDescription?: string;
		override?: Snippet;
		showBrand?: boolean;
	} = $props();
</script>

<svelte:head>
	<title>{`${title} | CUB`}</title>
	<meta name="description" content={metaDescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>

<Navbar {headerHeight} {showBrand} />
<div bind:clientHeight={headerHeight} class="-mt-16">
	{#if override}
		{@render override()}
	{:else}
		<div class="h-50 bg-info flex justify-center items-end">
			<h1 class="text-4xl font-bold text-base-100 mb-16 font-[DM_Serif_Display]">{title}</h1>
		</div>
	{/if}
</div>
