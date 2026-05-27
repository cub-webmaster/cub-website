<script lang="ts">
	import PageSection from '$components/layout/PageSection.svelte';
	import { committee, committeeTypeLabels, type CommitteeType } from '$data/about/committee';
	import CommitteeCard from '$components/about/CommitteeCard.svelte';
</script>

{#each Object.entries(committeeTypeLabels) as [type, label], i (i)}
	<PageSection headingText={label} id={type}>
		<div class="grid lg:grid-cols-3 gap-4 mb-4 sm:grid-cols-2">
			{#each committee[type as CommitteeType] as { position, college, image, name, email }, i (i)}
				<CommitteeCard {position} {college} {image} {name} {email} />
			{/each}
		</div>
	</PageSection>
{/each}
