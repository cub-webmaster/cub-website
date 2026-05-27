<script lang="ts">
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
	<div class="flex flex-col gap-2 pb-4">
		{#each annualEvents as event, i (i)}
			<div class="collapse collapse-plus bg-base-200 border border-primary">
				<input type="radio" name="socials-annual" checked={i == 0} />
				<div class="collapse-title font-semibold flex gap-2 items-center">
					<event.icon class="shrink-0 text-secondary" />
					<span class="text-neutral">{event.name}</span>
				</div>
				<div class="collapse-content">
					<p class="text-neutral/80">
						{event.desc}
					</p>
				</div>
			</div>
		{/each}
	</div>
</PageSection>

<PageSection headingText="Miscellaneous Socials" id="misc">
	<p>
		These are more spontaneous events that happen occaionally and largely depend on members' demand
		as well as committee capacity.
	</p>
	<div class="flex flex-col gap-2">
		{#each miscEvents as event, i (i)}
			<div class="collapse collapse-plus bg-base-200 border border-primary">
				<input type="radio" name="socials-misc" checked={i == 0} />
				<div class="collapse-title font-semibold flex gap-2 items-center">
					<event.icon class="shrink-0 text-secondary" />
					<span class="text-neutral">{event.name}</span>
				</div>
				<div class="collapse-content">
					<p class="text-neutral/80">
						{event.desc}
					</p>
				</div>
			</div>
		{/each}
	</div>
</PageSection>
