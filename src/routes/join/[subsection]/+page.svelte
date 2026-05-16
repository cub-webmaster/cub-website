<script lang="ts">
	import ContentPage from '$components/layout/ContentPage.svelte';
	import { joinSection } from '$data/navigation.svelte';
	import Beginners from './Beginners.svelte';

	const { data } = $props();
</script>

<ContentPage section={joinSection} pageData={data}>
	{#if data.subsection === 'beginners'}
		<Beginners />
	{/if}
</ContentPage>
