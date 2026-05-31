<script lang="ts">
	import '../app.css';
	import Header from '$components/layout/Header.svelte';
	import ResponsiveAlert from '$components/common/ResponsiveAlert.svelte';
	import Link from '$components/common/Link.svelte';
	import { beginnerRecruitmentOngoing, containerMaxWidth } from '$data/general';
	import { resolve } from '$app/paths';
	import Card from '$components/common/Card.svelte';
	import landingCardsContent from '$data/home/jtcCards';
	import { CircleChevronRight, Hand, MessageCircleQuestionMark } from '@lucide/svelte';
	import PageHeading from '$components/layout/PageHeading.svelte';
	import { landingPageFaqs } from '$data/home/faq';
	import Ticker from '$components/common/Ticker.svelte';
	import Container from '$components/layout/Container.svelte';
	import links from '$data/links';
	import Accordian from '$components/common/Accordian.svelte';
	import FaqContent from '$components/home/FaqContent.svelte';
	import LandingCarousel from '$components/home/LandingCarousel.svelte';
</script>

<Header title="Home" showBrand={false}>
	{#snippet override()}
		<section class="hero">
			<LandingCarousel />
		</section>
	{/snippet}
</Header>

<!-- Landing page joining alert -->
<ResponsiveAlert
	title="Interested in joining us?"
	callToActionLink={beginnerRecruitmentOngoing
		? resolve('/join/beginners')
		: resolve('/join/experienced')}
	callToActionText="Read More"
>
	{#snippet mainText()}
		{#if beginnerRecruitmentOngoing}
			The <b>Beginner's Course</b> is now OPEN! Click <b>Read More</b> for more details and how to
			sign up. Please contact the
			<Link href={`mailto:${links.secretary_email.url}`} label="Secretary" external />
			or the
			<Link href={`mailto:${links.novice_email.url}`} label="Novice Officer" external />
			for any inquiries about the course.
		{:else}
			The club has reached capacity for beginner archers this academic year, please stay tuned for
			our beginner's course next year! <b>Experienced archers</b> can still join the club directly,
			<b>click Read More</b> to see how. For other enquiries please contact the
			<Link href={`mailto:${links.secretary_email.url}`} label="Secretary" external />
			or the
			<Link href={`mailto:${links.novice_email.url}`} label="Novice Officer" external />
			for anything related to beginners.
		{/if}
	{/snippet}
</ResponsiveAlert>

<!-- welcome text section -->
<Container verticalPadding>
	<PageHeading text="Welcome to Cambridge University Bowmen!" id="welcome" icon={Hand} />

	<div class="flex gap-4 flex-col text-neutral/80 md:text-base text-justify">
		<p>
			We are a friendly and enthusiastic club catering for all levels, from the complete beginner up
			to the highly experienced athlete. Anyone is welcome, whether they wish to shoot purely for
			fun or desire to compete in any of the many competitions we attend. Cambridge University
			Bowmen have an excellent record over the years in both the experienced and novice levels of
			competition, on the university stage as well as at county, regional and national level. If any
			of that interests you, do explore our section on how to join the club or contact the <Link
				href={`mailto:${links.committee_email.url}`}
				label="committee"
				external
			/>
			if you have any other enquiries.
		</p>
	</div>
</Container>

<!-- join train compete section -->
<div class="flex flex-col items-center w-full bg-info relative">
	<Ticker
		items={['Join', 'Train', 'Compete', 'Join', 'Train', 'Compete']}
		backgroundColor="bg-primary"
	/>

	<div class={`${containerMaxWidth} w-full`}>
		<div class="grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 gap-4 py-6 px-4">
			{#each landingCardsContent as c (c.title)}
				<div class="bg-base-100">
					<Card title={c.title} icon={c.icon}>
						<ul class="menu menu-sm w-full p-0 [&_li>*]:rounded-none pr-4">
							{#each c.items as item (item.text)}
								<li
									class="hover:bg-accent/80 hover:text-base-200 py-1 md:py-2 px-2 hover:[&_.red-text]:text-base-200"
								>
									<a class="text-base p-0 hover:bg-transparent" href={item.href}
										><CircleChevronRight
											size="1rem"
											class="text-accent/80 red-text"
										/>{item.text}</a
									>
								</li>
							{/each}
						</ul>
					</Card>
				</div>
			{/each}
		</div>
	</div>
	<div class="top-shadow"></div>
	<Ticker
		items={['Join', 'Train', 'Compete', 'Join', 'Train', 'Compete']}
		backgroundColor="bg-primary"
		direction="right"
	/>
</div>

<!-- FAQ section -->
<Container verticalPadding>
	<PageHeading text="Frequently Asked Questions" id="faq" icon={MessageCircleQuestionMark} />

	<Accordian
		name="landing-faq"
		items={landingPageFaqs.map(({ related, question, answer }) => ({
			title: question,
			content: (internals) => FaqContent(internals, { answer, related })
		}))}
	/>
</Container>

<style>
	.top-shadow {
		box-shadow:
			0 -20px 25px -5px rgb(0 0 0 / 0.1),
			0 -8px 10px -6px rgb(0 0 0 / 0.1);
	}
</style>
