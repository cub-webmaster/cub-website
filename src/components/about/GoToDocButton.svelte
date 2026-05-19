<script lang="ts">
	import { Download, ExternalLink } from '@lucide/svelte';

	const { href, download, docName }: { href: string; download: boolean; docName: string } =
		$props();
</script>

{#if download}
	<a
		// eslint-disable-next-line svelte/no-navigation-without-resolve
		{href}
		class="btn btn-circle btn-info btn-outline"
		aria-label={`Download ${docName}`}
		download
	>
		<Download />
	</a>
{:else}
	<a
		class="btn btn-circle btn-info btn-outline"
		{href}
		rel="external"
		target="_blank"
		aria-label={`Go to ${docName}`}><ExternalLink /></a
	>
{/if}
