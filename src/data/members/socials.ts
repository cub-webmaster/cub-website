import { Beer, BottleWine, Dessert, Flag, TreePine, Trophy, Utensils } from '@lucide/svelte';
import type { Component } from 'svelte';

interface SocialEvent {
	name: string;
	desc: string;
	icon: Component;
}

export const annualEvents: SocialEvent[] = [
	{
		icon: TreePine,
		name: 'Christmas Dinner',
		desc: "In a truly Cambridge sense, we generally organise a dinner to celebrate Christmas on the week of November 25 each year. It's usually our first big social of the year so we would love for beginners to join and mingle."
	},
	{
		icon: BottleWine,
		name: 'Annual Dinner',
		desc: 'The highlight of the social calendar is the annual dinner. This is a meal at one of the colleges and provides a chance to dress up and enjoy a fantastic evening. It is always well attended by the club, committee, and often a few alumni.'
	},
	{
		icon: Dessert,
		name: 'Pancake Day',
		desc: 'It is tradition at CUB to celebrate the annual Pancake Tuesday! We may not always do it on the actual day as people tend to be busy, but we do try to organise a pancake gathering with the club on the weekend to socialise.'
	},
	{
		icon: Trophy,
		name: 'Cuppers Barbeque',
		desc: 'In May Week each year, once exams are all over, we have the annual intercollegiate Cuppers tournament which is then followed by a barbeque. This is always great fun, and a nice way to end the year or take little relaxation during the excitement of May Week.'
	}
];

export const miscEvents: SocialEvent[] = [
	{
		icon: Beer,
		name: 'Pub Trips',
		desc: 'Casual pub meetups happen once or twice each term, often after a Friday evening shooting session. These tend to be relatively impromptu and open to all, just tag along the next time you hear of a gathering!'
	},
	{
		icon: Utensils,
		name: 'Formals',
		desc: 'These are essential for any Cambridge society! If you would like to help us organise one at your college please let us know.'
	},
	{
		icon: Flag,
		name: 'Competition Socials',
		desc: "Sometimes after CUB hosts a competition e.g. a TOUCAN regional round or Varsity, we would invite archers from other clubs to join us for a dinner/social. It's a great way to meet archers from other clubs!"
	}
];
