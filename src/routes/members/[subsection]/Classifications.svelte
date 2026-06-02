<script lang="ts">
	import Link from '$components/common/Link.svelte';
	import PageSection from '$components/layout/PageSection.svelte';
	import ScoreTable from '$components/members/ScoreTable.svelte';
	import links from '$data/links';
	import { badgesIndoorClassifications } from '$data/members/badges';
	import indoorBadges from '$lib/assets/img/badges/indoor_classifications.jpg';
</script>

<PageSection>
	<p>
		Handicaps and classifications are a good way to track your progress through the sport as you
		move from one round type to another. They also provide a reference for comparing archers who
		have not necessarily shot together before, and some competitions may refer to them for
		qualifications.
	</p>
	<p>
		At CUB we use Archery GB classifications, which is divided into 3 tiers: Archer, Bowman and
		Master Bowman. Each of these are further divided into categories from Archer 3rd class up to
		Grand Master Bowman. On top of that, the requirements for indoor and outdoor classifications are
		slightly different. Below we give a brief breakdown on the topic, but we would encourage you to
		take a look at the official guidance by AGB as well, which are linked in each relevant section
		below.
	</p>
</PageSection>

<PageSection id="indoor" headingText="Indoor Classifications">
	<p>
		There are 8 levels of indoor classifications under the AGB scheme. These are: Archer 3rd, 2nd
		and 1st class, Bowman 3rd, 2nd and 1st class, Master Bowman and Grand Master Bowman. They are
		also represented by alphabetic badges from H to A respectively.
	</p>
	<div class="mb-2">
		<div class="py-2">
			<img
				src={indoorBadges}
				alt="Indoor Classification Badges labelled H to A"
				class="w-full shadow"
			/>
		</div>
	</div>
	<p>
		<b>All indoor classifications can be awarded by the club</b>, as long as an archer has shot
		enough arrows within one season on witnessed rounds that achieve the qualifying score. For the
		archer tier, this is 10 dozen arrows whereas for all other classifications you will need 15
		dozen. So for example, a beginner aiming for an A2 (Archer 2nd class) classification would want
		to shoot at least 2 Portsmouth rounds on either club target days or competitions throughout the
		indoor season, whereas someone aiming for a B3 classification would need at least one more.
	</p>
	<p>
		The relevant qualifying scores necessary for a Portsmouth round is listed below. For more
		information or scores for different rounds, please refer to the <Link
			label="AGB page on indoor
		classifications"
			href={links.agb_indoor_classifications.url}
			external
		/>, or use a tool like <Link
			label="Archery Calculator"
			external
			href={links.archery_calculator.url}
		/> to help you with your calculations.
	</p>

	<ScoreTable badgeInfo={badgesIndoorClassifications} />
	<p>
		Note rounds shot for classification purposes do not need to be of UK Record status unless you
		are aiming for the Master Bowman tier.
	</p>
	<p>
		Badges for indoor classifications can be claimed from the club for £3. If you'd like to claim
		one, please contact the <Link
			href={`mailto:${links.tournaments_email.url}`}
			external
			label="Records Officer"
		/> and provide evidence of the relevant scores (must be dated and co-signed).
	</p>
</PageSection>
<PageSection id="outdoor" headingText="Outdoor Classifications">
	<p>
		The AGB outdoor classifications have the same 8 levels as the indoor classifications, in
		addition to an extra Elite Master Bowman level beyond Grand Master Bowman.
	</p>
	<p>
		The scoring for outdoor classifications is more complex as it takes into account <b
			>more factors like appropriate shooting distances that varies for each level</b
		>. We encourage anyone interested in an outdoor classification to refer to <Link
			label="the official AGB page"
			external
			href={links.agb_outdoor_classifications.url}
		/> for detailed scores and information.
	</p>
	<p>
		The club is able to award outdoor classifications of the Archer and Bowman tiers. However,
		outdoor classifications of Master Bowman tier can only be awarded by AGB. Please contact the <Link
			href={`mailto:${links.tournaments_email.url}`}
			external
			label="Records Officer"
		/> with relevant evidence to claim a outdoor classification badge for £3.
	</p>

	<p>
		Note that like the indoor classifications, rounds shot for classification purposes do not need
		to have UK record status except when applying for the Master Bowman tier.
	</p>
</PageSection>
<PageSection id="handicap" headingText="Handicaps">
	<p>
		At its most simple, a handicap can be <b>viewed as a measure of precision</b> (i.e. group size or
		consistency). The smaller the handicap, the smaller the group and the better the score. This number
		is useful to help compare performance between rounds.
	</p>
	<p>
		The AGB classification scheme, at its core, is created based on this concept. Each bowstyle and
		classification level is assigned a specific handicap, and qualifying scores for each round are
		calculated from this.
	</p>
	<p>
		Whilst the classifications and other badge schemes provide a number of milestones on your
		archery journey, it can take some time to progress between each one. Handicaps are closer
		together so you can continue seeing progress, even if you don’t get any new badges.
	</p>
	<p>
		The full scheme of calculating handicap based on AGB standards can be quite complex, but you can
		use tools like <Link label="Archery Calculator" external href={links.archery_calculator.url} /> if
		you'd like to be able to calculate and track your handicap yourself.
	</p>
</PageSection>
