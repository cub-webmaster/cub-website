import links from '$data/links';
import HeartHandshake from '@iconify-svelte/lucide/heart-handshake';
import BowArrow from '@iconify-svelte/lucide/bow-arrow';
import Flag from '@iconify-svelte/lucide/flag';
import Archive from '@iconify-svelte/lucide/archive';
import type { ResourceCategory } from './types';
import etiquetteDoc from '$lib/assets/docs/Etiquette Guidelines.pdf';
import welfareDoc from '$lib/assets/docs/Welfare Policy.pdf';
import riskDoc from '$lib/assets/docs/Risk Assessment.pdf';
import safetyDoc from '$lib/assets/docs/Safety Statement.pdf';
import rulesDoc from '$lib/assets/docs/AGB_rules_of_shooting_0125.pdf';
import { fees } from '$data/join/fees';
import { resolve } from '$app/paths';

export const resources: ResourceCategory[] = [
	{
		title: 'Shooting',
		id: 'shooting',
		icon: BowArrow,
		sections: [
			{
				id: 'general',
				title: 'General',
				items: [
					{
						title: 'Etiquette and rules of shooting',
						url: etiquetteDoc,
						external: true
					},
					{
						title: 'Sessions signup',
						url: links.signup.url,
						external: true,
						info: [
							"Only open to **full members** (i.e. completed beginners' course/induction for experienced archers",
							'Note that you will need to indicate which club bow you intend (if any) to use to ensure availability'
						]
					},
					{
						title: 'Fees (current academic year)',
						info: [
							`Students: £${fees.student}`,
							`Non-students: £${fees['non-student']}`,
							`Beginners' course: £${fees.beginner}`
						]
					}
				]
			},
			{
				id: 'equipment',
				title: 'Equipment',
				items: [
					{
						title: 'Rental Scheme',
						url: resolve('/members/equipment#rental'),
						external: false
					},
					{
						title: 'Care Resources'
					},
					{
						title: 'Clickers Archery',
						url: links.clickers.url,
						external: true,
						info: [
							'Archery equipment shop at Norwich with a long-time relationship with CUB',
							'Recommended for in-person shopping and bow fitting'
						]
					},
					{
						title: 'Merlin Archery',
						url: links.merlin.url,
						external: true,
						info: ['Archery equipment shop with a great online catalogue']
					}
				]
			},
			{
				id: 'training',
				title: 'Training aids',
				items: [
					{
						title: 'Warm-ups',
						url: '',
						external: true
					},
					{
						title: 'Exercises'
					}
				]
			},
			{
				title: 'Relevant Governing Bodies',
				id: 'gov',
				items: [
					{
						title: 'Archery GB (AGB)',
						url: links.agb.url,
						external: true
					},
					{
						title: 'World Archery',
						url: links.world_archery.url,
						external: true
					},
					{
						title: 'Cambridgeshire Archery Association (CAA)',
						url: links.caa.url,
						external: true
					},
					{
						title: 'Southern Counties Archery Society (SCAS)',
						url: links.scas.url,
						external: true
					},
					{
						title: 'Archery England (formerly EAF)',
						url: links.archery_england.url,
						external: true
					}
				]
			}
		]
	},
	{
		icon: Flag,
		title: 'Competitions and Records',
		id: 'comps',
		sections: [
			{
				id: 'recurring',
				title: 'Recurring Competitions',
				items: [
					{
						title: 'BUCS',
						url: links.bucs.url,
						external: true,
						info: [
							'BUCS archery hosts both Indoor and Outdoor Championships as the main student archery competition in the UK',
							'Archers are **required to acquire qualifying scores at an eligible competition/target day prior to registration** in order to participate',
							'Indoor qualifiers open for registration in late Michaelmas - those interested should talk to the committee about getting a qualifying score ASAP'
						]
					},
					{
						title: 'TOUCAN',
						url: links.toucan.url,
						external: true,
						info: [
							'The TOUCAN league (formerly BUTTS league), consists of many university archery clubs across England',
							'Indoor season consists of 3 league legs across Michaelmas and Lent, with **Leg 3 usually hosted by CUB**, followed by the Indoor Championship (and a Ball afterwards!)',
							'There is usually also an Outdoor Championship in summer'
						]
					},
					{
						title: 'Varsity',
						info: [
							'The **annual match against Oxford** is a highlight of the outdoor season',
							'Our main team usually consists of 8 members (4 novices and 4 experienced archers), but other members are welcomed to participate anyway. All it means is your score won\'t count towards our final result against "the other place"'
						]
					}
				]
			},
			{
				title: 'Rounds & Records',
				id: 'rounds-records',
				items: [
					{
						title: 'Rounds',
						info: []
					},
					{
						title: 'Club records',
						external: true,
						url: links.records_sheet.url
					}
				]
			}
		]
	},
	{
		icon: HeartHandshake,
		title: 'Welfare',
		id: 'welfare',
		sections: [
			{
				id: 'general',
				title: 'General',
				items: [
					{
						title: 'CUB Welfare Policy',
						url: welfareDoc,
						external: true
					},
					{
						title: 'Useful contacts',
						info: [
							`Welfare Officer: [${links.welfare_email.url}](mailto:${links.welfare_email.url})`,
							`Uni Sports Service Welfare: [${links.uni_sports_welfare.url}](mailto:${links.uni_sports_welfare.url})`,
							`Safety Officer: [${links.safety_email.url}](mailto:${links.safety_email.url})`
						]
					}
				]
			},
			{
				id: 'safety',
				title: 'Safety',
				items: [
					{
						title: 'CUB Annual Risk Assessment',
						external: true,
						url: riskDoc
					},
					{
						title: 'CUB Safety Statement',
						external: true,
						url: safetyDoc
					},
					{
						title: 'AGB Rules of Shooting',
						external: true,
						url: rulesDoc,
						info: [
							'This document contains all details about range safety set out by AGB, and is essential for anyone training to be range captain'
						]
					}
				]
			}
		]
	},
	{
		title: 'Archives',
		id: 'archives',
		icon: Archive,
		sections: [
			{
				title: 'Blogs and general records',
				id: 'general',
				items: [
					{
						title: 'Archive of old blog posts',
						url: links.blogs_archive.url,
						external: true,
						info: [
							'Our old website featured regular blog posts highlighting important club events such as competitions and annual dinners',
							'Unfortunately, this stopped being updated around the time of COVID disruptions and we have since moved to social media for similar activites',
							'This document is a record of existing blog posts as of the creation of this website'
						]
					},
					{
						title: 'Relevant articles',
						url: links.articles_archive.url,
						external: true,
						info: [
							'A record of known news articles that features the club or is written by a club member on the sport'
						]
					},
					{
						title: 'Photos of past events',
						url: '',
						external: true,
						info: ['Look here for club photos from before the current academic year']
					}
				]
			},

			{
				title: 'Administrative records',
				id: 'admin',
				items: [
					{
						title: 'Past Meeting Minutes',
						url: links.old_minutes_folder.url,
						external: true,
						info: [
							'We have a complete record of AGM minutes since 2013',
							'There are also some committee meeting minutes from the past decade or so'
						]
					},
					{
						title: 'Record of Past Committee Members',
						url: links.past_committee.url,
						external: true
					},
					{
						title: 'List of Purple Badge Holders',
						url: links.purple_badge_record.url,
						external: true,
						info: [
							'The CUB purple badge awards is one of the highest recognitions - awarded only to members who have made significant contributions to the club as well as the sport',
							'Purple badge holders are granted **lifetime membership** of the club and are welcomed to come back and join our activites at any point',
							"The full list of purple badge holders since the establishment of the award is recorded alongside a brief recount of each recipient's contributions to CUB"
						]
					}
				]
			},
			{
				title: 'Competitions',
				id: 'comps',
				items: [
					{
						title: 'Historical Varsity Results',
						url: links.historical_varsity.url,
						external: true,
						info: [
							'Records of Varsity results since the first Varsity archery match, with score breakdowns where available'
						]
					},
					{
						title: 'Historical Cuppers Results',
						url: links.historical_cuppers.url,
						external: true,
						info: ['Records of our annual inter-college match results and winning team members']
					}
				]
			}
		]
	}
];
