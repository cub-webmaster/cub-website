<script>
	import Header from '$components/layout/Header.svelte';
	import NavPage from '$components/layout/NavPage.svelte';
	import { joinSection } from '$data/navigation.svelte';
</script>

<Header title="Join" />

<NavPage subsections={joinSection} parentRoute="/join" />
