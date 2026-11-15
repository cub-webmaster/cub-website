import alastair from '$lib/assets/img/committee/Alastair.jpg';
import alex from '$lib/assets/img/committee/Alex.jpg';
import amber from '$lib/assets/img/committee/Amber.jpg';
import diana from '$lib/assets/img/committee/Diana.jpg';
import dhanya from '$lib/assets/img/committee/Dhanya.jpg';
import emily from '$lib/assets/img/committee/Emily.jpg';
import esther from '$lib/assets/img/committee/Esther.jpg';
import julia from '$lib/assets/img/committee/Julia.jpg';
import lanyu from '$lib/assets/img/committee/Lanyu.jpg';
import matthew from '$lib/assets/img/committee/Matthew.jpg';
import sriyashas from '$lib/assets/img/committee/Sriyashas.jpg';

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
		college: "Queens'",
		image: amber
	},
	{
		position: committeePositions.captain,
		name: 'Alex Mapplebeck',
		college: 'Churchill',
		image: alex
	},
	{
		position: committeePositions.secretary,
		name: 'Emily Naden',
		college: 'Peterhouse',
		image: emily
	},
	{
		position: committeePositions.treasurer,
		name: 'Sriyashas Mohan-Kalluri',
		college: "King's",
		image: sriyashas
	},
	{
		position: committeePositions.welfare,
		name: 'Lanyu Chen',
		college: 'Jesus',
		image: lanyu
	},
	{
		position: committeePositions.safety,
		name: 'Diana Galvan Sosa',
		college: 'N/A (staff)',
		image: diana
	},
	{
		position: committeePositions.equipment,
		name: 'Julia Wang',
		college: 'Homerton',
		image: julia
	},
	{
		position: committeePositions.equipment,
		name: 'Dhanya Swami',
		college: 'Trinity',
		image: dhanya
	},
	{
		position: committeePositions.novice,
		name: 'Matthew Bradley',
		college: 'Jesus',
		image: matthew
	},
	{
		position: committeePositions.novice,
		name: 'Lanyu Chen',
		college: 'Jesus',
		image: lanyu
	},
	{
		position: committeePositions.development,
		name: 'Matthew Bradley',
		college: 'Jesus',
		image: matthew
	},
	{
		position: committeePositions.social,
		name: 'Esther Tam',
		college: 'Downing',
		image: esther
	},
	{
		position: committeePositions.social,
		name: 'Alastair Rial',
		college: 'Lucy Cavendish',
		image: alastair
	},
	{
		position: committeePositions.publicity,
		name: 'Esther Tam',
		college: 'Downing',
		image: esther
	}
];
