<script lang="ts">
	import Alert from '$components/common/Alert.svelte';
	import Link from '$components/common/Link.svelte';
	import PageSection from '$components/layout/PageSection.svelte';
	import BadgeAccordianItem from '$components/members/BadgeAccordianItem.svelte';
	import Criterion from '$components/members/Criterion.svelte';
	import links from '$data/links';
	import scoresheet252 from '$lib/assets/docs/252_scoresheets_CUB.pdf';
	import {
		badges252,
		badges252Distance,
		badgesCUB,
		badgesEafCross,
		badgesToucan,
		badgesWaStar,
		badgesWaTarget,
		badgesWaArrows,
		badgesRose,
		badgesWaArrowhead,
		badgesWaArrowsScoresheets,
		badgesWaArrowsScoresheetsLastUpdate
	} from '$data/members/badges';
	import { generateClassString } from '$lib/util';
	import { CircleChevronRight } from '@lucide/svelte';
	import List from '$components/common/List.svelte';
	import GoToDocButton from '$components/about/GoToDocButton.svelte';
	import { resolve } from '$app/paths';

	const bluesCriteria = [
		'Ability',
		'Excellence',
		'Effort',
		'Determination',
		'Overall contribution to the sport',
		'Contribution to the result against Oxford'
	];
</script>

<PageSection>
	<p>
		Badges and awards are great recognition of an archer's growth! Part of the joy in archery is the
		personal challenge to improve your scores, through lots of practice and experience. Look here
		for all the different badges/awards you might be eligible for and how to claim them!
	</p>
</PageSection>
<PageSection headingText="Internal Badges" id="internal">
	<p>
		CUB recognises the importance of rewarding our archers' progress and improvement and try to do
		this with a variety of different badges. Read on to see may be relevant to you.
	</p>

	<div class="flex flex-col gap-2 my-4">
		<BadgeAccordianItem badgeInfo={badgesCUB} internal>
			{#snippet beforeTable()}
				<p>
					The CUB badges award steady improvement in scores from beginner all the way to highly
					advanced archer and are designed to bridge the gap between classifications and other
					awards.
				</p>
				<p>
					They may be obtained from the club <Link
						href={`mailto:${links.tournaments_email.url}`}
						label="Records Officer"
						external
					/> upon presentation of a qualifying score shot in competition or on an official club target
					day. Badges cost £2 and may be back claimed - you should claim first for the score you achieve.
				</p>
				<p>
					The scheme was developed by Jack Atkinson and designed to be fair and comparable across
					all bowstyles, competition types and rounds. Note that the following scores are licensed
					under the Creative Commons <Link
						label="Attribution-ShareAlike 4.0 International"
						external
						href={links.cc_attribution_sharealike.url}
					/> license to Jack Atkinson and CUB.
				</p>
			{/snippet}
		</BadgeAccordianItem>
		<BadgeAccordianItem badgeInfo={badges252} internal>
			{#snippet beforeTable()}
				<p>
					The 252 scheme encourages archers to shoot longer distances outdoors by providing a target
					at increasing distances and recognition of an archers ability to reach these. Archers are
					encouraged to keep pushing themselves on increasing distance and claiming new badges. The
					distance relevant for each badge colour is as listed:
				</p>
				<ul class="w-fit ml-8">
					{#each badges252Distance as { color, name, distance } (name)}
						<li class="flex gap-4 items-center w-full py-1">
							<div class={generateClassString('w-4 h-4 border border-neutral/50', color)}></div>
							<div class="flex justify-between grow gap-4">
								<span class="font-semibold">{name}:</span> <span>{distance} yards</span>
							</div>
						</li>
					{/each}
				</ul>
				<p>
					To obtain a 252 badge, an archer must obtain the score relevant to their bowstyle (see
					table below), with <b>3 dozen arrows on a 122cm face using 5-zone scoring</b>. The round
					can be shot on any shooting session and is encouraged within regular practice sessions.
					However, scorecards must be dated and witnessed with the relevant distance recorded.
					Badges can be back-claimed, though only one badge can be claimed per scorecard.
				</p>
			{/snippet}

			{#snippet afterTable()}
				<p>
					Badges can be claimed from the Tournaments and Records Officer for £2. To claim, download,
					print, and fill in the <a
						class="link-hover text-accent/80 font-semibold"
						download
						href={scoresheet252}>scorecard</a
					>
					and show it, signed and witnessed, to the Tournaments and Records Officer at a shooting session
					or email it to the Records Officer <Link
						href={`mailto:${links.tournaments_email.url}`}
						label="here"
						external
					/>.
				</p>
			{/snippet}
		</BadgeAccordianItem>
		<BadgeAccordianItem badgeInfo={badgesWaArrows} internal>
			{#snippet beforeTable()}
				<p>
					The WA arrow awards offer all archers, especially beginneres a guided path to improve
					their overall archery. Each badge has four components to it including <b
						>shooting ability, shooting form/technique, general archer know-how</b
					>
					and <b>equipment skills</b>. As archers progress along the scheme and claim each badge
					they will progress from a beginner archer just starting out to an experienced archer
					capable of maintaining all of their equipment, shooting high scores with good form and
					confident in their knowledge of the archery field.
				</p>

				<p>
					To claim a badge, print the corresponding scoresheet and get a committee member to sign
					off each box as you achieve them. A badge can be claimed for £3 from the <Link
						href={`mailto:${links.tournaments_email.url}`}
						label="Records Officer"
						external
					/>.
				</p>
				<p>
					More general information on the scheme is available from World Archery <Link
						href={links.wa_arrow_awards_curriculum.url}
						label="here"
						external
					/>, or you can read the manual <Link
						href={links.wa_arrow_awards_manual.url}
						label="here"
						external
					/>, while the scoresheets for each level are available below.
				</p>

				<List
					items={badgesWaArrowsScoresheets.map(({ name, color, doc }) => ({
						title: `${name} Arrow Award`,
						subtitle: `Last updated: ${badgesWaArrowsScoresheetsLastUpdate}`,
						decoration: color,
						end: (internal) =>
							GoToDocButton(internal, {
								href: doc,
								download: true,
								docName: `WA Arrow Awards Scoresheet - ${name}`
							})
					}))}
				/>
			{/snippet}
		</BadgeAccordianItem>
	</div>
</PageSection>
<PageSection headingText="External Badges" id="external">
	<p>
		CUB isn't the only ones handing out badges -- other archery bodies also reward hard work and
		progress by the distribution of shiny awards!
	</p>
	<p>
		We've listed some that are likely to be relevant to our archers here, but there might be more
		featured on each governing body's website. Feel free to reach out to the <Link
			href={`mailto:${links.tournaments_email.url}`}
			label="Records Officer"
			external
		/> if you need help finding information on a specific award.
	</p>

	<div class="flex flex-col gap-2 my-4">
		<BadgeAccordianItem badgeInfo={badgesToucan}>
			{#snippet beforeTable()}
				<p>
					These can be claimed from the League organiser following any TOUCAN or BUCS event. They
					cost £2 each and can be back claimed, but you should first claim for the score level
					achieved. The scores required for the TOUCAN badges indoors on a Portsmouth Round are as
					follows:
				</p>
			{/snippet}
			<!-- TODO update pic and info when TOUCAN website is back alive -->
			{#snippet afterTable()}
				<p>
					TOUCAN Badges can also be claimed outdoors. The appropriate scores, gents shooting a St.
					George, ladies shooting an Albion, or the appropriate WA1440 round can be found on the
					TOUCAN League official website.
				</p>
				<p>
					There is also a purple TOUCAN badge. These are awarded for exceptional contributions to
					student archery, TOUCAN, or a club, and are presented at the TOUCAN ball each year.
				</p>
			{/snippet}
		</BadgeAccordianItem>
		<BadgeAccordianItem badgeInfo={badgesWaStar}>
			{#snippet beforeTable()}
				<p>
					The WA Star awards are run by World Archery. WA Stars can be claimed at any WA 1440 round
					of World Record Status for <b>Recurve and Compound</b> archers. To do so, complete a form at
					the end of the tournament. The scores for the WA Star awards are as follows:
				</p>
				<Alert>
					WA awards must be claimed for the score shot and connot be back-claimed! For example, if
					you shot a blue scoring round, you may not apply for an award lower than blue.
				</Alert>
			{/snippet}
		</BadgeAccordianItem>
		<BadgeAccordianItem badgeInfo={badgesWaTarget}>
			{#snippet beforeTable()}
				<p>
					The WA Target awards are run by World Archery and awarded for rounds other than the WA
					1440.
				</p>
				<p>
					WA Target Awards can be claimed at any WA round of World Record Status. To do so, complete
					a form at the end of the tournament. The scores for the WA Target awards are the same for
					both recurve and compound and are as follows:
				</p>
				<Alert>
					WA awards must be claimed for the score shot and connot be back-claimed! For example, if
					you shot a blue scoring round, you may not apply for an award lower than blue.
				</Alert>
			{/snippet}
		</BadgeAccordianItem>
		<BadgeAccordianItem badgeInfo={badgesEafCross}>
			{#snippet beforeTable()}
				<p>
					The English Crosses are run by Archery England (formerly EAF or English Archery
					Federation).
				</p>
				<p>
					English Crosses can be claimed at any WA 1440 round of UK or World Record Status shot in
					England. To do so complete the form found <Link
						href={links.english_crosses_form.url}
						external
						label="here"
					/> and send it to Archery England at <Link
						external
						label="crosses@archeryengland.org"
						href={links.english_crosses_email.url}
					/>. The scores for the English Crosses are as follows:
				</p>
			{/snippet}
		</BadgeAccordianItem>
		<BadgeAccordianItem badgeInfo={badgesRose}>
			{#snippet beforeTable()}
				<p>
					Rose awards are run by Archery GB. In 1844, the first Grand National Meeting was held at
					York, where they shot a 12 dozen round now known as the York Round. The award given was
					the White Rose of Yorkshire, which is where the Rose awards come from.
				</p>
				<p>
					Rose awards can be claimed at any York, Hereford or Bristols I-V tournament has both UK
					Record status and Rose Award status. Claims can be made at the event by filling out a form
					at the end of the competition. Awards are made for gentlemen shooting the York round, and
					ladies the Hereford. The scores for the Rose awards are as follows.
				</p>
				<p>
					Rose awards cannot be back-claimed, but if you achieve a score for a particular colour
					Rose that you have already claimed, you can choose to use that score for one of the lower
					Roses that you haven't claimed instead.
				</p>
			{/snippet}
		</BadgeAccordianItem>
		<BadgeAccordianItem badgeInfo={badgesWaArrowhead}>
			{#snippet beforeTable()}
				<p>
					WA Arrowhead Badges can be claimed by recurve, barebow and compound archers shooting the
					WA Arrowhead field archery round at tournaments with a WA Award Status by filling out a
					form at the end of the competition. The scores required for the badge at a 24 target round
					are as follows:
				</p>
				<Alert>
					WA awards must be claimed for the score shot and connot be back-claimed! For example, if
					you shot a blue scoring round, you may not apply for an award lower than blue.
				</Alert>
			{/snippet}
		</BadgeAccordianItem>
	</div>
</PageSection>

<PageSection headingText="Blues" id="blues">
	<p>
		The Blues awards are the highest level of recognition for Cambridge University sporting
		achievements. They award exceptional performance, but specifically exceptional performance
		within the university setting and dedication and hard work towards your sport.
	</p>

	<p>
		<b>Archery is a Half-Blue sport</b>, meaning at the end of the year the outgoing captain can
		choose to award Half-Blues at their discretion to athletes that they feel are worthy of the
		award.
	</p>

	<p>
		In addition to performance the captain will also take in to account the Six Blues’ Criteria as
		set out by the Blues Committees. These are the athlete’s:
	</p>
	<ul class="ml-4">
		{#each bluesCriteria as criteria (criteria)}
			<li class="flex items-center gap-2 py-1">
				<CircleChevronRight size="1rem" class="shrink-0 text-secondary" />
				<span class="text-info">{criteria}</span>
			</li>
		{/each}
	</ul>

	<p>
		In more concrete terms, an archer can be awarded a <b>Half Blue</b> if they fulfill
		<b>ALL 3</b> of the criteria below in a single academic year. Note that all classification terms
		are based on AGB standards. More information about classifications can be found <Link
			href={resolve('/members/classifications')}
			external={false}
			label="here"
		/>.
	</p>

	<div class="flex flex-col gap-2 my-4">
		<Criterion
			items={[
				'Scores in the top 20% of their cateogry at BUCS (indoor or outdoor)',
				'Achieves a B3 (Bowman 3rd Class) classification (or higher)'
			]}
			num={1}
		/>
		<Criterion items={['Achieves an A1 (Archer 1st Class) score at the Varsity match']} num={2} />
		<Criterion
			items={[
				'Represents CUB in at least 5 competitions per academic year and trains an equivalent to 50% of club sessions.'
			]}
			num={3}
		/>
	</div>

	<p>
		For truly exceptional athletes it is possible to obtain a Full Blue award at the Captain's
		discretion. These award performance on a national level by athletes in the university setting.
	</p>

	<p>
		Specifically, an archer can achieve a <b>Full Blue</b> award if they
		<b>fulfill all Half Blue criteria AND the following criterion</b> in a single academic year:
	</p>
	<div class="my-4">
		<Criterion
			items={[
				'Scores in the top 10% of their category at BUCS (indoor or outdoor)',
				'Achieves a B2 (Bowman 2nd Class) classification (or higher)'
			]}
			num={4}
		/>
	</div>
	<p>
		All Blues related criteria specified above are correct as of May 2026. Please contact the
		<Link href={`mailto:${links.captain_email.url}`} label="Captain" external /> or <Link
			href={`mailto:${links.tournaments_email.url}`}
			label="Records Officer"
			external
		/> if you suspect these are out of date.
	</p>
</PageSection>
