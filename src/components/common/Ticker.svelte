<script lang="ts">
	import { generateClassString } from '$lib/util';

	const {
		items,
		backgroundColor,
		direction = 'left',
		textColor = 'text-neutral'
	}: {
		items: string[];
		backgroundColor: string;
		direction?: 'left' | 'right';
		textColor?: string;
		startFromMiddle?: boolean;
	} = $props();

	const scrollerClasses = $derived([
		direction === 'left' ? 'scroll-left' : 'scroll-right',
		'absolute',
		'flex',
		'items-center',
		'justify-around',
		'w-full',
		'min-w-fit',
		'whitespace-nowrap',
		'h-full'
	]);

	const itemClasses = [
		'flex',
		'items-center',
		'gap-x-1',
		'whitespace-nowrap',
		'h-full',
		'uppercase',
		'font-bold',
		'px-8'
	];
</script>

<div
	id="container"
	class={generateClassString(
		backgroundColor,
		'w-full',
		'overflow-hidden',
		'whitespace-nowrap',
		'h-8',
		'relative'
	)}
>
	<div class={generateClassString(...scrollerClasses, backgroundColor)}>
		{#each items as str, i (i)}
			<div class={generateClassString(...itemClasses)}>
				{str}
			</div>
		{/each}
	</div>
	<div
		class={generateClassString(...scrollerClasses, backgroundColor)}
		style:animation-delay="8s"
		style:transform={`translateX(${direction === 'left' ? '' : '-'}100%)`}
	>
		{#each items as str, i (i)}
			<div class={generateClassString(...itemClasses, textColor)}>{str}</div>
		{/each}
	</div>
</div>

<style>
	.scroll-left {
		animation: loop-to-left 16s linear infinite;
	}

	@keyframes loop-to-left {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.scroll-right {
		animation: loop-to-right 16s linear infinite;
	}

	@keyframes loop-to-right {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
</style>
