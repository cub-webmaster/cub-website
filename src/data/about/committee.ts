export type CommitteeType = 'core' | 'welfare' | 'comms' | 'shooting';

type Position = {
	type: CommitteeType;
	title: string;
	email: string;
};

export interface CommitteeMember {
	image?: string;
	name: string;
	college: string;
	position: Position;
}

export const committeeTypeLabels: Record<CommitteeType, string> = {
	core: 'Core',
	welfare: 'Welfare',
	shooting: 'Shooting',
	comms: 'Comms and Events'
};

export const committeePositions: Record<string, Position> = {
	captain: {
		title: 'Co-Captain',
		email: 'captain@cubowmen.com',
		type: 'core'
	},
	secretary: {
		title: 'Secretary',
		email: 'secretary@cubowmen.com',
		type: 'core'
	},
	treasurer: {
		title: 'Treasurer',
		email: 'treasurer@cubowmen.com',
		type: 'core'
	},
	welfare: {
		title: 'Welfare Officer',
		email: 'welfare@cubowmen.com',
		type: 'welfare'
	},
	safety: {
		title: 'Safety Officer',
		email: 'safety@cubowmen.com',
		type: 'welfare'
	},
	womens: {
		title: "Women's Officer",
		email: 'womens@cubowmen.com',
		type: 'welfare'
	},
	novice: {
		title: 'Novice Officer',
		email: 'novice@cubowmen.com',
		type: 'shooting'
	},
	development: {
		title: 'Development Officer',
		email: 'development@cubowmen.com',
		type: 'shooting'
	},
	records: {
		title: 'Tournaments & Records Officer',
		email: 'tournaments@cubowmen.com',
		type: 'shooting'
	},
	equipment: {
		title: 'Equipment Officer',
		email: 'equipment@cubowmen.com',
		type: 'shooting'
	},
	webmaster: {
		title: 'Webmaster',
		email: 'webmaster@cubowmen.com',
		type: 'comms'
	},
	publicity: {
		title: 'Publicity Officer',
		email: 'publicity@cubowmen.com',
		type: 'comms'
	},
	alumni: {
		title: 'Alumni Officer',
		email: 'alumni@cubowmen.com',
		type: 'comms'
	},
	social: {
		title: 'Social Secretary',
		email: 'social@cubowmen.com',
		type: 'comms'
	}
};

export const committeeMembers: CommitteeMember[] = [
	{
		position: committeePositions.captain,
		name: 'Amber Holt',
		college: "Queens'"
	},
	{
		position: committeePositions.captain,
		name: 'Alex Mapplebeck',
		college: 'Churchill'
	},
	{
		position: committeePositions.secretary,
		name: 'Emily Naden',
		college: 'Peterhouse'
	},
	{
		position: committeePositions.treasurer,
		name: 'Sriyashas Mohan-Kalluri',
		college: "King's"
	},
	{
		position: committeePositions.welfare,
		name: 'Lanyu Chen',
		college: 'Jesus'
	},
	{
		position: committeePositions.safety,
		name: 'Diana Galvan Sosa',
		college: 'N/A (staff)'
	},
	{
		position: committeePositions.equipment,
		name: 'Julia Wang',
		college: 'Homerton'
	},
	{
		position: committeePositions.equipment,
		name: 'Dhanya Swami',
		college: 'Trinity'
	},
	{
		position: committeePositions.novice,
		name: 'Matthew Bradley',
		college: 'Jesus'
	},
	{
		position: committeePositions.novice,
		name: 'Lanyu Chen',
		college: 'Jesus'
	},
	{
		position: committeePositions.development,
		name: 'Matthew Bradley',
		college: 'Jesus'
	},
	{
		position: committeePositions.social,
		name: 'Esther Tam',
		college: 'Downing'
	},
	{
		position: committeePositions.social,
		name: 'Alastair Rial',
		college: 'Lucy Cavendish'
	},
	{
		position: committeePositions.publicity,
		name: 'Esther Tam',
		college: 'Downing'
	}
];
