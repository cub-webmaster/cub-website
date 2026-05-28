<script lang="ts">
	import Accordian from '$components/common/Accordian.svelte';
	import Link from '$components/common/Link.svelte';
	import PageSection from '$components/layout/PageSection.svelte';
	import links from '$data/links';
	import { annualEvents, miscEvents } from '$data/members/socials';
</script>

<PageSection>
	<p>
		CUB holds various social gatherings throughout the year to help our members de-stress and get to
		know each other.
	</p>
	<p>
		Below are some of the events we do more often, but if you have any ideas of other fun things we
		can get up to, do <Link
			label="get in touch"
			external
			href={`mailto:${links.social_email.url}`}
		/> or better yet, join the committee as a Social Secretary!
	</p>
</PageSection>

<PageSection headingText="Annual Events" id="annual">
	<p>
		Regular events that happen at a specific time each year. Most of these are club traditions that
		have been going on for a while.
	</p>
	<Accordian
		radioName="socials-annual"
		items={annualEvents.map(({ name, desc, icon }) => ({
			title: name,
			icon,
			content: desc
		}))}
	/>
</PageSection>

<PageSection headingText="Miscellaneous Socials" id="misc">
	<p>
		These are more spontaneous events that happen occaionally and largely depend on members' demand
		as well as committee capacity.
	</p>
	<Accordian
		radioName="socials-misc"
		items={miscEvents.map(({ name, desc, icon }) => ({
			title: name,
			icon,
			content: desc
		}))}
	/>
</PageSection>
