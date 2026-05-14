<script lang="ts">
	import { homeImages } from '$data/home/carouselImages';
	import Carousel from '$components/Carousel.svelte';
	import '../app.css';
	import Header from '$components/layout/Header.svelte';
	import Title from '$components/common/Title.svelte';
	import logo from '$lib/assets/img/logo.png';
	import Alert from '$components/common/Alert.svelte';
	import Link from '$components/common/Link.svelte';
	import { beginnerRecruitmentOngoing } from '$data/general';
	import { resolve } from '$app/paths';
</script>

<Header title="Home" showBrand={false}>
	{#snippet override()}
		<section class="hero">
			<Carousel images={homeImages}>
				{#snippet overlay()}
					<div
						class="absolute h-full w-full top-0 bg-linear-to-b from-secondary/80 via-20% via-secondary/30 to-transparent left-0 bottom-0 right-0 z-2 flex justify-center items-center pointer-events-none"
					>
						<img src={logo} alt="CUB logo" class="w-1/5 opacity-90" />
						<Title
							text="Cambridge University Bowmen"
							sizes={['lg:text-5xl', 'sm:text-3xl', 'text-xl']}
						/>
					</div>
				{/snippet}
			</Carousel>
		</section>
	{/snippet}
</Header>

<!-- Landing page joining alert -->
<Alert callToActionLink={beginnerRecruitmentOngoing ? resolve('/join/beginners') : resolve('/join/experienced')} callToActionText="Read More">
	{#snippet mainText()}
		{#if beginnerRecruitmentOngoing}
			The <b>Beginner's Course</b> is now OPEN! Click <b>Read More</b> for more details and how to
			sign up. Please contact the
			<Link href="mailto:secretary@cubowmen.com" label="Secretary" />
			or the
			<Link href="mailto:novice@cubowmen.com" label="Novice Officer" />
			for any inquiries about the course.
		{:else}
			The club has reached capacity for beginner archers this academic year, please stay tuned for our
			beginner's course next year! <b>Experienced archers</b> can still join the club directly,
			<b>click Read More</b> to see how. For other enquiries please contact the
			<Link href="mailto:secretary@cubowmen.com" label="Secretary" />
			or the
			<Link href="mailto:novice@cubowmen.com" label="Novice Officer" />
			for anything related to beginners.
		{/if}
	{/snippet}
</Alert>
