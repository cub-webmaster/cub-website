<script lang="ts">
	import { containerMaxWidth } from '$data/general';
	import type { Snippet } from 'svelte';
	const {
		children,
		verticalPadding = false,
		horizontalPadding = 'px-8 md:px-12'
	}: { children: Snippet; verticalPadding?: boolean; horizontalPadding?: string } = $props();
</script>

<div class={`${horizontalPadding} ${verticalPadding ? 'py-8' : ''} w-full flex justify-center`}>
	<div class={`${containerMaxWidth} w-full`}>
		{@render children()}
	</div>
</div>
