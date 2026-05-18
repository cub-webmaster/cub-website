<script>
	import ContentPage from '$components/layout/ContentPage.svelte';
	import { aboutSection } from '$data/navigation.svelte';
	import Committee from './Committee.svelte';
	import Documents from './Documents.svelte';

	const { data } = $props();
</script>

<ContentPage section={aboutSection} pageData={data}>
	{#if data.subsection === 'committee'}
		<Committee />
	{:else if data.subsection === 'docs'}
		<Documents />
	{/if}
</ContentPage>
