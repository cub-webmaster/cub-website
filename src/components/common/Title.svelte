<script lang="ts">
	import { generateClassString } from '$lib/util';

	let {
		text,
		sizes,
		softShadow = false,
		position = 'center',
		color = 'text-base-200',
		animate = true
	}: {
		text: string;
		sizes: string[];
		softShadow?: boolean;
		position?: 'center' | 'left';
		color?: 'text-base-100' | 'text-base-200' | 'text-base-300';
		animate?: boolean;
	} = $props();

	// style stuff
	const titleTextClasses = $derived([
		color,
		'font-bold',
		'text-shadow-[0_0_2rem]',
		'font-[DM_Serif_Display]',
		'absolute',
		'text-center',
		'text-nowrap',
		...(softShadow
			? ['md:text-shadow-neutral/50', 'text-shadow-neutral/20']
			: ['text-shadow-neutral']),
		...(position === 'center'
			? ['left-1/2', '-translate-x-1/2', 'bottom-2/5']
			: ['bottom-3/10', 'md:left-16', 'left-8'])
	]);
</script>

<span class={generateClassString(...titleTextClasses, ...sizes)} class:slide-in={animate}>
	{text}
</span>

<style>
	@keyframes slideInUp {
		from {
			transform: translateY(100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.slide-in {
		animation: slideInUp 1s ease-out; /* remove infinite */
	}
</style>
