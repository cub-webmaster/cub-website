<script lang="ts">
	import { documents, type Doc } from '$data/about/documents';
	import PageSection from '$components/layout/PageSection.svelte';
	import { CircleChevronRight, Download, ExternalLink } from '@lucide/svelte';
</script>

{#snippet docsList(docs: Doc[])}
	<ul class="list bg-base-200 border border-primary shadow-md mb-6">
		{#each docs as { name, file, lastUpdated, link }, i (i)}
			<li class="list-row hover:bg-neutral/10">
				<div class="flex items-center text-secondary"><CircleChevronRight /></div>
				<div>
					<div class="text-neutral text-base">{name}</div>
					<div class="text-xs uppercase font-semibold opacity-60">
						Last updated: {lastUpdated?.toLocaleDateString('en-UK') ?? 'Unknown'}
					</div>
				</div>
				{#if link}
					<a
						class="btn btn-circle btn-info btn-outline"
						href={link}
						rel="external"
						target="_blank"
						aria-label={`Go to ${name}`}><ExternalLink /></a
					>
				{/if}
				{#if file}
					<a
						// eslint-disable-next-line svelte/no-navigation-without-resolve
						href={file}
						class="btn btn-circle btn-info btn-outline"
						aria-label={`Download ${name}`}
						download
					>
						<Download />
					</a>
				{/if}
			</li>
		{/each}
	</ul>
{/snippet}

<PageSection headingId="core" headingText="Core Documents">
	<p>
		Here are some of the important documents regarding the functioning of the club as well as the
		safety and welfare of our members. These documents are reviewed on a regular basis in line with
		Archery GB and the Cambridge University Sports Centre's recommendations.
	</p>
	{@render docsList(documents.core)}
</PageSection>

<PageSection headingId="shooting" headingText="Shooting Related">
	<p>
		All members are expected to display good etiquette, act as good sportspeople, and conduct
		themselves in an appropriate manner as set out in the code of conduct. It is also expected that
		all members are familiar with the rules of the sport as set out by ArcheryGB, the national
		governing body, and World Archery. The full documents are attached here for the reference of our
		members at any point.
	</p>
	{@render docsList(documents.shooting)}
</PageSection>

<PageSection headingId="data" headingText="Data Protection">
	<p>
		Below are documents relating to the electronic aspects of the club. The club keeps records of
		it's members each year in accordance with our data protection policy. Social media presence or
		website appearance of members should also always adhere to our social media policy.
	</p>
	{@render docsList(documents.data)}
</PageSection>
