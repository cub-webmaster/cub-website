<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import LinkIcon from '@iconify-svelte/lucide/external-link';

	interface LinkPropsBase {
		href: string;
		label: string;
		color?: string;
		external: boolean;
		useIcon?: boolean;
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
		external = true,
		useIcon = false
	}: InternalLink | ExternalLink = $props();

	const classes = $derived(`link-hover ${color}`);
</script>

{#snippet linkIcon()}
	{#if useIcon}<LinkIcon height="1rem" class="shrink-0 inline ml-2 mb-1" />{/if}
{/snippet}

{#if external}
	<a {href} class={classes} rel="external" target="_blank"><b>{label}</b>{@render linkIcon()}</a>
{:else}
	<a href={href as ResolvedPathname} class={classes}><b>{label}</b>{@render linkIcon()}</a>
{/if}
