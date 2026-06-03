<script lang="ts">
	import { resolve } from '$app/paths';
	import Container from '$components/layout/Container.svelte';
	import Header from '$components/layout/Header.svelte';

	import { resources } from '$data/resources/resources';
	import { Search } from '@lucide/svelte';
	import PageHeading from '$components/layout/PageHeading.svelte';
	import type { ResourceCategory } from '$data/resources/types';
	import ResourceCard from '$components/resources/ResourceCard.svelte';
	import SideMenuDropdown from '$components/resources/SideMenuDropdown.svelte';
	import { page } from '$app/state';
	import { browser } from '$app/environment';

	let searchString = $state(browser ? (page.url.searchParams.get('search') ?? '') : '');

	function searchResource(searchString: string, resources: ResourceCategory[]): ResourceCategory[] {
		const search = searchString.toLowerCase();

		return resources
			.map((category) => {
				return {
					...category,
					sections: category.title.toLowerCase().includes(search)
						? category.sections
						: category.sections
								.map((section) => {
									return {
										...section,
										items: section.title.toLowerCase().includes(search)
											? section.items
											: section.items.filter(({ title, info }) =>
													[title, ...(info ?? [])].join('\n').toLowerCase().includes(search)
												)
									};
								})
								.filter((section) => section.items.length)
				};
			})
			.filter((category) => category.sections.length);
	}

	const filteredResources = $derived(searchResource(searchString, resources));
</script>

{#snippet searchInput()}
	<label
		class="input border-info [&:has(>:focus)]:outline-0 [&:has(>:focus)]:border-secondary hover:bg-neutral/5 [&:has(>:focus)]:[&_.search-icon]:text-secondary"
	>
		<Search class="search-icon text-info" />
		<input type="text" placeholder="Search" bind:value={searchString} />
	</label>
{/snippet}
<Header title="Resources" />
<div class="flex justify-center">
	<div class="px-8 md:px-12 py-8 w-full max-w-300">
		<div class="breadcrumbs text-sm">
			<ul>
				<li><a class="link-secondary" href={resolve('/')}><b>Home</b></a></li>
				<li class="text-info"><b>Resources</b></li>
			</ul>
		</div>
		<div class="grid sm:grid-cols-[16rem_auto] gap-4 mt-4">
			<div class="sticky top-24 hidden sm:block pb-4 h-fit">
				<div class="mb-6">
					{@render searchInput()}
				</div>

				<div>
					<ul class="menu menu-sm bg-base-100 w-full p-0 [&_li>*]:rounded-none pr-4">
						{#each filteredResources as category, i (i)}
							<SideMenuDropdown {category} />
						{/each}
					</ul>
				</div>
			</div>

			<Container horizontalPadding="px-0 md:pl-8">
				<div class="mb-6 sm:hidden">
					{@render searchInput()}
				</div>
				{#each filteredResources as category, i (i)}
					<PageHeading text={category.title} id={category.id} icon={category.icon} />
					<div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
						{#each category.sections as section, j (j)}
							<ResourceCard {section} parentId={category.id} />
						{/each}
					</div>
				{/each}
			</Container>
		</div>
	</div>
</div>
