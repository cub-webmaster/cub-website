<script>
	import ContentPage from '$components/layout/ContentPage.svelte';
	import { membersSection } from '$data/navigation.js';
	import Training from './Training.svelte';

	const { data } = $props();
</script>

<ContentPage section={membersSection} pageData={data}>
	{#if data.subsection === 'training'}
		<Training schedule={data.schedule} />
	{/if}
</ContentPage>
