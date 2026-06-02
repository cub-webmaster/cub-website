<script lang="ts">
	import AccordianItem from '$components/common/AccordianItem.svelte';
	import type { BadgeInfo } from '$data/members/badges';
	import type { Snippet } from 'svelte';
	import ScoreTable from './ScoreTable.svelte';
	const {
		badgeInfo,
		internal = false,
		beforeTable,
		afterTable
	}: {
		badgeInfo: BadgeInfo<string, string>;
		internal?: boolean;
		beforeTable?: Snippet;
		afterTable?: Snippet;
	} = $props();
</script>

<AccordianItem
	name={internal ? 'badges-internal' : 'badges-external'}
	title={badgeInfo.name}
	icon={badgeInfo.icon}
	id={badgeInfo.id}
>
	{#if badgeInfo.image}
		<div class="mb-4">
			<div class="px-2 py-4">
				<img src={badgeInfo.image} alt={badgeInfo.name} class="w-full border-info border" />
			</div>
		</div>
	{/if}
	{#if beforeTable}
		<div
			class="flex flex-col gap-4"
			class:mb-6={badgeInfo.scoreTable?.gendered || badgeInfo.scoreTable?.useBowstyleSelect}
		>
			{@render beforeTable()}
		</div>
	{/if}
	<ScoreTable {badgeInfo} scrollBoxClasses="max-h-82 my-4" />
	{#if afterTable}
		<div class="mt-6 flex flex-col gap-4">
			{@render afterTable()}
		</div>
	{/if}
</AccordianItem>
