<script lang="ts">
	const { src, alt, credit }: { src: string; alt: string; credit?: string } = $props();
</script>

<div class="relative w-full mb-2">
	<img {src} {alt} />
	<div class="bg-primary text-neutral px-4 py-2">
		<b>{alt}</b>{#if credit}
			{` (credits to ${credit})`}
		{/if}
	</div>
</div>
