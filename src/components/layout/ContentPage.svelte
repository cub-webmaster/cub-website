<script lang="ts">
	import { resolve } from '$app/paths';
	import Breadcrumb from '../common/Breadcrumb.svelte';
	import Header from '$components/layout/Header.svelte';
	import { generateClassString } from '$lib/util';
	import { Map } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { Section } from '$data/navigation.svelte.js';

	const {
		pageData,
		children,
		pageHeadings,
		section
	}: {
		pageData: { label: string; subsection: string };
		children: Snippet;
		pageHeadings: { label: string; id: string }[];
		section: Section;
	} = $props();

	// style stuff

	const sideNavItemBase = 'text-sm p-2';
	const sideNavLinksHover = 'hover:bg-neutral/10 text-neutral/80';
	const sideNavHeadings = 'font-semibold hover:bg-neutral/10';
</script>

<Header title={pageData.label} />

<div class="px-8 md:px-12 py-8 w-full">
	<Breadcrumb
		parentLink={resolve(section.route)}
		parentLabel={section.label}
		pageLabel={pageData.label}
	/>
	<div class="grid md:grid-cols-[16rem_auto] gap-4 mt-4">
		<div class="sticky top-24 hidden md:block shadow pb-4">
			<div class="p-4 bg-info text-base-300 font-semibold mb-4 flex gap-2">
				<Map />Section Navigation
			</div>
			<div>
				<ul class="menu menu-sm bg-base-100 w-full p-0 [&_li>*]:rounded-none pr-4">
					<li>
						<div class="py-0 pr-0 flex hover:bg-transparent">
							<a
								class={generateClassString(sideNavItemBase, 'grow', sideNavLinksHover)}
								href={resolve(section.route)}>{section.label}</a
							>
						</div>
						<ul>
							{#each section.children as sub (sub.slug)}
								{#if sub.slug === pageData.subsection}
									<li>
										<span
											class={generateClassString(
												sideNavItemBase,
												'bg-base-300',
												'text-info',
												'font-semibold'
											)}>{sub.label}</span
										>
										<ul>
											{#each pageHeadings as heading (heading.id)}
												<li class={generateClassString(sideNavItemBase, sideNavHeadings)}>
													<a class="text-sm p-0 hover:bg-transparent" href={`#${heading.id}`}
														>{heading.label}</a
													>
												</li>
											{/each}
										</ul>
									</li>
								{:else}
									<li class={generateClassString(sideNavItemBase, sideNavLinksHover)}>
										<a
											class="text-sm p-0 hover:bg-transparent"
											href={resolve(`${section.route}/${sub.slug}`)}>{sub.label}</a
										>
									</li>
								{/if}
							{/each}
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div>
			{@render children()}
		</div>
	</div>
</div>
