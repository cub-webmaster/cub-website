<script lang="ts">
	import Link from './Link.svelte';

	const { raw }: { raw: string } = $props();

	type richTextPart =
		| { type: 'text'; content: string }
		| { type: 'link'; label: string; link: string }
		| { type: 'bold'; content: string };

	function processRichText(str: string): richTextPart[] {
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

	const parts = $derived(processRichText(raw));
</script>

{#each parts as part, i (i)}
	{#if part.type === 'link'}
		<Link label={part.label} href={part.link} external />
	{:else if part.type === 'bold'}
		<b>{part.content}</b>
	{:else}
		{part.content}
	{/if}
{/each}
