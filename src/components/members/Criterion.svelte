<script lang="ts">
	const { items, num }: { items: string[]; num?: number } = $props();
</script>

<div class="flex w-full flex-col border border-primary bg-base-200 pl-8 pr-4 py-4 indicator">
	{#if num}
		<div
			class="indicator-item indicator-start indicator-middle bg-primary text-neutral font-semibold rounded h-8 w-8 flex justify-center items-center"
		>
			{num}
		</div>
	{/if}

	{#each items as item, i (i)}
		{#if i > 0}
			<div class="divider">OR</div>
		{/if}
		<div>{item}</div>
	{/each}
</div>
