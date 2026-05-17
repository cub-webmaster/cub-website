<script>
	import ContentPage from '$components/layout/ContentPage.svelte';
	import { aboutSection } from '$data/navigation.svelte';
	import Committee from './Committee.svelte';

	const { data } = $props();
</script>

<ContentPage section={aboutSection} pageData={data}>
	{#if data.subsection === 'committee'}
		<Committee />
	{/if}
</ContentPage>
