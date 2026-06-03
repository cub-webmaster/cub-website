<script lang="ts">
	import { resolve } from '$app/paths';
	import Alert from '$components/common/Alert.svelte';
	import Link from '$components/common/Link.svelte';
	import PageSection from '$components/layout/PageSection.svelte';
	import TrainingSchedule from '$components/members/TrainingSchedule.svelte';
	import links from '$data/links';
	import CalendarX from '@iconify-svelte/lucide/calendar-x';

	const { schedule } = $props();
</script>

<PageSection>
	<p>
		The archery year is split into an indoor and outdoor season. The indoor season runs from the
		start of the academic year until the end of Lent, i.e. late Septermber to late March. After this
		we move outdoors for the duration of Easter till the end of summer vacations.
	</p>
	<p>
		CUB's training pattern varies depending on the season - keep reading to find out about the
		schedule, venue and other details regarding our training sessions.
	</p>
</PageSection>
<PageSection headingText="Training schedule" id="schedule">
	<p>
		During indoor season (late September onwards), we train on the <b
			>mornings of Mondays, Wednesdays and Sundays</b
		>
		as well as the
		<b>evenings of Fridays</b>. During outdoor season (late March onwards), the schedule varies a
		bit more but we usually train during <b>late afternoon of a few weekdays as well as Sundays</b> to
		catch that few hours before sunset where there's still a good amount of light but usually cool enough
		that the danger of a heatstroke is low.
	</p>

	<p>
		Beyond that, we also regularly have strength and conditioning (SnC) sessions on Thursday
		mornings, during which we book out a private gym room in the University Sports Centre, along
		with a professional trainer to support our members in improving the kind of strength and stamina
		needed in archery.
	</p>
	<p>
		Please subscribe to our google calendar below to keep up with our exact schedule. The website
		will also reflect our complete schedule for the upcoming week.
	</p>

	<div class="flex flex-col items-center mt-4 gap-4">
		<a
			href={links.calendar.url}
			rel="external"
			class="btn btn-accent md:w-fit w-full"
			target="_blank">Subscribe to CUB Calendar</a
		>
		{#if schedule}
			<TrainingSchedule {schedule} />
		{:else}
			<div class="bg-neutral/10 flex flex-col items-center w-full py-10 text-center px-8">
				<CalendarX />
				<span class="font-semibold">No sessions this week</span>
				<span class="text-neutral/70 text-sm"
					>Subscribe to our calendar to find out when we start again!</span
				>
			</div>
		{/if}
	</div>
</PageSection>

<PageSection id="venue" headingText="Venues">
	<p>
		We train at the <b>Universtiy Sports Centre</b> during indoor season and the
		<b>Churchill College Playing Fields</b> during outdoor season, a map view detailing the location of
		both can be found below. Note that all strength and conditioning sessions happen at the University
		Sports Centre regardless of season.
	</p>
	<div class="grid lg:grid-cols-2 gap-4 mb-8">
		<iframe
			title="Google Maps: University Sports Centre"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.92014429678!2d0.08302397654001815!3d52.208498659245606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8774861d9ffdf%3A0xb73d0c1fc075bba2!2sSports%20Centre%20and%20Gym%2C%20University%20of%20Cambridge!5e0!3m2!1sen!2suk!4v1779398808173!5m2!1sen!2suk"
			height="300"
			style="border:0;"
			allowfullscreen={false}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			class="w-full"
		></iframe>

		<iframe
			class="w-full"
			title="Google Maps: Churchill Playing Fields"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2085.1865157068883!2d0.0963543103351541!3d52.21347143485457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d870caaf3d9a2f%3A0x2ff5d076217d81a7!2sChurchill%20College%20Playing%20Fields!5e0!3m2!1sen!2suk!4v1779398549055!5m2!1sen!2suk"
			height="300"
			style="border:0;"
			allowfullscreen={false}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</PageSection>

<PageSection id="signup" headingText="Session Signups">
	<p>
		We run our sessions on a sign-up basis to prevent overcrowding and keep track of club equipment
		usage. Members are allowed to sign up to as many sessions as they want throughout the year,
		though some sessions might be exclusive to squad members/operated by invite.
	</p>
	<p>
		Follow the link <Link href={links.signup.url} external label="here" /> to find this term's sign up
		form.
	</p>

	<Alert>
		The session sign up is only open to full members of the club. If you are looking to join us,
		please refer to our <Link href={resolve('/join')} label="join section" external={false} />.
	</Alert>
</PageSection>

<PageSection id="coaching" headingText="Certified Coaching">
	<p>
		At CUB, we try our best to ensure that everyone gets access to opportunities to develop their
		skills. As part of that, we offer pay-per-session coaching with an AGB certified coach at the
		request of members. Usually, this will be the same coach that is training our squad members and
		are trained to work effectively with beginners and experienced archers alike.
	</p>

	<p>
		Members who are interested in personal coaching sessions should look out for emails from our
		Development Officer regarding signups for coaching. We have limited slots every term as our
		coach only works with a couple archers at a time, so make sure to sign up quickly when the
		chance arises! If you have more questions about coaching, feel free to email the <Link
			href={`mailto:${links.development_email.url}`}
			label="Development Officer"
			external
		/> about it.
	</p>
</PageSection>
