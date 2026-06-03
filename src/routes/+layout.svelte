<script lang="ts">
	import '../app.css';

	import Footer from '$components/layout/Footer.svelte';
	import favicon from '$lib/assets/icons/logo.ico';
	import icon16 from '$lib/assets/icons/logo16x16.png';
	import icon32 from '$lib/assets/icons/logo32x32.png';
	import appleicon from '$lib/assets/icons/logo-apple-touch.png';

	let { children } = $props();
	let footerHeight = $state(0);
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href={favicon} />
	<link rel="icon" type="image/png" sizes="32x32" href={icon32} />
	<link rel="icon" type="image/png" sizes="16x16" href={icon16} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleicon} />
</svelte:head>

<!-- Note that we're only using style tag here bc tailwind does not recognise constructed strings -->
<div class="relative min-h-screen" style:padding-bottom={`${footerHeight}px`}>
	{@render children()}

	<Footer bind:height={footerHeight} />
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Lato', sans-serif;
		background-color: var(--color-base-100);
	}

	:global(html) {
		scroll-behavior: smooth;
		scroll-padding-top: 5rem;
	}
</style>
