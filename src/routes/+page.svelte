<script lang="ts">
	import { homeImages } from '$data/home/carouselImages';
	import Carousel from '$components/Carousel.svelte';
	import "../app.css"
</script>

<section class="hero">
	<Carousel images={homeImages} />
</section>
