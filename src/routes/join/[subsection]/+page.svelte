<script lang="ts">
	import ContentPage from '$components/layout/ContentPage.svelte';
	import { joinSection } from '$data/navigation.js';
	import Beginners from './Beginners.svelte';
	import Experienced from './Experienced.svelte';
	import Staff from './Staff.svelte';
	import Trans from './Trans.svelte';

	const { data } = $props();
</script>

<ContentPage section={joinSection} pageData={data}>
	{#if data.subsection === 'beginners'}
		<Beginners />
	{:else if data.subsection === 'experienced'}
		<Experienced />
	{:else if data.subsection === 'staff-alum'}
		<Staff />
	{:else if data.subsection === 'trans'}
		<Trans />
	{/if}
</ContentPage>
