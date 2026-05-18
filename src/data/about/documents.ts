import constitution from '$lib/assets/docs/constitution.pdf';
import privacy from '$lib/assets/docs/Privacy Notice Statement.pdf';
import social from '$lib/assets/docs/Social_Media_Policy.pdf';
import risk from '$lib/assets/docs/Risk Assessment.pdf';
import safety from '$lib/assets/docs/Safety Statement.pdf';
import welfare from '$lib/assets/docs/Welfare Policy.pdf';
import safeguarding from '$lib/assets/docs/AGB_safeguarding_children_0125.pdf';
import cubcode from '$lib/assets/docs/Code of Conduct 2024-25.pdf';
import etiquette from '$lib/assets/docs/Etiquette Guidelines.pdf';
import rules from '$lib/assets/docs/AGB_rules_of_shooting_0125.pdf';
import agbcode from '$lib/assets/docs/AGB_code_of_conduct.pdf';
import admin from '$lib/assets/docs/AGB_shooting_admin_procedures_0125.pdf';
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
