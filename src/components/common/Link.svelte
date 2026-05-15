<script lang="ts">
	const { href, label }: { href: string; label: string; external?: boolean } = $props();
</script>

<a {href} class="link-hover text-accent/80" rel="external" target="_blank"><b>{label}</b></a>
