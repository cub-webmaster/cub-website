<script>
	import Header from '$components/layout/Header.svelte';

	const { data } = $props();
</script>

<Header title={data.label} />
