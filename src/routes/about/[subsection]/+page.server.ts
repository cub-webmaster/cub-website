import { subsectionPageLoadFunction } from '$lib/util';
import { aboutSection } from '$data/navigation.svelte';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) =>
	subsectionPageLoadFunction(aboutSection, params.subsection);
