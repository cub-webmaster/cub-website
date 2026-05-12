<script lang="ts">
	import Link from './common/Link.svelte';
	import { beginnerRecruitmentOngoing } from '$data/general';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { Info } from '@lucide/svelte';

	let smallAlertOpen = $state(false);

	onMount(() => (smallAlertOpen = true));
</script>

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

{#snippet button()}
	<a
		class="btn btn-primary flex sm:btn-sm btn-xs"
		href={beginnerRecruitmentOngoing ? resolve('/join/beginners') : resolve('/join/experienced')}
		>Read More</a
	>
{/snippet}

<div role="alert" class="alert alert-horizontal hidden sm:grid">
	<Info class="text-info" />
	<div>
		<h3 class="font-bold">Interested in joining us?</h3>
		<div class="text-xs text-justify">
			{@render mainText()}
		</div>
	</div>

	<div class="flex gap-2">{@render button()}</div>
</div>
<div role="alert" class="collapse bg-base-200 sm:hidden collapse-arrow shadow">
	<input type="checkbox" bind:checked={smallAlertOpen} />
	<div class="flex items-center gap-2 collapse-title">
		<Info class="text-info" />
		<h3 class="font-bold">Interested in joining us?</h3>
	</div>

	<div class="text-xs text-justify col-span-2 flex flex-col gap-4 items-end collapse-content">
		<div class="w-full">{@render mainText()}</div>
		<div>{@render button()}</div>
	</div>
</div>

<style>
	.shadow {
		box-shadow:
			0 3px 0 -2px oklch(100% 0 0 / calc(var(--depth) * 0.08)) inset,
			0 1px
				color-mix(
					in oklab,
					color-mix(in oklab, #000 20%, var(--alert-color, var(--color-base-200)))
						calc(var(--depth) * 20%),
					#0000
				),
			0 4px 3px -2px oklch(0% 0 0 / calc(var(--depth) * 0.08));
	}
</style>
