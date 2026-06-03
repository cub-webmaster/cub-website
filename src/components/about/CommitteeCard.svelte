<script lang="ts">
	import genericImage from '$lib/assets/img/generic.jpg';
	import CircleChevronRight from '@iconify-svelte/lucide/circle-chevron-right';

	let height = $state(0);
	const {
		image,
		position,
		name,
		email,
		college
	}: { image?: string; position: string; name: string; email: string; college: string } = $props();
</script>

<div class="shadow h-full bg-base-200 border-primary border">
	<div class="w-full pt-[50%] relative">
		<img
			class="absolute top-0 bottom-0 right-0 left-0 fit-cover"
			src={image ?? genericImage}
			alt={`Image of current ${position}`}
			bind:clientHeight={height}
		/>
	</div>
	<div class="mt-[-50%]">
		<div
			class="w-full py-2 px-4 bg-primary font-semibold text-lg text-neutral text-left"
			style:margin-top={`${height}px`}
		>
			{position}
		</div>
		<div class="p-4 flex flex-col gap-4">
			<div>
				<div class="flex gap-2 items-center text-neutral">
					<CircleChevronRight height="1rem" width="1rem" class="text-accent/80" />{name}
				</div>
				<div class="text-sm text-neutral/70 text-left">College: {college}</div>
			</div>

			<a class="btn btn-info btn-outline btn-sm" href={`mailto:${email}`} rel="external">Contact</a>
		</div>
	</div>
</div>
