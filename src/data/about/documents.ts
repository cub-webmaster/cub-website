import constitution from '$lib/assets/docs/constitution.pdf';
import privacy from '$lib/assets/docs/privacy-notice-statement.pdf';
import social from '$lib/assets/docs/social-media-policy.pdf';
import risk from '$lib/assets/docs/risk-assessment.pdf';
import safety from '$lib/assets/docs/safety-statement.pdf';
import welfare from '$lib/assets/docs/welfare-policy.pdf';
import safeguarding from '$lib/assets/docs/agb-safeguarding-children.pdf';
import cubcode from '$lib/assets/docs/code-of-conduct.pdf';
import etiquette from '$lib/assets/docs/etiquette-guidelines.pdf';
import rules from '$lib/assets/docs/agb-rule-of-shooting.pdf';
import agbcode from '$lib/assets/docs/agb-code-of-conduct.pdf';
import admin from '$lib/assets/docs/agb-shooting-admin-procedures.pdf';
import links from '$data/links';

type DocCategory = 'core' | 'shooting' | 'data';

export interface Doc {
	name: string;
	file?: string;
	lastUpdated?: Date;
	link?: string;
}

export const documents: Record<DocCategory, Doc[]> = {
	core: [
		{
			name: 'Constitution',
			file: constitution,
			lastUpdated: new Date(2025, 5, 25)
		},
		{
			name: 'Risk Assessment',
			file: risk,
			lastUpdated: new Date(2025, 8, 2)
		},
		{
			name: 'Club Safety Statement',
			file: safety
		},
		{
			name: 'Welfare Policy',
			file: welfare
		},
		{
			name: 'AGB Safeguarding Policy',
			file: safeguarding
		}
	],
	shooting: [
		{
			name: 'CUB Code of Conduct',
			file: cubcode
		},
		{
			name: 'CUB Etiquette Guidelines',
			file: etiquette
		},
		{
			name: 'AGB Rules of Shooting',
			file: rules,
			lastUpdated: new Date(2024, 11, 10)
		},
		{
			name: 'AGB Code of Conduct',
			file: agbcode
		},
		{
			name: 'AGB Shooting Administrative Procedures',
			file: admin
		},
		{
			name: 'World Archery Rulebook',
			link: links.wa_rules.url,
			lastUpdated: new Date(2026, 4, 18)
		}
	],
	data: [
		{
			name: 'Data Protection Statement',
			file: privacy,
			lastUpdated: new Date(2021, 0, 31)
		},
		{
			name: 'Social Media Policy',
			file: social
		}
	]
};
