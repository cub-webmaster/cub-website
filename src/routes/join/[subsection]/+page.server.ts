import { subsectionEntryGenerator, subsectionPageLoadFunction } from '$lib/util';
import { joinSection } from '$data/navigation';
import type { PageServerLoad } from './$types';

export const entries = subsectionEntryGenerator(joinSection);
export const load: PageServerLoad = ({ params }) =>
	subsectionPageLoadFunction(joinSection, params.subsection);
