import { error } from '@sveltejs/kit';
import { joinSection } from '$data/navigation.svelte';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ params }) => {
    const sub = joinSection.find(({ slug }) => slug === params.subsection)

    if (!sub) error(404)

    return {
        label: sub.label,
        subsection: params.subsection
    }
}