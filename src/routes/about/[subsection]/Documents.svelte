<script lang="ts">
	import { documents, type Doc } from '$data/about/documents';
	import PageSection from '$components/layout/PageSection.svelte';
	import List from '$components/common/List.svelte';
	import GoToDocButton from '$components/about/GoToDocButton.svelte';
	import type { ComponentInternals } from 'svelte';

	function convertDocListToListItems(docs: Doc[]) {
		return docs
			.filter(({ link, file }) => link || file)
			.map(({ name, link, file, lastUpdated }) => {
				const end = (internal: ComponentInternals) =>
					GoToDocButton(internal, {
						download: !link,
						href: (link || file) as string,
						docName: name
					});
				return {
					title: name,
					subtitle: `Last updated: ${lastUpdated?.toLocaleDateString('en-UK') ?? 'Unknown'}`,
					end
				};
			});
	}
</script>

<PageSection headingId="core" headingText="Core Documents">
	<p>
		Here are some of the important documents regarding the functioning of the club as well as the
		safety and welfare of our members. These documents are reviewed on a regular basis in line with
		Archery GB and the Cambridge University Sports Centre's recommendations.
	</p>
	<List items={convertDocListToListItems(documents.core)} />
</PageSection>

<PageSection headingId="shooting" headingText="Shooting Related">
	<p>
		All members are expected to display good etiquette, act as good sportspeople, and conduct
		themselves in an appropriate manner as set out in the code of conduct. It is also expected that
		all members are familiar with the rules of the sport as set out by ArcheryGB, the national
		governing body, and World Archery. The full documents are attached here for the reference of our
		members at any point.
	</p>
	<List items={convertDocListToListItems(documents.shooting)} />
</PageSection>

<PageSection headingId="data" headingText="Data Protection">
	<p>
		Below are documents relating to the electronic aspects of the club. The club keeps records of
		it's members each year in accordance with our data protection policy. Social media presence or
		website appearance of members should also always adhere to our social media policy.
	</p>
	<List items={convertDocListToListItems(documents.data)} />
</PageSection>
