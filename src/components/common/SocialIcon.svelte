<script lang="ts">
	import type { Snippet } from 'svelte';

	const { icon, href, label }: { icon: Snippet; href: string; label: string } = $props();
</script>

<a
	class="text-base-100 hover:text-base-300/70 h-5 w-5"
	{href}
	rel="external"
	target="_blank"
	aria-label={label}
>
	{@render icon()}
</a>
