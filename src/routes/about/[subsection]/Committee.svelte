<script lang="ts">
	import PageSection from '$components/layout/PageSection.svelte';
	import { committeeMembers, committeeTypeLabels } from '$data/about/committee';
	import CommitteeCard from '$components/about/CommitteeCard.svelte';
</script>

{#each Object.entries(committeeTypeLabels) as [type, label], i (i)}
	<PageSection headingText={label} id={type}>
		<div class="grid lg:grid-cols-3 gap-4 mb-4 sm:grid-cols-2">
			{#each committeeMembers.filter(({ position }) => position.type === type) as { position, college, image, name }, i (i)}
				<CommitteeCard position={position.title} {college} {image} {name} email={position.email} />
			{/each}
		</div>
	</PageSection>
{/each}
