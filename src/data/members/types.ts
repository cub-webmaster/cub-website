import type { Icon } from '$lib/util';

export interface SocialEvent {
	name: string;
	desc: string;
	icon: Icon;
}

export interface BadgeInfoBase<RowLabel extends string, ColumnLabel extends string> {
	id: string;
	name: string;
	icon: Icon;
	image?: string;
	scoreTable?: unknown;
	columnDecoration?: Record<ColumnLabel, Icon | string>;
	rowDecoration?: Record<RowLabel, Icon | string>;
}

export interface GenderedBadgeInfo<
	RowLabel extends string,
	ColumnLabel extends string
> extends BadgeInfoBase<RowLabel, ColumnLabel> {
	scoreTable: {
		gendered: true;
		useBowstyleSelect?: false;
		columnsOrder: readonly ColumnLabel[];
		rowsOrder: readonly RowLabel[];
		rowLabelsTitle: string;
		content: GenderedBadgeScores<RowLabel, ColumnLabel>;
	};
}

export interface SimpleBadgeInfo<
	RowLabel extends string,
	ColumnLabel extends string
> extends BadgeInfoBase<RowLabel, ColumnLabel> {
	scoreTable?: {
		gendered?: false;
		useBowstyleSelect?: false;
		columnsOrder: readonly ColumnLabel[];
		rowsOrder: readonly RowLabel[];
		rowLabelsTitle: string;
		content: Partial<Record<RowLabel, Record<ColumnLabel, number>>>;
	};
}

export interface GenderedBowStyleBadgeInfo<
	RowLabel extends string,
	ColumnLabel extends string
> extends BadgeInfoBase<RowLabel, ColumnLabel> {
	scoreTable: {
		gendered: true;
		useBowstyleSelect: true;
		columnsOrder: readonly ColumnLabel[];
		rowsOrder: readonly RowLabel[];
		rowLabelsTitle: string;
		content: Partial<Record<BowStyle, GenderedBadgeScores<RowLabel, ColumnLabel>>>;
	};
}

export interface BowStyleBadgeInfo<
	RowLabel extends string,
	ColumnLabel extends string
> extends BadgeInfoBase<RowLabel, ColumnLabel> {
	scoreTable: {
		gendered: false;
		useBowstyleSelect: true;
		columnsOrder: readonly ColumnLabel[];
		rowsOrder: readonly RowLabel[];
		rowLabelsTitle: string;
		content: Partial<Record<BowStyle, Partial<Record<RowLabel, Record<ColumnLabel, number>>>>>;
	};
}

export type BadgeInfo<A extends string, B extends string> =
	| SimpleBadgeInfo<A, B>
	| GenderedBadgeInfo<A, B>
	| BowStyleBadgeInfo<A, B>
	| GenderedBowStyleBadgeInfo<A, B>;

type GenderedBadgeScores<RowLabel extends string, ColumnLabel extends string> = Partial<
	Record<Gender, Partial<Record<RowLabel, Record<ColumnLabel, number>>>>
>;

export const genderCategories = ['ladies', 'gents', 'open'] as const;
export type Gender = (typeof genderCategories)[number];

export const bowstyles = ['Recurve', 'Barebow', 'Longbow', 'Compound'] as const;
export type BowStyle = (typeof bowstyles)[number];
