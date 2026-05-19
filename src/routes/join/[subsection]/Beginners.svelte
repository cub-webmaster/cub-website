<script lang="ts">
	import Alert from '$components/common/Alert.svelte';
	import Card from '$components/common/Card.svelte';
	import Link from '$components/common/Link.svelte';
	import List from '$components/common/List.svelte';
	import PageSection from '$components/layout/PageSection.svelte';
	import { fees } from '$data/join/fees';
	import links from '$data/links';
	import { CircleChevronRight, CircleStar, Dumbbell } from '@lucide/svelte';

	const noviceCommitments = [
		'Attend coaching session every Wednesday morning',
		'Strength and Conditioning sessions every Thursday morning',
		'At least one more treaining session each week',
		'Compete in at least 4 competitions (including Varsity) throughout the year'
	];

	const novicePerks = [
		'Priority spots for competitions and subsidies for related travels',
		'Additional exclusive coaching to help you improve quickly',
		'Priority and reduced fee for bow rental',
		'Greater social opportunities - exclusive training with other competitive members and meeting archers from across the country during competitions!'
	];
</script>

{#snippet cardListItem(text: string)}
	<li class="py-1 md:py-2 px-2">
		<div class="text-base p-0 flex gap-2 text-left">
			<CircleChevronRight size="1rem" class="text-accent/80 shrink-0 mt-1" />{text}
		</div>
	</li>
{/snippet}
<PageSection>
	<p>
		The club is open to all students and staff of the University of Cambridge, and we run a
		beginners' course throughout each Michaelmas term to train those new to archery on how to shoot
		safely and effectively. Once the course is complete, newly-trained archers are then welcome to
		shoot with us as a normal member of the club and can borrow club equipment if necessary.
	</p>

	<Alert>
		We regret that we cannot accept beginners at any time other than the start of Michaelmas term,
		as running a beginners' course is a significant time investment for the club and its committee
		members, who have to focus on managing competitions and their academics during the rest of the
		year.</Alert
	>
</PageSection>

<PageSection headingText="Taster Sessions" headingId="taster">
	<p>
		Each year at the beginning of Michaelmas term, we run a have-a-go session for all those who are
		interested in the beginners course but want to try out archery before signing up.
	</p>
	<p>
		<b>Our main taster session in 2025 has passed.</b> Please follow our social media for other opportunities
		to try out the sport.
	</p>
</PageSection>

<PageSection headingText="Beginners' Courses" headingId="course">
	<p>
		The beginners' course will take place over four Sunday mornings in Michaelmas term, starting on
		the 19th of October in 2025, and contains all the coaching necessary to allow you to shoot
		safely and independently, as well as introducing you to the wider sport of archery. All required
		equipment will be provided by the club.
	</p>

	<p><b>All four sessions of the course are mandatory.</b></p>

	<Alert>
		Please note that the course is often over-subscribed, and we cannot guarantee a place for
		everybody. In such cases the club will run a ballot to allocate spaces.
	</Alert>
	<p>
		The 2025 beginners' course costs £{fees.beginner} to attend, on top of the club's annual membership
		fees, which are as follows:
	</p>
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
	<p>
		Those who successfully complete the beginners' course, thus proven capable of shooting
		independently to a safe standard, will be provided with a certificate. They will then become a
		full member of the club for the rest of the year, and are welcome to shoot at any of the regular
		club sessions for no extra fee. However, your development as a beginner will not stop here, as
		there are many further opportunities such as coaching and seminars throughout the year.
	</p>
</PageSection>

<PageSection headingText="Novice Squad" headingId="novice">
	<p>
		A novice in archery is anyone who is within their first 12 months of learning the sport, and the
		Novice Squad refers to our team of competitive beginner archers. Members of the Novice Squad are
		<b
			>expected to keep up with a range of training commitments during term and represent the club
			in a number of competitions, in exchange for perks that will support their growth in the sport</b
		> such as additional coaching and exclusive opportunities to rent higher quality bows from the club.
	</p>

	<p>
		The Novice Squad is selected from the cohort of new beginners each Michaelmas term. We are
		looking for enthusiastic beginners who are willing to put in the extra effort to develop their
		archery to a competitive level, who want to learn and improve, and want to be part of the team
		representing the university at various events. If you're interested, make sure to <b
			>register your interest with your coaches during the beginners' course</b
		>. We don't expect you to shoot like an expert right away - only that you will be enthusiastic
		to start your journey in the sport!
	</p>

	<Alert>
		Note that spaces on the squad are limited, so we are unable to accommodate every member who are
		interested. Further, failure to keep up with training or regular competing will also result in
		being removed from the squad, so the opportunity can be given to someone willing to commit.
	</Alert>
	<p>
		See below for more details on the relevant commitments and perks of being on the Novice Squad.
		Further questions can be directed to the
		<Link href={`mailto:${links.novice_email.url}`} label="Novice Officer" external /> who is responsible
		for making the squad selection and coaching the squad.
	</p>

	<div class="grid lg:grid-cols-2 gap-4">
		<Card icon={Dumbbell} title="Commitments">
			<ul>
				{#each noviceCommitments as text, i (i)}
					{@render cardListItem(text)}
				{/each}
			</ul>
		</Card>
		<Card icon={CircleStar} title="Perks">
			<ul>
				{#each novicePerks as text, i (i)}
					{@render cardListItem(text)}
				{/each}
			</ul>
		</Card>
	</div>
</PageSection>
