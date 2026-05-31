<script lang="ts">
	import AccordianItem from '$components/common/AccordianItem.svelte';
	import FadingScrollBox from '$components/common/FadingScrollBox.svelte';
	import type { BadgeInfo, BowStyle, Gender } from '$data/members/badges';
	import { colorTransitionClasses, generateClassString } from '$lib/util';
	import type { Snippet } from 'svelte';
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

	let genders: Gender[] = $derived(
		badgeInfo.scoreTable?.gendered
			? ((badgeInfo.scoreTable?.useBowstyleSelect
					? Object.keys(badgeInfo.scoreTable?.content['Recurve'] ?? {})
					: Object.keys(badgeInfo.scoreTable?.content)) as Gender[])
			: []
	);
	let bowstyles: BowStyle[] = $derived(
		badgeInfo.scoreTable?.useBowstyleSelect
			? (Object.keys(badgeInfo.scoreTable?.content) as BowStyle[])
			: []
	);

	let selectedGender: Gender = $derived(genders[0] ?? null);
	let selectedBowstyle: BowStyle = $derived(bowstyles[0] ?? null);

	type Scores = Partial<Record<string, Record<string, number>>>;
</script>

{#snippet scoreTable(
	data: Partial<Record<string, Record<string, number>>>,
	rowLabelsTitle: string,
	columnsOrder: readonly string[],
	rowsOrder: readonly string[]
)}
	<table class="table table-pin-rows" class:table-pin-cols={columnsOrder.length > 1}>
		<thead class="text-neutral">
			<tr>
				<th class="bg-primary">{rowLabelsTitle}</th>
				{#each columnsOrder as columnLabel, i (i)}
					<td class="bg-primary">{columnLabel}</td>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rowsOrder as rowLabel (rowLabel)}
				{#if data[rowLabel]}
					<tr
						class={generateClassString(
							...colorTransitionClasses,
							'hover:bg-neutral/10',
							columnsOrder.length > 1 ? 'hover:[&_th]:bg-base-300' : ''
						)}
					>
						<th
							class={generateClassString(
								...colorTransitionClasses,
								'font-semibold',
								columnsOrder.length > 1 ? 'bg-base-200' : '',
								'min-w-30'
							)}>{rowLabel}</th
						>
						{#each columnsOrder as columnLabel (rowLabel + columnLabel)}
							<td>{data[rowLabel][columnLabel] < 0 ? '-' : data[rowLabel][columnLabel]}</td>
						{/each}
					</tr>
				{/if}
			{/each}
		</tbody>
	</table>
{/snippet}

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

	{#if badgeInfo.scoreTable}
		<div class={`flex ${badgeInfo.scoreTable.gendered ? 'justify-between' : 'justify-end'}`}>
			{#if badgeInfo.scoreTable.gendered && genders.length}
				<div role="tablist" class="tabs tabs-border w-full">
					{#each genders as gender (gender)}
						<input
							type="radio"
							name={`${badgeInfo.name}_gender_tabs`}
							class="tab text-info"
							aria-label={gender.toUpperCase()}
							checked={gender === selectedGender}
							onchange={(e) => e.currentTarget.checked && (selectedGender = gender)}
							class:opacity-60={selectedGender !== gender}
						/>
					{/each}
				</div>
			{/if}
			{#if badgeInfo.scoreTable.useBowstyleSelect && bowstyles.length}
				<select
					class={generateClassString(
						'select select-secondary focus:outline-0 focus:select-info hover:bg-neutral/5 w-40',
						...colorTransitionClasses
					)}
					bind:value={selectedBowstyle}
					aria-label="Select Bowstyle"
				>
					{#each bowstyles as style (style)}
						<option value={style}>
							{style}
						</option>
					{/each}
				</select>
			{/if}
		</div>
		<FadingScrollBox extraClasses="max-h-82 my-4">
			{#if badgeInfo.scoreTable.useBowstyleSelect}
				{#if selectedBowstyle && selectedBowstyle in badgeInfo.scoreTable.content}
					{@render scoreTable(
						badgeInfo.scoreTable.gendered
							? selectedGender &&
								selectedGender in
									(badgeInfo.scoreTable.content[selectedBowstyle] as Partial<
										Record<Gender, Scores>
									>)
								? ((
										badgeInfo.scoreTable.content[selectedBowstyle] as Partial<
											Record<Gender, Scores>
										>
									)[selectedGender] as Scores)
								: {}
							: (badgeInfo.scoreTable.content[selectedBowstyle] as Scores),
						badgeInfo.scoreTable.rowLabelsTitle,
						badgeInfo.scoreTable.columnsOrder,
						badgeInfo.scoreTable.rowsOrder
					)}
				{/if}
			{:else if badgeInfo.scoreTable.gendered}
				{#if selectedGender && badgeInfo.scoreTable.content[selectedGender]}
					{@render scoreTable(
						badgeInfo.scoreTable.content[selectedGender] as Scores,
						badgeInfo.scoreTable.rowLabelsTitle,
						badgeInfo.scoreTable.columnsOrder,
						badgeInfo.scoreTable.rowsOrder
					)}
				{/if}
			{:else}
				{@render scoreTable(
					badgeInfo.scoreTable.content,
					badgeInfo.scoreTable.rowLabelsTitle,
					badgeInfo.scoreTable.columnsOrder,
					badgeInfo.scoreTable.rowsOrder
				)}
			{/if}
		</FadingScrollBox>
	{/if}
	{#if afterTable}
		<div class="mt-6 flex flex-col gap-4">
			{@render afterTable()}
		</div>
	{/if}
</AccordianItem>
