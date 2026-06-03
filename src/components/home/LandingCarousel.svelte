<script lang="ts">
	import type { EmblaOptionsType } from 'embla-carousel';
	import useEmblaCarousel from 'embla-carousel-svelte';
	import { carouselMaxCount } from '../../data/general';
	import type { EmblaCarouselType } from 'embla-carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import logo from '$lib/assets/img/logo.png';
	import { homeImages as images } from '$data/home/carouselImages';
	import Title from '$components/common/Title.svelte';

	const trimmedImages = $derived(
		images.length > carouselMaxCount ? images.splice(carouselMaxCount - 1) : images
	);

	let emblaApi: EmblaCarouselType;
	let options: EmblaOptionsType = { loop: true };
	let scrollSnaps: number[] = $state([]);
	let selectedSnap = $state(0);
	let w = $state(0);

	const scrollTo = (index: number) => emblaApi?.scrollTo(index);
	const setupSnaps = (emblaApi: EmblaCarouselType) => (scrollSnaps = emblaApi.scrollSnapList());
	const setActiveSnap = (emblaApi: EmblaCarouselType) =>
		(selectedSnap = emblaApi.selectedScrollSnap());

	const onInit = (event: CustomEvent<EmblaCarouselType>) => {
		emblaApi = event.detail;
		emblaApi.plugins().autoplay?.play();

		setupSnaps(emblaApi);
		setActiveSnap(emblaApi);

		emblaApi.on('reInit', setupSnaps);
		emblaApi.on('reInit', setActiveSnap);
		emblaApi.on('select', setActiveSnap);
	};

	// style related vars
	const iconsBreakpoint = 1216;
</script>

<div class="w-full relative pt-[56.25%]" bind:clientWidth={w}>
	<div
		class="absolute h-full w-full top-0 bg-linear-to-b from-secondary/95 via-15% sm:via-secondary/80 via-secondary/70 to-35% to-transparent left-0 bottom-0 right-0 z-2 flex justify-center items-center pointer-events-none"
	>
		<img src={logo} alt="CUB logo" class="w-1/5 opacity-90" />
		<Title text="Cambridge University Bowmen" sizes={['lg:text-5xl', 'sm:text-3xl', 'text-xl']} />
	</div>
	<div class="embla top-0 bottom-0 right-0 left-0 absolute">
		<div
			class="h-full overflow-hidden"
			onemblaInit={onInit}
			use:useEmblaCarousel={{
				options,
				plugins: [Autoplay({ delay: 3000 })]
			}}
		>
			<div class="flex h-full touch-pan-y touch-pinch-zoom">
				{#each trimmedImages as { path, alt } (path)}
					<div class="min-w-0 grow-0 shrink-0 basis-(--slide-size)">
						<img class="w-full h-full object-cover" src={path} {alt} />
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div
		class="absolute left-1/2 flex xl:p-1 p-0.75 xl:bottom-8 md:bottom-4 bottom-2 rounded-full -translate-x-1/2 gap-2 bg-neutral/60"
	>
		{#each scrollSnaps as snap, index (snap)}
			<button
				class="inline-flex border-none opacity-50 bg-transparent justify-center items-center"
				class:opacity-100={index === selectedSnap}
				onclick={() => scrollTo(index)}
				aria-label={`Go to photo ${index + 1}`}
			>
				<div class={`rounded-full bg-white ${w > iconsBreakpoint ? 'h-3 w-3' : 'h-2 w-2'}`}></div>
			</button>
		{/each}
	</div>
</div>

<style>
	.embla {
		--slide-size: 100%;
		--slide-spacing: 0;
	}
</style>
