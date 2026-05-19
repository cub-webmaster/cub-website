<script lang="ts">
	import { CircleAlert } from '@lucide/svelte';
	const { children } = $props();
</script>

<div role="alert" class="alert border-accent bg-base-200">
	<CircleAlert class="text-accent shrink-0" size="1.5rem" />
	<span>{@render children()}</span>
</div>
