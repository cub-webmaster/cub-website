import { resolve } from '$app/paths';
import type { ResolvedPathname } from '$app/types';
import Sparkle from '@iconify-svelte/lucide/sparkle';
import BowArrow from '@iconify-svelte/lucide/bow-arrow';
import Dumbbell from '@iconify-svelte/lucide/dumbbell';
import type { Icon } from '$lib/util';

const landingCardsContent: {
	title: string;
	icon: Icon;
	items: { text: string; href: ResolvedPathname }[];
}[] = [
	{
		title: 'Join',
		icon: Sparkle,
		items: [
			{
				text: 'As a Beginner',
				href: resolve('/join/beginners')
			},
			{
				text: 'As an Experienced Archer',
				href: resolve('/join/experienced')
			},
			{
				text: 'As a University Staff/Alumni',
				href: resolve('/join/staff-alum')
			}
		]
	},
	{
		title: 'Train',
		icon: Dumbbell,
		items: [
			{
				text: 'See Training Schedule',
				href: resolve('/members/training#schedule')
			},
			{
				text: 'Training Resources',
				href: resolve('/resources#training-aids')
			},
			{
				text: 'Equipment Help',
				href: resolve('/members/equipment')
			}
		]
	},
	{
		title: 'Compete',
		icon: BowArrow,
		items: [
			{
				text: 'Recurring Competitions',
				href: resolve('/members/tournaments#recurring')
			},
			{
				text: 'Awards and Badges',
				href: resolve('/members/awards')
			},
			{
				text: 'Club Records',
				href: resolve('/resources#records')
			}
		]
	}
];

export default landingCardsContent;
