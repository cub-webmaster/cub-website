<script>
	import ContentPage from '$components/layout/ContentPage.svelte';
	import { membersSection } from '$data/navigation.svelte';

	const { data } = $props();
</script>

<ContentPage section={membersSection} pageData={data}>
	<div></div>
</ContentPage>
