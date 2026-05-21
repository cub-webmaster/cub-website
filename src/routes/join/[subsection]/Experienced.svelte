<script lang="ts">
	import { resolve } from '$app/paths';
	import Alert from '$components/common/Alert.svelte';
	import Link from '$components/common/Link.svelte';
	import List from '$components/common/List.svelte';
	import PageSection from '$components/layout/PageSection.svelte';
	import { fees } from '$data/join/fees';
	import links from '$data/links';
</script>

<PageSection>
	<p>
		CUB is open to all students and staff of the University of Cambridge. If you're interested in
		joining us as an experienced archer, i.e. anyone who is already capable of shooting
		independently without the beginners' course, please get in touch with the <Link
			href={`mailto:${links.captain_email.url}`}
			label="Captain"
			external
		/>
		or the
		<Link href={`mailto:${links.committee_email.url}`} label="Committee" external /> and let us know about
		your archery experience.
	</p>
	<p>
		We will then invite you to come to one of our regular shooting sessions for an induction, where
		we will check that you can shoot safely and answer any questions you may have about the club. If
		we find no issues you can then complete your membership registration process and start shooting
		with us.
	</p>
</PageSection>

<PageSection headingId="fees" headingText="Club fees">
	<p>
		As CUB is a non-profit entity, all club fees go directly into the running of the club. For
		example, these funds are used to maintain our equipment, cover competition entry fees, insure
		the club, and pay for venue hire.
	</p>
	<p>As of the 2025/2026 academic year, our fees are as follows:</p>
	<List
		items={[
			{
				title: 'Students',
				subtitle: 'University of Cambridge only',
				end: `£${fees.student}`
			},
			{
				title: 'Non-students',
				subtitle: 'University staff/alumni',
				end: `£${fees['non-student']}`
			}
		]}
	/>

	<Alert>
		Note that if you are a non-student, you will also need to affiliate with AGB and CAA separately,
		each with its own associated fees. For more details please see the <Link
			href={resolve('/join/staff-alum')}
			label="Staff & Alumni page"
			external={false}
		/>.
	</Alert>
	<div class="pb-2"></div>
</PageSection>

<PageSection headingId="agb" headingText="AGB Affiliation">
	<p>
		If you have shot with another UK-based club before, it is likely that you are already registered
		with AGB. In this case, you will have to manually change your club in your AGB account. Detailed
		instructions on how to do this can be found in our comprehensive <Link
			external
			href={links.agb_guide.url}
			label="AGB membership guide"
		/>.
	</p>
</PageSection>
