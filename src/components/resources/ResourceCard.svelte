<script lang="ts">
	import Link from '$components/common/Link.svelte';
	import type { ResourceSection } from '$data/resources/types';
	import CircleChevronRight from '@iconify-svelte/lucide/circle-chevron-right';
	import Dot from '@iconify-svelte/lucide/dot';

	const { section, parentId }: { section: ResourceSection; parentId: string } = $props();

	type infoPart =
		| { type: 'text'; content: string }
		| { type: 'link'; label: string; link: string }
		| { type: 'bold'; content: string };

	function processInfoText(str: string): infoPart[] {
		const links: { label: string; link: string }[] = [];
		const bolds: string[] = [];
		const parsed = str
			.replaceAll(/\[([^()[\]]+)\]\(([^()[\]]+)\)/gm, (match, label, link) => {
				const newIndex = links.length;
				links.push({ link, label });
				return `$<LINK>:${newIndex}$`;
			})
			.replaceAll(/\*\*([^()[\]]+)\*\*/gm, (match, bolded) => {
				const newIndex = bolds.length;
				bolds.push(bolded);
				return `$<BOLD>:${newIndex}$`;
			});

		return parsed.split('$').map((part) => {
			const match = part.match(/^<(?<type>LINK|BOLD)>:(?<index>\d+)/);
			if (match?.groups?.type === 'LINK') {
				return {
					type: 'link',
					...links[Number(match.groups.index)]
				};
			} else if (match?.groups?.type === 'BOLD') {
				return {
					type: 'bold',
					content: bolds[Number(match.groups.index)]
				};
			} else {
				return {
					type: 'text',
					content: part
				};
			}
		});
	}
</script>

<div class="shadow h-full bg-base-200 border-primary border" id={`${parentId}-${section.id}`}>
	<div class="w-full py-2 px-4 bg-primary font-semibold text-lg">{section.title}</div>
	<div class="p-4 flex flex-col gap-4">
		{#each section.items as item, k (k)}
			<div>
				<div class="flex gap-2" class:mb-2={item.info?.length}>
					<div class="pt-1">
						<CircleChevronRight height="1rem" class="shrink-0 text-accent/80" />
					</div>

					<!-- A bit stupid but it's for keeping type checker happy -->
					{#if item.external}
						<Link href={item.url} external label={item.title} color="text-info" useIcon />
					{:else if item.url}
						<Link href={item.url} external={false} label={item.title} color="text-info" useIcon />
					{:else}
						<span class="font-semibold text-info">{item.title}</span>
					{/if}
				</div>
				<ul class="flex flex-col gap-1">
					{#each item.info as point, i (i)}
						<li class="text-neutral/80 flex gap-2 items-start">
							<Dot height="1.8rem" class="shrink-0" />
							<div>
								{#each processInfoText(point) as part, j (j)}
									{#if part.type === 'link'}
										<Link label={part.label} href={part.link} external />
									{:else if part.type === 'bold'}
										<b>{part.content}</b>
									{:else}
										{part.content}
									{/if}
								{/each}
							</div>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
