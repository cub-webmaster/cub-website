import { resolve } from '$app/paths';
import type { ResolvedPathname } from '$app/types';

interface Faq {
	question: string;
	answer: string;
	related?: {
		link: ResolvedPathname;
		label: string;
	}[];
}

export const landingPageFaqs: Faq[] = [
	{
		question: "Will there be more Beginners' Courses during the year?",
		answer:
			"Regrettably, due to limited resources and manpower we are only able to run the Beginners' Course once a year, during Michaelmas. If you weren't able to join this year we would advise you to try again in the next academic year.",
		related: [
			{
				label: 'Beginners page',
				link: resolve('/join/beginners')
			}
		]
	},
	{
		question: 'Do I need to have my own equipment to join the club?',
		answer:
			'No, we have a collection of wooden club bows available. While mostly meant for beginners, they are open for use by anyone in the club. For more advanced archers, we also have a rental scheme where you can gain access to a more personalised metal bow fitted to you. However, note that we have limited numbers of both, so some members, e.g. novice squad members who needs a bow for competitions, may be given priority when it comes to some club equipment.',
		related: [
			{
				label: 'Beginners page',
				link: resolve('/join/beginners')
			},
			{
				label: 'Rental scheme',
				link: resolve('/members/equipment#rental')
			}
		]
	},
	{
		question: 'Can students of Anglia Ruskin University join CUB?',
		answer:
			"We currently do not have capacity for students of ARU, but would encourage aspiring archers to look into ARU's very own (very active!) archery club instead."
	},
	{
		question: 'I shot with another club before, how do I join?',
		answer:
			"If you have shot with other clubs before and do not need to go through a beginners' course, you can follow the instructions on our Experienced Archers page to join. Note that you might have to edit/manage your AGB affiliation yourself, please follow our guide on AGB membership to change your club there.",
		related: [
			{
				label: 'Experienced Archer page',
				link: resolve('/join/experienced')
			},
			{
				label: 'AGB membership guide',
				link: resolve('/resources#agb-membership')
			}
		]
	},
	{
		question: 'Where do CUB shooting sessions happen? Is it indoor or outdoor?',
		answer:
			'We do both! We shoot at the University Sports Centre in the West Cambridge campus during indoor season (late September onwards) and at the Churchill College Playing Fields during outdoor season (late March onwards).'
	}
];
