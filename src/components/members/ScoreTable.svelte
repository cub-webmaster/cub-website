<script lang="ts">
	import FadingScrollBox from '$components/common/FadingScrollBox.svelte';
	import type { BowStyle, Gender, BadgeInfo } from '$data/members/badges';
	import { colorTransitionClasses, generateClassString } from '$lib/util';

	const {
		badgeInfo,
		scrollBoxClasses = ''
	}: {
		badgeInfo: BadgeInfo<string, string>;
		scrollBoxClasses?: string;
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

	const getMainData = (
		currentGender: Gender,
		currentBowstyle: BowStyle
	): Partial<Record<string, Record<string, number>>> => {
		if (!badgeInfo.scoreTable) return {};

		const checkGendered = (data: Partial<Record<Gender, Scores>> | Scores) => {
			if (badgeInfo.scoreTable?.gendered) {
				if (!currentGender) return {};

				return (data as Partial<Record<Gender, Scores>>)[currentGender] ?? {};
			}

			return data as Scores;
		};

		if (badgeInfo.scoreTable.useBowstyleSelect) {
			if (currentBowstyle && badgeInfo.scoreTable.content[currentBowstyle]) {
				return checkGendered(badgeInfo.scoreTable.content[currentBowstyle]);
			} else return {};
		} else {
			return checkGendered(badgeInfo.scoreTable.content);
		}
	};

	let data = $derived(getMainData(selectedGender, selectedBowstyle));
</script>

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
	<FadingScrollBox extraClasses={scrollBoxClasses}>
		<table
			class="table table-pin-rows"
			class:table-pin-cols={badgeInfo.scoreTable.columnsOrder.length > 1}
		>
			<thead class="text-neutral">
				<tr>
					<th class="bg-primary">{badgeInfo.scoreTable.rowLabelsTitle}</th>
					{#each badgeInfo.scoreTable.columnsOrder as columnLabel, i (i)}
						<td class="bg-primary">{columnLabel}</td>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each badgeInfo.scoreTable.rowsOrder as rowLabel (rowLabel)}
					{#if data[rowLabel]}
						<tr
							class={generateClassString(
								...colorTransitionClasses,
								'hover:bg-neutral/10',
								badgeInfo.scoreTable.columnsOrder.length > 1 ? 'hover:[&_th]:bg-base-300' : ''
							)}
						>
							<th
								class={generateClassString(
									...colorTransitionClasses,
									'font-semibold',
									badgeInfo.scoreTable.columnsOrder.length > 1 ? 'bg-base-200' : '',
									'min-w-30'
								)}>{rowLabel}</th
							>
							{#each badgeInfo.scoreTable.columnsOrder as columnLabel (rowLabel + columnLabel)}
								<td>{data[rowLabel][columnLabel] < 0 ? '-' : data[rowLabel][columnLabel]}</td>
							{/each}
						</tr>
					{/if}
				{/each}
			</tbody>
		</table>
	</FadingScrollBox>
{/if}
