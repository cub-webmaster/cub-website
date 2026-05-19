<script>
	import Alert from '$components/common/Alert.svelte';
	import Link from '$components/common/Link.svelte';
	import PageSection from '$components/layout/PageSection.svelte';
	import links from '$data/links';
</script>

<PageSection>
	<p>
		CUB enthusiastically welcomes all archers regardless of gender and/or sexuality! However, as
		with most other sports at the moment, there are still many issues within archery regarding the
		inclusion of trans and non-binary people. We've outlined here some of the main ones you might
		encounter while you're shooting with us, alongside the relevant support the club can provide in
		those scenarios.
	</p>
</PageSection>

<PageSection headingText="AGB Affiliation" headingId="registration">
	<p>
		Archery GB (AGB) is our national governing body, and all archers are required to be registered
		with them in order to shoot at any UK-based club. Currently, AGB requires us to specify 'male'
		or 'female' for each individual during registration.
	</p>
	<p>
		We recognise that these binary options do not suit everyone and are not inclusive of all
		genders. We encourage you to <b
			>choose whichever option you feel most comfortable with when registering</b
		>. This will be used on your AGB account and some competitions but should not affect your
		day-to-day experience in the club.
	</p>
	<p>
		As part of our commitment to be respectful of all our members, our internal club records include
		a non-binary option, and an additional space to specify your preferred pronouns during
		registration. <b
			>We will use these records to ensure that your chosen name, gender identity and pronouns are
			respected in all our communications and any time you participate in club activities.</b
		>
	</p>

	<Alert>
		We do not tolerate any form of bullying or discriminatory behaviour in our club. If you are
		experiencing any abuse due to your gender expression, please contact our <Link
			href={`mailto:${links.welfare_email.url}`}
			label="Welfare Officer"
			external
		/> immediately.
	</Alert>
</PageSection>

<PageSection headingText="Competitions" headingId="comps">
	<p>
		At competitions, archery is historically divided into male and female categories, and this
		remains true of most university competitions. If you wish to compete for the club, you will
		compete in the gender category under which you're registered with AGB.
	</p>
	<p>
		Based on the recent Supreme Court decision and guidance from the UK Sports Councils' Equality
		Group, AGB have determined that male puberty confers a competitive advantage in archery and so,
		to ensure fair competition, <b
			>only those assigned female at birth will be allowed to compete in the female category
			starting from 1st October 2025</b
		>. Full details and further information about these changes can be found on the <Link
			href="https://archerygb.org/about/equality-diversity-and-inclusivity"
			external
			label="AGB website"
		/>.
	</p>
	<p>
		We understand and regret that this may hinder our gender non-conforming members from competing.
		Regardless, CUB strives to remain welcoming to everyone - if you have any concerns regarding the
		matter, or require any form of welfare support, please do not hesitate to contact our <Link
			href={`mailto:${links.welfare_email.url}`}
			label="Welfare Officer"
			external
		/>.
	</p>
	<p>
		As an alternative, there are often competitions run by local clubs that have an open category,
		which you might feel more comfortable competing in. While this might be a different experience
		from student competitions, you are always welcomed to talk to the committee to find out about
		competition opportunities that may be more suitable for you.
	</p>
</PageSection>
