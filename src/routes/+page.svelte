<script lang="ts">
	import { homeImages } from '$data/home/carouselImages';
	import Carousel from '$components/Carousel.svelte';
	import '../app.css';
	import Header from '$components/layout/Header.svelte';
	import JoinAlert from '$components/JoinAlert.svelte';
	import Title from '$components/common/Title.svelte';
	import logo from '$lib/assets/img/logo.png';
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

<JoinAlert />
