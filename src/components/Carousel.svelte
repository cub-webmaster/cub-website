<script lang="ts">
	import type { CarouselImage } from '$lib/carousel';
	import type { EmblaOptionsType } from 'embla-carousel';
	import useEmblaCarousel from 'embla-carousel-svelte';
	import { carouselMaxCount } from '../data/general';
	import { ChevronLeft, ChevronRight, Circle } from '@lucide/svelte';
	import type { EmblaCarouselType } from 'embla-carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import type { Snippet } from 'svelte';

	const {
		images,
		controlButtons = false,
		overlay
	}: {
		images: CarouselImage[];
		controlButtons?: boolean;
		overlay?: Snippet;
	} = $props();
	const trimmedImages = $derived(
		images.length > carouselMaxCount ? images.splice(carouselMaxCount - 1) : images
	);

	let emblaApi: EmblaCarouselType;
	let options: EmblaOptionsType = { loop: true };
	let scrollSnaps: number[] = $state([]);
	let selectedSnap = $state(0);
	let w = $state(0);

	const scrollPrev = () => emblaApi?.scrollPrev();
	const scrollNext = () => emblaApi?.scrollNext();
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

	const iconProps = $derived({
		color: 'white',
		size: w > iconsBreakpoint ? '5rem' : '3rem'
	});

	const carouselControlClasses = [
		'absolute',
		'flex',
		'z-1',
		'h-full',
		'border-none',
		'px-1',
		'xl:px-4',
		'top-0',
		'bottom-0',
		'justify-center',
		'items-center'
	].join(' ');
</script>

<div class="w-full relative pt-[56.25%]" bind:clientWidth={w}>
	{@render overlay?.()}
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

	{#if controlButtons}
		<button
			class={`embla__prev left-0 ${carouselControlClasses}`}
			onclick={scrollPrev}
			aria-label="Previous"><ChevronLeft {...iconProps} /></button
		>
		<button
			class={`embla__next right-0 ${carouselControlClasses}`}
			onclick={scrollNext}
			aria-label="Next"><ChevronRight {...iconProps} /></button
		>
	{/if}

	<div
		class="absolute left-1/2 flex xl:p-1 p-0.75 xl:bottom-8 md:bottom-4 bottom-2 rounded-full -translate-x-1/2 xl:gap-2 gap-1.5 bg-neutral/60"
	>
		{#each scrollSnaps as snap, index (snap)}
			<button
				class="inline-flex border-none opacity-50 bg-transparent justify-center items-center"
				class:opacity-100={index === selectedSnap}
				onclick={() => scrollTo(index)}
			>
				<Circle
					size={w > iconsBreakpoint ? '0.8rem' : '0.5rem'}
					fill="white"
					class="circle-icon"
					strokeWidth={0}
				/>
			</button>
		{/each}
	</div>
</div>

<style>
	.embla__prev {
		background: linear-gradient(
			90deg,
			rgba(46, 40, 42, 0.7) 0%,
			rgba(46, 40, 42, 0.4) 60%,
			rgba(46, 40, 42, 0) 100%
		);

		&:hover {
			background: linear-gradient(
				90deg,
				rgba(46, 40, 42, 0.8) 0%,
				rgba(46, 40, 42, 0.45) 60%,
				rgba(46, 40, 42, 0) 100%
			);
		}
	}

	.embla__next {
		background: linear-gradient(
			90deg,
			rgba(46, 40, 42, 0) 0%,
			rgba(46, 40, 42, 0.4) 40%,
			rgba(46, 40, 42, 0.7) 100%
		);
		&:hover {
			background: linear-gradient(
				90deg,
				rgba(46, 40, 42, 0) 0%,
				rgba(46, 40, 42, 0.45) 40%,
				rgba(46, 40, 42, 0.8) 100%
			);
		}
	}

	.embla {
		--slide-size: 100%;
		--slide-spacing: 0;
	}
</style>
