<script>
	import ContentPage from '$components/layout/ContentPage.svelte';
	import { aboutSection } from '$data/navigation.svelte';

	const { data } = $props();
</script>

<ContentPage section={aboutSection} pageData={data}>
	<div></div>
</ContentPage>
