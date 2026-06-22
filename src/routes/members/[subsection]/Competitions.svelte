<script lang="ts">
	import Alert from '$components/common/Alert.svelte';
	import Card from '$components/common/Card.svelte';
	import Link from '$components/common/Link.svelte';
	import List from '$components/common/List.svelte';
	import PageSection from '$components/layout/PageSection.svelte';
	import CircleStar from '@iconify-svelte/lucide/circle-star';
	import Dumbbell from '@iconify-svelte/lucide/dumbbell';
	import {
		recurringComps,
		squadCommitments,
		squadPerks,
		teamSelectionCriteria
	} from '$data/members/competitions';
	import links from '$data/links';
	import AccordianItem from '$components/common/AccordianItem.svelte';
	import happyCompetitionImg from '$lib/assets/img/bucs2025_happy_xc.jpg';
</script>

<PageSection>
	<p>
		Competitions can be daunting, but the club is here to make the process as accessible as
		possible! All competitions are generally open to anyone (not just squad members!), and on this
		page we've detailed some of the key information you would need to get started with competing.
	</p>
</PageSection>

<PageSection headingText="Getting Started" id="starting">
	<p>
		The main barrier to entry to competing is usually equipment. As most competitions are outside
		Cambridge, you will need a set of equipment you can bring with you in order to participate. The
		club can support this via the rental scheme, or advice on buying your own kit. Otherwise, we are
		happy to consider lending members our wooden bows for competition purposes where necessary,
		though this is considered on a case-by-case basis. If you would like to get into competing but
		find yourself without unable to access the rental scheme, please talk to the equipment officer
		or other committee members to ask about alternatives.
	</p>
	<Alert>
		Note that as squad members have priority on the rental scheme, you might want to try for the
		novice squad if you are a beginner keen on competing - more information on the squads <Link
			label="below"
			href="/members/tournaments#squads"
			external={false}
		/>.
	</Alert>
	<p>
		We would also encourage beginners to start with indoor competitions, which tend to be more
		accessible as you will be shooting shorter distances, and indoor rounds are generally shorter in
		duration and also slightly less physically demanding (no standing in the sun for hours!).
		Further, competition season starts around the beginning of Lent term, i.e. during the indoor
		season, so the first opportunities you would have to compete are generally indoors!
	</p>
	<img
		src={happyCompetitionImg}
		alt="CUB member doing a thumbs up and smiling during arrow collection"
	/>
	<p>
		For those who would like to compete, the earliest competitions of the year are usually the
		TOUCAN regional legs and BUCS qualifiers, with the former happening late Michaelmas. These two
		are the primary recurring student tournaments we send archers to, which are able to provide
		plenty of support for. If you're interested, read more about them in the <Link
			label="recurring competitions"
			external={false}
			href="/members/tournaments#recurring"
		/> section.
	</p>
	<p>
		Note that sometimes, we have a limit on the number of archers we can send to competitions and
		may become oversubscribed. In such cases, we will generally give priority to squad members, but
		will also consider the following factors in deciding team composition:
	</p>
	<List items={teamSelectionCriteria} />
	<p>
		That said, we do try our best to ensure that everyone interested in competing are able to, so
		make sure to communicate your interest to the committee through email or during training
		sessions, so we can plan accordingly and secure the best opportunities for you!
	</p>
</PageSection>

<PageSection headingText="The Squads" id="squads">
	<p>
		The squads - divided into the Novice Squad (for those in their first year of the sport) and the
		Senior Squad (for those with more than a year of experience), are our main group of competitive
		archers. Each squad usually consists of 8-12 members, which are selected each year by the
		committee. Squad members are expected to commit to training and competing throughout the
		academic year, and are given the corresponding support to do so. A full list of squad
		commitments and perks are given at the end of this section.
	</p>
	<p>
		While the exact selection criteria may change from year to year, the Novice Squad are usually
		selected by coaches during the Beginners' Course while the Senior Squad members are chosen
		through a target day in Michaelmas Term. Those interested in the Novice Squad can read more
		<Link external={false} label="here" href="/join/beginners#novice" />, or look out for an email
		about Senior Squad selection from the captain for more information.
	</p>
	<div class="grid lg:grid-cols-2 gap-4">
		<Card icon={Dumbbell} title="Commitments">
			<ul>
				<List
					iconColor="text-accent/80"
					textColor="text-neutral/80"
					items={squadCommitments}
					indent={false}
					extraClasses="md:py-2 px-2"
				/>
			</ul>
		</Card>
		<Card icon={CircleStar} title="Perks">
			<ul>
				<List
					iconColor="text-accent/80"
					textColor="text-neutral/80"
					items={squadPerks}
					indent={false}
					extraClasses="md:py-2 px-2"
				/>
			</ul>
		</Card>
	</div>
</PageSection>

<PageSection headingText="Archery Rounds" id="rounds">
	<p>
		So you've decided that you would like to start competing? Well one of the most basic knowledge
		that you will need is about archery rounds. Rounds are what we call different formats of archery
		competitions, which generally vary by the number of arrows you need to shoot and the distance
		they are shot at. Here we will dive into a few of the most common rounds that competiive members
		of CUB shoot.
	</p>
	<p>
		For indoor season, we mainly shoot the Portsmouth round, which is 60 arrows at 20 yards (on 60cm
		target faces). We also generally only shoot at this distance during indoor sessions. More
		advanced archers and compound archers may sometimes shoot the round on a 3-spot face instead
		during competitions.
	</p>
	<p>
		Rounds for outdoor shooting is a lot more varied. At CUB, we tend to focus on the Albion (108
		arrows total on 80, 60 and 50 yards) and Windsor (108 arrows total on 60, 50 and 40 yards)
		rounds for men and women respectively as they are what we shoot for Varsity. However, we do run
		our training sessions such that archers can request to shoot any distance they want, so anyone
		should be able to practice for any rounds they need.
	</p>
	<p>
		Other common outdoor rounds include Warwick, York, Hereford and World Archery(WA) rounds like
		WA900. You can find more resources on the specifics of different archery rounds in our <Link
			label="Resources"
			href="/resources"
			external={false}
		/> page.
	</p>
</PageSection>

<PageSection headingText="Recurring Competitions" id="recurring">
	<p>
		Below are some of the main recurring competitions that our members will have access to. If you
		can't find what you're looking for here, please look on the official organiser website for more
		details on TOUCAN and BUCs, or contact the <Link
			label="Tournaments Officer"
			href={`mailto:${links.tournaments_email.url}`}
			external
		/> to ask about other competitions happening around us.
	</p>

	<div class="flex flex-col gap-2 my-4">
		{#each recurringComps as { icon, name, desc } (name)}
			<AccordianItem
				id={`recurring-${name.replaceAll(' ', '-').toLowerCase()}`}
				name="recurring-comps"
				{icon}
				title={name}
			>
				<div class="flex flex-col gap-4">
					{#each desc as d, i (i)}
						<p>{d}</p>
					{/each}
				</div>
			</AccordianItem>
		{/each}
	</div>
</PageSection>
