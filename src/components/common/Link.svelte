<script lang="ts">
	import type { ResolvedPathname } from '$app/types';

	interface LinkPropsBase {
		href: string;
		label: string;
		color?: string;
		external: boolean;
	}

	interface InternalLink extends LinkPropsBase {
		external: false;
		href: ResolvedPathname;
	}

	interface ExternalLink extends LinkPropsBase {
		external: true;
	}

	const {
		href,
		label,
		color = 'text-accent/80',
		external = true
	}: InternalLink | ExternalLink = $props();
</script>

{#if external}
	<a {href} class={`link-hover ${color}`} rel="external" target="_blank"><b>{label}</b></a>
{:else}
	<a href={href as ResolvedPathname} class={`link-hover ${color}`}><b>{label}</b></a>
{/if}
