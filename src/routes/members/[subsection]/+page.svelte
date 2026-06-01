<script>
	import ContentPage from '$components/layout/ContentPage.svelte';
	import { membersSection } from '$data/navigation.js';
	import Awards from './Awards.svelte';
	import Classifications from './Classifications.svelte';
	import Equipment from './Equipment.svelte';
	import Socials from './Socials.svelte';
	import Training from './Training.svelte';

	const { data } = $props();
</script>

<ContentPage section={membersSection} pageData={data}>
	{#if data.subsection === 'training'}
		<Training schedule={data.schedule} />
	{:else if data.subsection === 'equipment'}
		<Equipment />
	{:else if data.subsection === 'socials'}
		<Socials />
	{:else if data.subsection === 'awards'}
		<Awards />
	{:else if data.subsection === 'classifications'}
		<Classifications />
	{/if}
</ContentPage>
