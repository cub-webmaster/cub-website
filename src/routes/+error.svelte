<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Link from '$components/common/Link.svelte';
	import Header from '$components/layout/Header.svelte';
	import CircleX from '@iconify-svelte/lucide/circle-x';
</script>

<Header title="Error" />

<div class="top-0 bottom-0 w-full flex justify-center items-center px-12 absolute">
	<div role="alert" class="alert border-accent alert-vertical bg-base-200">
		<CircleX class="text-accent shrink-0" height="3rem" />
		<div>
			<h3 class="font-bold text-lg">
				Oops! {page.status === 404 ? "Where's that page gone?" : 'Something went wrong.'}
			</h3>
			<div class="text-sm text-center lg:text-base">
				{#if page.status === 404}
					Sorry we couldn't find what you were looking for. Go <Link
						href={resolve('/')}
						label="home"
						external={false}
					/> instead?
				{:else}
					Sorry, we're struggling to do that at the moment. Go <Link
						href={resolve('/')}
						label="home"
						external={false}
					/> ?
				{/if}
			</div>
		</div>
	</div>
</div>
