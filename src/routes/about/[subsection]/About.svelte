<script lang="ts">
	import { resolve } from '$app/paths';
	import Alert from '$components/common/Alert.svelte';
	import Carousel from '$components/common/Carousel.svelte';
	import Link from '$components/common/Link.svelte';
	import PageSection from '$components/layout/PageSection.svelte';
	import { rules1828Scans } from '$data/about/history';
	import links from '$data/links';
</script>

<PageSection>
	<p>
		Cambridge University Bowmen has been the university's archery club for well over 70 years. We
		are open to all members of the University of Cambridge (both students and staff), beginners and
		experienced archers alike! Most of the club shoots Olympic Recurve, and that is what are able to
		provide the most support for, but we welcome any bowstyle, from longbow to compound to
		traditional.
	</p>

	<p>
		If you're interested in joining, find out more <Link
			external={false}
			href={resolve('/join')}
			label="here"
		/>. If you're interested in finding out more about our track record in competitions or our wider
		history, keep reading!
	</p>
</PageSection>

<PageSection id="record" headingText="Track Record">
	<p>
		CUB regularly competes in local and national competitions, including the British Universities
		and Colleges Sport (BUCS), the annual Cambridge vs Oxford Varsity Match, and the TOUCAN league.
		Our club has been highly successful in some of these competitions.

		<!-- TODO recent highlights -->
	</p>
	<p>
		Archery at Cambridge is also a Half Blue sport. This is usually awarded to members for high
		performance in the annual Varsity match. Further, members at other competitions may earn Team
		Colors, with exceptional performances on a national standard potentially earning a Full Blue.
		<!-- TODO couple relatively recent high achievers -->
	</p>
</PageSection>

<PageSection id="history" headingText="History">
	<Alert>
		This section details the club's historical records that we're currently aware of. If you know of
		something we could add, please <Link
			href={`mailto:${links.committee_email.url}`}
			label="get in touch!"
			external
		/>
	</Alert>

	<p>
		Cambridge University Bowmen has existed since <Link
			label="at least the 1950s"
			href={links.history_1950s.url}
			external
		/>. There is evidence of a 'Cam Archery Club' existing <Link
			label="as far back as 1862"
			href={links.history_1862.url}
			external
		/>, though it's unclear if this Victorian-era club is a direct ancestor of the current club.
	</p>

	<p>
		Going back further still, the club has records of "The Rules of the Cambridge Bowmen", which
		claims to have been established in 1828. Some of these rules are quite amusing, and one can
		imagine the club must have made a fair amount of money fining their members for minor
		transgressions. The scans of the relevant pages are attached below.
	</p>

	<Carousel images={rules1828Scans} ratio={0.75} />
</PageSection>
