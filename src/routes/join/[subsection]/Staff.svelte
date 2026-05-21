<script>
	import Link from '$components/common/Link.svelte';
	import List from '$components/common/List.svelte';
	import PageSection from '$components/layout/PageSection.svelte';
	import links from '$data/links';
</script>

<PageSection>
	While non-students are welcomed at our club, there are additional steps required for membership
	registration, and we'll be covering them here. Note that you should still read the beginners or
	experienced archers page (whichever applies) for other relevant instructions to joining our club.
</PageSection>

<PageSection headingText="External Affiliations" headingId="affiliations">
	<p>
		Members of CUB are required to also be registered with Archery GB (AGB), the Southern Counties
		Archery Society (SCAS) and the Cambridgeshire Archery Association (CAA). As we are only allowed
		to carry out this registration on behalf of students, non-student members will have to manage
		these affiliations on their own. Note that this process needs to be repeated every year for
		membership renewal.
	</p>

	<p>
		<b>For AGB affiliation,</b> you can manage everything online via the <Link
			href={links.agb_sport80.url}
			external
			label="AGB Sport 80 platform"
		/>. In order to make this process easier for you, we have collated all relevant instructions,
		alongside pictures of the screens you should expect, on our <Link
			external
			href={links.agb_guide.url}
			label="AGB membership guide"
		/>.
	</p>
	<p>
		<b>As for SCAS and CAA,</b> you will have to email them and fill in the relevant forms to
		confirm your membership. Please contact <Link
			href={`mailto:${links.caa_contact.url}`}
			label={links.caa_contact.label}
			external
		/> for assistance on this and send back your forms as soon as you can.
	</p>
	<p>
		Note that your membership with both of these require a fee. For reference, the specific numbers
		as of September 2025 are as follows:
	</p>
	<List
		items={[
			{
				title: 'AGB membership',
				subtitle: 'National governing body of archery in the uk',
				end: '£65'
			},
			{
				title: 'SCAS & CAA membership',
				subtitle: 'Regional bodies for Cambridgeshire',
				end: '£7'
			}
		]}
	/>
</PageSection>

<PageSection headingText="Competitions" headingId="comps">
	<p>
		We encourage all of our members to participate in competitions, as it is a very rewarding part
		of the sport. However, a significant part of the competitions we routinely send our archers to,
		like BUCS or TOUCAN are open to students only, so non-student members may regrettably feel less
		supported in their competitive pursuits.
	</p>
	<p>
		Nevertheless, there are competitions happening throughout the year that are open to everyone,
		usually hosted by local clubs that often attract a lot more mature archers, making it quite
		different from our majority student demographic! So be assured that there are plenty of
		opportunities for you even if we talk about it less in the club.
	</p>
	<p>
		If you are interested in competing, but not sure how to start or what competitions there are
		near us, feel free to reach out to our <Link
			href={`mailto:${links.tournaments_email.url}`}
			label="Tournaments Officer"
			external
		/> for help. We would love to help you get started with competing even if you aren't a student.
	</p>
</PageSection>
