<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Section } from '$data/navigation.svelte';
	import Header from './Header.svelte';
	import Card from '$components/common/Card.svelte';

	const { section }: { section: Section } = $props();
</script>

<Header title={section.label} />

<div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-12 px-4 py-8 gap-6 w-full">
	{#each section.children as sub (sub.slug)}
		<Card title={sub.label} href={resolve(`${section.route}/${sub.slug}`)} icon={sub.icon}>
			{sub.desc}
		</Card>
	{/each}
</div>
