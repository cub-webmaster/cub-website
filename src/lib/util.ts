import type { Section } from '$data/navigation';
import { error } from '@sveltejs/kit';
import Star from '@iconify-svelte/lucide/star';
import type { EntryGenerator } from '../routes/about/[subsection]/$types';

export function generateClassString(...classes: string[]) {
	return classes.join(' ');
}

export const colorTransitionClasses = ['transition-colors', 'duration-300', 'ease-in-out'];

export function subsectionPageLoadFunction(section: Section, subsection: string) {
	const sub = section.children.find(({ slug }) => slug === subsection);

	if (!sub) error(404);

	return {
		label: sub.label,
		subsection: subsection
	};
}

export function subsectionEntryGenerator(section: Section): EntryGenerator {
	return () => section.children.map(({ slug }) => ({ subsection: slug }));
}

export type Icon = typeof Star;
