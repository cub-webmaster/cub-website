<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { colorTransitionClasses, generateClassString } from '$lib/util';
	import { ChevronDown } from '@lucide/svelte';
	import { page } from '$app/state';
	import { navItems } from '$data/navigation.svelte';
	import { onMount } from 'svelte';
	import logo from '$lib/assets/img/logo.png';

	let { headerHeight, showBrand = true }: { headerHeight?: number; showBrand?: boolean } = $props();
	let scrollY = $state(0);
	let mounted = $state(false);
	let navbarHeight = $state(0);

	onMount(() => {
		mounted = true;
	});

	let transparentMode = $derived(
		!mounted || (headerHeight && scrollY < headerHeight - navbarHeight)
	);

	// style vars

	const navbarZindex = 'z-100';

	const hoverState = [
		'hover:bg-accent',
		'hover:text-base-200',
		'focus:bg-accent',
		'focus:text-base-200',
		...colorTransitionClasses
	];

	const dropdownItem = ['py-2', 'px-4', 'w-full'];

	const colors = (route?: ResolvedPathname, dropdown: boolean = false, main: boolean = false) => {
		if (dropdown)
			return route === page.route.id
				? ['bg-base-300', 'text-neutral']
				: ['bg-base-100', 'text-neutral'];

		const active = route && page.route.id?.startsWith(route, 0);
		if (transparentMode) return ['bg-transparent', active ? 'text-info' : 'text-base-300'];

		return active
			? ['bg-info', 'text-base-200']
			: [main ? 'bg-primary' : 'bg-transparent', 'text-neutral'];
	};

	let activeDropdown: number | null = $state(null);

	let mobileMenuItemDropped: Record<string, boolean> = $state(
		Object.fromEntries(
			navItems
				.filter((item) => !item.external)
				.filter((item) => item.children?.length)
				.map(({ route }) => [route, true])
		)
	);
</script>

<svelte:window bind:scrollY />

<div
	class={`navbar h-8 py-0 md:px-8 px-0 flex items-center justify-between sticky top-0 ${generateClassString(...colors(undefined, false, true), ...colorTransitionClasses, navbarZindex)}`}
	class:shadow-sm={!transparentMode}
	bind:clientHeight={navbarHeight}
>
	{#if showBrand || !transparentMode}
		<a href={resolve('/')} class="flex justify-center items-center lg:gap-4 gap-2 px-4 h-full">
			<img src={logo} alt="CUB logo" class="h-8" />
			<span class="lg:text-l text-sm uppercase font-semibold">Cambridge University Bowmen</span>
		</a>
	{/if}
	<div class="h-full flex items-center justify-end grow">
		<ul class="menu menu-horizontal px-4 h-full hidden lg:flex py-0">
			{#each navItems as item, i (i)}
				<li class="h-full">
					<div
						class={generateClassString(
							...hoverState,
							...(activeDropdown === i
								? ['bg-accent', 'text-base-200']
								: colors(item.external ? undefined : item.route)),
							'h-full',
							'flex',
							'items-center',
							'rounded-none',
							'gap-1',
							'py-0'
						)}
					>
						{#if item.external}
							<a href={item.link} rel="external" target="_blank" class="font-semibold"
								>{item.label}</a
							>
						{:else}
							<a href={item.route} class="font-semibold">{item.label}</a>
							{#if item.children?.length}
								<div class="dropdown h-full dropdown-end">
									<div
										tabindex="0"
										role="button"
										class={generateClassString('h-full', 'flex', 'items-center')}
										onfocus={() => (activeDropdown = i)}
										onblur={() => (activeDropdown = null)}
									>
										<ChevronDown size="1rem" strokeWidth={2} />
									</div>
									<ul
										tabindex="-1"
										class={`menu menu-sm dropdown-content bg-base-100 w-52 p-0 shadow [&_li>*]:rounded-none translate-x-3 -translate-y-2 ${navbarZindex}`}
									>
										{#each item.children as child (child.route)}
											<li>
												<a
													class={generateClassString(
														...dropdownItem,
														...hoverState,
														...colors(child.route, true),
														'text-neutral'
													)}
													href={child.route}>{child.label}</a
												>
											</li>
										{/each}
									</ul>
								</div>
							{/if}
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
				class={`${navbarZindex} menu menu-sm dropdown-content bg-base-100 w-52 p-0 shadow [&_li>*]:rounded-none`}
			>
				{#each navItems as item, i (i)}
					<li>
						<button
							class={generateClassString(
								...dropdownItem,
								...colors(item.external ? undefined : item.route, true),
								...hoverState,
								'auto-cols-[auto_max-content]',
								!item.external && item.children?.length ? 'menu-dropdown-toggle' : ''
							)}
							class:menu-dropdown-show={!item.external && mobileMenuItemDropped[item.route]}
							onclick={() => {
								if (!item.external && item.children?.length) {
									mobileMenuItemDropped[item.route] = !mobileMenuItemDropped[item.route];
								}
							}}
						>
							{#if item.external}
								<a href={item.link} rel="external" target="_blank" class="mr-4">{item.label}</a>
							{:else}
								<a href={item.route} class="mr-4">{item.label}</a>
							{/if}
						</button>

						{#if !item.external && item.children?.length}
							<ul
								class={`pl-2 bg-base-100 py-0 pr-0 ${navbarZindex} menu-dropdown`}
								class:menu-dropdown-show={mobileMenuItemDropped[item.route]}
							>
								{#each item.children as child (child.route)}
									<li>
										<a
											class={generateClassString(
												...dropdownItem,
												...colors(child.route, true),
												...hoverState
											)}
											href={child.route}>{child.label}</a
										>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
