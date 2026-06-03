<script lang="ts">
	import Download from '@iconify-svelte/lucide/download';
	import ExternalLink from '@iconify-svelte/lucide/external-link';

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
		<Download height="1.3rem" />
	</a>
{:else}
	<a
		class="btn btn-circle btn-info btn-outline"
		{href}
		rel="external"
		target="_blank"
		aria-label={`Go to ${docName}`}><ExternalLink height="1.3rem" /></a
	>
{/if}
