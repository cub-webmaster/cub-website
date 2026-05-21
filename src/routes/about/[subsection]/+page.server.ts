import { subsectionPageLoadFunction } from '$lib/util';
import { aboutSection } from '$data/navigation';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) =>
	subsectionPageLoadFunction(aboutSection, params.subsection);
