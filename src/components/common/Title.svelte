<script lang="ts">
	import { generateClassString } from '$lib/util';

	let { text, sizes }: { text: string; sizes: string[] } = $props();

	// style stuff
	const titleTextClasses = [
		'text-base-200',
		'font-bold',
		'text-shadow-[0_0_20px]',
		'text-shadow-neutral',
		'font-[DM_Serif_Display]',
		'absolute',
		'bottom-2/5',
		'left-1/2',
		'-translate-x-1/2',
		'text-center',
		'text-nowrap',
		'slide-in'
	];
</script>

<span class={generateClassString(...titleTextClasses, ...sizes)}> {text} </span>

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
