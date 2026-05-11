<script lang="ts" module>
	export interface NavbarItem {
		route: ResolvedPathname;
		label: string;
		children?: NavbarItem[];
		external?: boolean;
	}
</script>

<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { generateClassString } from '$lib/util';
	import { ChevronDown } from '@lucide/svelte';

	let { navItems }: { navItems: NavbarItem[] } = $props();
	let scrollY = $state(0);

	// style vars
	const hoverState = [
		'hover:bg-accent',
		'hover:text-base-200',
		'focus:bg-accent',
		'focus:text-base-200',
		'transition-colors',
		'duration-300',
		'ease-in-out'
	];

	const dropdownItem = ['py-2', 'px-4', 'w-full'];
</script>

<svelte:window bind:scrollY />

<div
	class="navbar bg-primary shadow-sm h-8 py-0 md:px-8 px-0 flex items-center justify-between sticky top-0 z-100"
>
	<a href={resolve('/')} class="flex justify-center items-center lg:gap-4 gap-2 px-4 h-full"
		><img src="img/logo.png" alt="CUB logo" class="h-8" /><span
			class="lg:text-l text-sm uppercase font-semibold">Cambridge University Bowmen</span
		></a
	>

	<div class="h-full flex items-center justify-end">
		<ul class="menu menu-horizontal px-4 h-full hidden lg:flex py-0">
			{#each navItems as item (item.route)}
				<li class="h-full">
					<div
						class={generateClassString(
							...hoverState,
							'h-full',
							'flex',
							'items-center',
							'rounded-none',
							'gap-1',
							'py-0'
						)}
					>
						<a href={item.route} target={item.external ? '_blank' : ''}>{item.label}</a>
						{#if item.children?.length}
							<div class="dropdown h-full dropdown-end">
								<div
									tabindex="0"
									role="button"
									class={generateClassString('h-full', 'flex', 'items-center')}
								>
									<ChevronDown size="1rem" strokeWidth={2} class="mt-1" />
								</div>
								<ul
									tabindex="-1"
									class="menu menu-sm dropdown-content bg-base-200 z-2 w-52 p-0 shadow [&_li>*]:rounded-none translate-x-3 -translate-y-2"
								>
									{#each item.children as child (child.route)}
										<li>
											<a
												class={generateClassString(...dropdownItem, ...hoverState, 'text-neutral')}
												href={child.route}>{child.label}</a
											>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
		<div class="dropdown h-full dropdown-end">
			<div
				tabindex="0"
				role="button"
				class={generateClassString(
					...hoverState,
					'h-full',
					'px-4',
					'flex',
					'items-center',
					'lg:hidden'
				)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul
				tabindex="-1"
				class="menu menu-sm dropdown-content bg-base-200 z-2 w-52 p-0 shadow [&_li>*]:rounded-none"
			>
				{#each navItems as item (item.route)}
					<li>
						{#if item.children?.length}
							<a class={generateClassString(...dropdownItem, ...hoverState)} href={item.route}
								>{item.label}</a
							>
							<ul class="pl-2 bg-base-100 z-2 py-0 pr-0">
								{#each item.children as child (child.route)}
									<li>
										<a
											class={generateClassString(...dropdownItem, ...hoverState)}
											href={child.route}>{child.label}</a
										>
									</li>
								{/each}
							</ul>
						{:else}
							<a
								class={generateClassString(...dropdownItem, ...hoverState)}
								href={item.route}
								target={item.external ? '_blank' : ''}>{item.label}</a
							>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
