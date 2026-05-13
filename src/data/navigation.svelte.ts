import { resolve } from '$app/paths';
import type { ResolvedPathname } from '$app/types';
import type { Component } from 'svelte';
import { Sparkle, BicepsFlexed, GraduationCap } from '@lucide/svelte'

interface NavbarItem {
		route: ResolvedPathname;
		label: string;
		children?: NavbarItem[];
		external?: boolean;
	}

export interface Subsection {
    slug: string;
    label: string;
    desc: string;
    icon: Component
}

export type RoutesWithChildren = "/join";

function extractRoutes (subsections: Subsection[], parentRoute: RoutesWithChildren) {
    return subsections.map(({ slug, label }) => { return { route: resolve(`${ parentRoute }/${ slug }`) , label }})
}

export const joinSection: Subsection[] = [
    {
        slug: "beginners",
        label: "Beginners",
        desc: "For those completely new to archery and would need instruction on safety and technique from ground up. Learn more about our beginners' course and everything else you need to know to get started!",
        icon: Sparkle
    },
    {
        slug: "experienced",
        label: "Experienced Archers",
        desc: "Are you a long time archer that just arrived at Cambridge? Or maybe looking to dust off your old archery kit? Read more on how to join as an experienced archer.",
        icon: BicepsFlexed
    },
    {
        slug: "staff-alum",
        label: "Staff & Alumni",
        desc: "We accept staff members of the university and allow our members to stay affiliated beyond graduation, though the process is slightly different from our student members. See the detaiils here.",
        icon: GraduationCap
    },
]

export const navItems: NavbarItem[] = [
    {
        route: resolve('/join'),
        label: 'Join',
        children: extractRoutes(joinSection, "/join")
    },
    {
        route: resolve('/resources'),
        label: 'Resources'
    }
];