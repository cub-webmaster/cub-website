import { subsectionPageLoadFunction } from '$lib/util';
import { membersSection } from '$data/navigation';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) =>
	subsectionPageLoadFunction(membersSection, params.subsection);
