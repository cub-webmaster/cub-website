import { subsectionPageLoadFunction } from '$lib/util';
import { joinSection } from '$data/navigation.svelte';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) =>
	subsectionPageLoadFunction(joinSection, params.subsection);
