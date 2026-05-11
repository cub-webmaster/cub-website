<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$components/Navbar.svelte';
	import { resolve } from '$app/paths';

	let { children } = $props();
	const navItems = [
		{
			route: resolve('/join'),
			label: 'Join',
			children: [
				{
					route: resolve('/join/beginners'),
					label: 'Beginners'
				},
				{
					route: resolve('/join/experienced'),
					label: 'Experienced Archers'
				}
			]
		},
		{
			route: resolve('/resources'),
			label: 'Resources'
		}
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar {navItems} />

{@render children()}

<style>
	:global(body) {
		margin: 0;
		font-family: 'Lato', sans-serif;
	}
</style>
