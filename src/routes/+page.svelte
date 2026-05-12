<script lang="ts">
	import { homeImages } from '$data/home/carouselImages';
	import Carousel from '$components/Carousel.svelte';
	import '../app.css';
	import Header from '$components/layout/Header.svelte';
	import { generateClassString } from '$lib/util';
	import JoinAlert from '$components/JoinAlert.svelte';

	// style stuff
	const titleTextClasses = [
		'text-base-200',
		'font-bold',
		'lg:text-5xl',
		'text-shadow-[0_0_20px]',
		'text-shadow-neutral',
		'sm:text-3xl',
		'text-xl',
		'font-[DM_Serif_Display]',
		'absolute',
		'bottom-2/5',
		'left-1/2',
		'-translate-x-1/2',
		'text-center',
		'text-nowrap',
		'slide-in'
	];
</script>

<Header title="Home" showBrand={false}>
	{#snippet override()}
		<section class="hero">
			<Carousel images={homeImages}>
				{#snippet overlay()}
					<div
						class="absolute h-full w-full top-0 bg-linear-to-b from-secondary/80 via-20% via-secondary/30 to-transparent left-0 bottom-0 right-0 z-2 flex justify-center items-center pointer-events-none"
					>
						<img src="img/logo.png" alt="CUB logo" class="w-1/5 opacity-90" />
						<span class={generateClassString(...titleTextClasses)}>
							Cambridge University Bowmen
						</span>
					</div>
				{/snippet}
			</Carousel>
		</section>
	{/snippet}
</Header>

<JoinAlert />

<div class="h-screen"></div>

<style>
	@keyframes slideInUp {
		from {
			transform: translateY(100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.slide-in {
		animation: slideInUp 1s ease-out; /* remove infinite */
	}
</style>
