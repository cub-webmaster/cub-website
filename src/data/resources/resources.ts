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
import waRounds from '$lib/assets/docs/wa-rounds.pdf';
import indoorRounds from '$lib/assets/docs/indoor-rounds-explained.pdf';
import outdoorRounds from '$lib/assets/docs/outdoor-rounds-guide.pdf';
import { committeePositions } from '$data/about/committee';

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
							`Beginners' course: £${fees.beginner} (+ membership)`
						]
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
						title: 'Care Resources',
						info: [
							`Bingham Archers has a very comprehensive guide on equipment care and tuning [here](${links.maintenance_bingham.url})`,
							`Maintenance tools like a fletching jig or string wax can be borrowed from the club, feel free to contact the [Equipment Officer](${committeePositions.equipment.email}) if you have specific inquiries`
						]
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
						info: [
							`The main warm-ups recommended by AGB is listed [here](${links.agb_warmup.url})`,
							`A guide with descriptions on how to do the above exercises can be found [here](${links.cub_warmup.url})`
						]
					},
					{
						title: 'Drills & Specific Physical Training (SPT)',
						info: [
							`SPTs are used by archers around the world for improving their skills outside actual shoots`,
							`A summary of the drills can be found [here](${links.spt_written.url})`,
							`There are also a couple video guides recommended by our members ([vid 1](${links.spt_nusensei.url}), [vid 2](${links.spt_kaminski.url}))`,
							`We also recommended getting a stretchy band or similar tools to safely do drills with ([examples](${links.shop_training_aids.url}))`
						]
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
					}
				]
			},
			{
				title: 'Rounds & Records',
				id: 'rounds-records',
				items: [
					{
						title: 'Round Specifications',
						info: [
							`There are a lot of different rounds under the World Archery umbrella, you can find an excerpt of the WA rulebooks on the rounds pertaining to target archery [here](${waRounds})`,
							`NCAS also made a very useful, comprehensive chart of most common outdoor rounds in table form which you can reference [here](${outdoorRounds})`,
							`If you're looking for more information on indoor rounds beyond the most common Portsmouth Round, see this explainer from Experience Archery [here](${indoorRounds})`
						]
					},
					{
						title: 'Scoring',
						info: [
							`Imperial Scoring, AKA 5-zone scoring, is scored only by each of the colour zones i.e. 9 for gold, 7 for red, 5 for blue and so on`,
							`Metric Scoring, AKA 10-zone scoring, on the other hand uses all 10 rings on the target facee and are scored from 1 to 10`
						]
					},
					{
						title: 'Club records',
						external: true,
						url: links.records_sheet.url,
						info: ['We maintain club records of the highest scorers for each round/category here ']
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
							`Welfare Officer: [${committeePositions.welfare.email}](mailto:${committeePositions.welfare.email})`,
							`Uni Sports Service Welfare: [${links.uni_sports_welfare.url}](mailto:${links.uni_sports_welfare.url})`,
							`Safety Officer: [${committeePositions.safety.email}](mailto:${committeePositions.safety.email})`
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
