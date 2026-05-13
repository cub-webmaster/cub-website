<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let footerHeight = $state(0);

	$effect(() => {
		console.log(footerHeight);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Note that we're only using style tag here bc tailwind does not recognise constructed strings -->
<div class="relative min-h-screen" style={`padding-bottom: ${footerHeight}px`}>
	{@render children()}

	<Footer bind:height={footerHeight} />
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Lato', sans-serif;
		background-color: var(--color-base-100);
	}
</style>
