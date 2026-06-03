import { subsectionEntryGenerator, subsectionPageLoadFunction } from '$lib/util';
import { aboutSection } from '$data/navigation';
import type { PageServerLoad } from './$types';

export const entries = subsectionEntryGenerator(aboutSection);
export const load: PageServerLoad = ({ params }) =>
	subsectionPageLoadFunction(aboutSection, params.subsection);
