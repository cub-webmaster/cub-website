import type { Section } from '$data/navigation';
import { error } from '@sveltejs/kit';

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
