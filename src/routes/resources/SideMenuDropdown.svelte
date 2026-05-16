<script lang="ts">
	import { sideNavItemBaseClasses } from '$data/general';
	import type { ResourceCategory } from '$data/resources/types';
	import { generateClassString } from '$lib/util';

	const { category }: { category: ResourceCategory } = $props();
	let dropped = $state(true);
</script>

<li>
	<button
		class={generateClassString(
			sideNavItemBaseClasses,
			'bg-base-300',
			'text-info',
			'font-semibold',
			'menu-dropdown-toggle',
			'flex',
			'hover:bg-info',
			'hover:text-base-200'
		)}
		class:menu-dropdown-show={dropped}
		onclick={() => (dropped = !dropped)}
	>
		<a
			href={`#${category.id}`}
			class="hover:bg-transparent grow mr-4"
			onclick={(e) => e.stopPropagation()}>{category.title}</a
		>
	</button>

	<ul class="menu-dropdown" class:menu-dropdown-show={dropped}>
		{#each category.sections as section, j (j)}
			<a
				href={`#${category.id}-${section.id}`}
				class={generateClassString(
					sideNavItemBaseClasses,
					'flex',
					'items-center',
					'gap-2',
					'hover:bg-neutral/10'
				)}
			>
				{section.title}
				<div class="text-neutral/70">({section.items.length})</div>
			</a>
		{/each}
	</ul>
</li>
