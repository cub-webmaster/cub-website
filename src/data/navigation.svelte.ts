import { resolve } from '$app/paths';
import type { ResolvedPathname } from '$app/types';
import type { Component } from 'svelte';
import {
	Sparkle,
	BicepsFlexed,
	GraduationCap,
	BookMarked,
	BowArrow,
	UsersRound,
	Dumbbell,
	PartyPopper,
	Award,
	Flag,
	Transgender
} from '@lucide/svelte';
import links from './links';

export interface InternalNav {
	route: ResolvedPathname;
	label: string;
	children?: InternalNav[];
	external: false;
}

export interface ExternalNav {
	link: string;
	label: string;
	external: true;
}

type NavbarItem = InternalNav | ExternalNav;

export interface Subsection {
	slug: string;
	label: string;
	desc: string;
	icon: Component;
}

export interface Section {
	route: RoutesWithChildren;
	label: string;
	children: Subsection[];
}

export type RoutesWithChildren = '/join' | '/about' | '/members';

export const joinSection: Section = {
	route: '/join',
	label: 'Join',
	children: [
		{
			slug: 'beginners',
			label: 'Beginners',
			desc: "For those completely new to archery and would need instruction on safety and technique from ground up. Learn more about our beginners' course and everything else you need to know to get started!",
			icon: Sparkle
		},
		{
			slug: 'experienced',
			label: 'Experienced Archers',
			desc: 'Are you a long time archer that just arrived at Cambridge? Or maybe looking to dust off your old archery kit? Read more on how to join as an experienced archer.',
			icon: BicepsFlexed
		},
		{
			slug: 'staff-alum',
			label: 'Staff & Alumni',
			desc: 'We accept staff members of the university and allow our members to stay affiliated beyond graduation, though the process is slightly different from our student members. See the details here.',
			icon: GraduationCap
		},
		{
			slug: 'trans',
			label: 'Trans & Non-binary Archers',
			desc: 'CUB welcomes everyone regardless of gender and/or sexuality. However, our governing bodies still have many issues regarding the inclusion of trans and non-binary archers. Learn what this might mean for you before starting the sport.',
			icon: Transgender
		}
	]
};

export const aboutSection: Section = {
	route: '/about',
	label: 'About',
	children: [
		{
			slug: 'us',
			label: 'Who We Are',
			desc: "Cambridge University Bowmen has been is the university's archery club that has been around for well over 70 years. Learn more about the club and its history here.",
			icon: BowArrow
		},
		{
			slug: 'committee',
			label: 'Committee',
			desc: 'The CUB committee is always working to maintain and improve the running of the club! Curious about us? Click here to find out more.',
			icon: UsersRound
		},
		{
			slug: 'docs',
			label: 'Important Documents',
			desc: 'Need to reference some of our official documents? Find everything from our constitution to data protection declaration here.',
			icon: BookMarked
		}
	]
};

export const membersSection: Section = {
	route: '/members',
	label: 'Members',
	children: [
		{
			slug: 'training',
			label: 'Training Sessions',
			desc: 'Looking for our training schedule? Find up-to-date information on training, coaching and everything related here.',
			icon: Dumbbell
		},
		{
			slug: 'awards',
			label: 'Awards',
			desc: "Badges and awards help mark the progress in an archer's journey of continuous practice and self-improvement. See what you might be eligible for here!",
			icon: Award
		},
		{
			slug: 'tournaments',
			label: 'Regular Tournaments',
			desc: "CUB takes part in many competitions regularly throughout the year. Start here if you're interested in competing and want to know more.",
			icon: Flag
		},
		{
			slug: 'socials',
			label: 'Social Events',
			desc: 'We work hard during practice, so we need to play hard as well! Updates on social events can be found here.',
			icon: PartyPopper
		}
	]
};

function extractRoutes(section: Section): InternalNav {
	return {
		route: resolve(section.route),
		label: section.label,
		children: section.children.map(({ slug, label }) => {
			return { route: resolve(`${section.route}/${slug}`), label, external: false };
		}),
		external: false
	};
}

export const navItems: NavbarItem[] = [
	extractRoutes(joinSection),
	extractRoutes(membersSection),
	extractRoutes(aboutSection),
	{
		route: resolve('/resources'),
		label: 'Resources',
		external: false
	},
	{
		link: links.donate.url,
		label: 'Donate',
		external: true
	}
];
