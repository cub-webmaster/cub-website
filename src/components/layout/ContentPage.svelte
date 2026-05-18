<script lang="ts">
	import { resolve } from '$app/paths';
	import Breadcrumb from '../common/Breadcrumb.svelte';
	import Header from '$components/layout/Header.svelte';
	import { generateClassString } from '$lib/util';
	import { Map, TableOfContents } from '@lucide/svelte';
	import { type Snippet } from 'svelte';
	import type { Section } from '$data/navigation.svelte.js';
	import Container from './Container.svelte';
	import { sideNavItemBaseClasses } from '$data/general';

	const {
		pageData,
		children,
		section
	}: {
		pageData: { label: string; subsection: string };
		children: Snippet;
		section: Section;
	} = $props();

	let headings: { label: string; id: string }[] = $state([]);
	let floatingNavBtnWidth = $state(0);

	$effect(() => {
		if (pageData) {
			headings = [...document.querySelectorAll('.heading')].map((node) => {
				return {
					id: node.id,
					label: node.textContent
				};
			});
		}
	});

	// style stuff

	const sideNavLinksHover = 'hover:bg-neutral/10 text-neutral/80';
	const sideNavHeadings = 'font-semibold hover:bg-neutral/10';
</script>

{#snippet tableOfContents()}
	<li>
		<a
			href="#top"
			class={generateClassString(
				sideNavItemBaseClasses,
				'bg-base-300',
				'text-info',
				'font-semibold'
			)}>{pageData.label}</a
		>
		<ul>
			{#each headings as heading (heading.id)}
				<li class={generateClassString(sideNavItemBaseClasses, sideNavHeadings)}>
					<a class="text-sm p-0 hover:bg-transparent" href={`#${heading.id}`}>{heading.label}</a>
				</li>
			{/each}
		</ul>
	</li>
{/snippet}

<Header title={pageData.label} />

<div class="flex justify-center w-full">
	<div class="px-8 md:px-12 py-8 w-full max-w-300">
		<Breadcrumb
			parentLink={resolve(section.route)}
			parentLabel={section.label}
			pageLabel={pageData.label}
		/>

		<div class="collapse collapse-arrow md:hidden sticky top-24 z-10">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title btn btn-info mt-2 drawer-button w-fit shadow-none peer-checked:rounded-b-none border-0"
				bind:clientWidth={floatingNavBtnWidth}
			>
				<TableOfContents size="1rem" />
				Table of Contents
			</div>
			<div class="collapse-content p-0">
				<ul
					class="menu bg-base-200 h-fit p-4 [&_li>*]:rounded-none rounded-b-md border border-info"
					style:width={`${floatingNavBtnWidth}px`}
				>
					{@render tableOfContents()}
				</ul>
			</div>
		</div>

		<div class="grid md:grid-cols-[16rem_auto] gap-4 mt-4">
			<div class="sticky top-24 hidden md:block shadow pb-4 h-fit">
				<div class="p-4 bg-info text-base-300 font-semibold mb-4 flex gap-2">
					<Map />Section Navigation
				</div>
				<div>
					<ul class="menu menu-sm bg-base-100 w-full p-0 [&_li>*]:rounded-none pr-4">
						<li>
							<div class="py-0 pr-0 flex hover:bg-transparent">
								<a
									class={generateClassString(sideNavItemBaseClasses, 'grow', sideNavLinksHover)}
									href={resolve(section.route)}>{section.label}</a
								>
							</div>
							<ul>
								{#each section.children as sub (sub.slug)}
									{#if sub.slug === pageData.subsection}
										{@render tableOfContents()}
									{:else}
										<li class={generateClassString(sideNavItemBaseClasses, sideNavLinksHover)}>
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
			<Container horizontalPadding="px-0 md:pl-8">
				{@render children()}
			</Container>
		</div>
	</div>
</div>
