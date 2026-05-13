<script lang="ts">
	import { page } from '$app/state';
	import Header from '$components/layout/Header.svelte';
	import { CircleX } from '@lucide/svelte';
</script>

<Header title="Error">
	{#snippet override()}
		<div></div>
	{/snippet}
</Header>

<div class="w-full h-full flex flex-col gap-4 justify-center items-center absolute top-0 bottom-0">
	<div role="alert" class="alert alert-vertical bg-base-300 p-10">
		<div class="flex text-2xl text-bold text-accent/80 items-center gap-2">
			<CircleX />Error!
		</div>
		<div>
			{#if page.status === 404}
				<div class="text-7xl sm:text-9xl text-semibold">404</div>
				<div class="text-lg">Sorry, we couldn't find that page.</div>
			{:else}
				<div class="text-7xl sm:text-9xl text-semibold">500</div>
				<div class="text-lg">Sorry, something went wrong.</div>
			{/if}
		</div>
	</div>
</div>
