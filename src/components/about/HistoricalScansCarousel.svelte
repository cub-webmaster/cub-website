<script lang="ts">
	import type { CarouselImage } from '$lib/carousel';
	import type { EmblaOptionsType } from 'embla-carousel';
	import useEmblaCarousel from 'embla-carousel-svelte';
	import { carouselMaxCount } from '../../data/general';
	import { ChevronLeft, ChevronRight, Slash } from '@lucide/svelte';
	import type { EmblaCarouselType } from 'embla-carousel';

	const {
		images
	}: {
		images: CarouselImage[];
	} = $props();
	const trimmedImages = $derived(
		images.length > carouselMaxCount ? images.splice(carouselMaxCount - 1) : images
	);

	let emblaApi: EmblaCarouselType;
	let options: EmblaOptionsType = { loop: true };
	let scrollSnaps: number[] = $state([]);
	let selectedSnap = $state(0);

	const scrollPrev = () => emblaApi?.scrollPrev();
	const scrollNext = () => emblaApi?.scrollNext();
	const scrollTo = (index: number) => emblaApi?.scrollTo(index);
	const setupSnaps = (emblaApi: EmblaCarouselType) => (scrollSnaps = emblaApi.scrollSnapList());
	const setActiveSnap = (emblaApi: EmblaCarouselType) =>
		(selectedSnap = emblaApi.selectedScrollSnap());

	const onInit = (event: CustomEvent<EmblaCarouselType>) => {
		emblaApi = event.detail;

		setupSnaps(emblaApi);
		setActiveSnap(emblaApi);

		emblaApi.on('reInit', setupSnaps);
		emblaApi.on('reInit', setActiveSnap);
		emblaApi.on('select', setActiveSnap);
	};

	// style related vars

	let availableWidth = $state(0);
	let activeSnapDisplayValue = $derived(selectedSnap + 1);
</script>

<div class="flex items-center flex-col gap-4" bind:clientWidth={availableWidth}>
	<div class="relative w-full pt-[75%] shadow-lg">
		<div class="embla top-0 bottom-0 right-0 left-0 absolute">
			<div
				class="h-full overflow-hidden"
				onemblaInit={onInit}
				use:useEmblaCarousel={{
					options,
					plugins: []
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
	</div>
	<div class="flex gap-2 items-center">
		<button class="btn btn-circle btn-outline btn-info mr-4 btn-sm shrink-0" onclick={scrollPrev}>
			<ChevronLeft size="1.2rem" />
		</button>

		{#if availableWidth - 112 > 50 * scrollSnaps.length}
			{#each scrollSnaps as snap, i (snap)}
				<button
					class={`btn ${i === selectedSnap ? 'bg-accent/80 border-accent/80 text-base-200' : 'btn-info btn-outline'}`}
					onclick={() => scrollTo(i)}
					aria-label={`Go to page ${i + 1} of 1862 rulebook`}
				>
					{i + 1}
				</button>
			{/each}
		{:else}
			<div class="flex items-center gap-2 text-info">
				<input
					type="number"
					class="input input-sm w-fit focus:outline-0 focus:border-secondary hover:bg-neutral/5"
					bind:value={activeSnapDisplayValue}
					onchange={(e) => scrollTo(Number(e.currentTarget.value) - 1)}
					min="1"
					max={images.length}
				/>
				<Slash size="1.3rem" class="shrink-0 -rotate-20" />
				<span>{images.length}</span>
			</div>
		{/if}

		<button class="btn btn-circle btn-outline btn-info ml-4 btn-sm shrink-0" onclick={scrollNext}>
			<ChevronRight size="1.2rem" />
		</button>
	</div>
</div>

<style>
	.embla {
		--slide-size: 100%;
		--slide-spacing: 0;
	}
</style>
