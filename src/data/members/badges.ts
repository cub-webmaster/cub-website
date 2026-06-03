import Bird from '@iconify-svelte/lucide/bird';
import BowArrow from '@iconify-svelte/lucide/bow-arrow';
import Earth from '@iconify-svelte/lucide/earth';
import LandPlot from '@iconify-svelte/lucide/land-plot';
import Star from '@iconify-svelte/lucide/star';
import Rose from '@iconify-svelte/lucide/rose';
import Cross from '@iconify-svelte/lucide/cross';
import Target from '@iconify-svelte/lucide/target';
import MousePointer2 from '@iconify-svelte/lucide/mouse-pointer-2';
import cubBadges from '$lib/assets/img/badges/CUB_badges.png';
import toucanBadges from '$lib/assets/img/badges/TOUCAN_badges.png';
import twoFiveTwoBadges from '$lib/assets/img/badges/252_badges.jpg';
import arrowAwards from '$lib/assets/img/badges/WA_Arrows.jpg';
import waStar from '$lib/assets/img/badges/fitastars.jpg';
import waTarget from '$lib/assets/img/badges/fitatarget.jpg';
import eafCrosses from '$lib/assets/img/badges/EAFcross.png';
import roseAwards from '$lib/assets/img/badges/RoseAwards.png';
import waArrowheads from '$lib/assets/img/badges/arrowhead.jpg';
import arrowsScoresheetWhite from '$lib/assets/docs/arrow_awards/arrow_award_white_sheet.pdf';
import arrowsScoresheetBlack from '$lib/assets/docs/arrow_awards/arrow_award_black_sheet.pdf';
import arrowsScoresheetBlue from '$lib/assets/docs/arrow_awards/arrow_award_blue_sheet.pdf';
import arrowsScoresheetRed from '$lib/assets/docs/arrow_awards/arrow_award_red_sheet.pdf';
import arrowsScoresheetGold from '$lib/assets/docs/arrow_awards/arrow_award_gold_sheet.pdf';
import type { Icon } from '$lib/util';

interface BadgeInfoBase<RowLabel extends string, ColumnLabel extends string> {
	id: string;
	name: string;
	icon: Icon;
	image?: string;
	scoreTable?: unknown;
	columnDecoration?: Record<ColumnLabel, Icon | string>;
	rowDecoration?: Record<RowLabel, Icon | string>;
}

interface GenderedBadgeInfo<
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

interface SimpleBadgeInfo<
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

interface GenderedBowStyleBadgeInfo<
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

interface BowStyleBadgeInfo<
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

export const ladiesRounds = [
	'Portsmouth (3-spot)',
	'WA 50',
	'Portsmouth',
	'WA18 (Full Face)',
	'WA18 (3-spot)',
	'Bray I',
	'Worcester',
	'WA 1440',
	'WA 720',
	'Hereford',
	'Windsor',
	'Albion',
	'National',
	'Warwick',
	'Western',
	'WA Field 24 Unmarked/Marked/Mixed'
] as const;
type LadieesRounds = (typeof ladiesRounds)[number];

export const gentsRounds = [
	'Portsmouth (3-spot)',
	'WA 50',
	'Portsmouth',
	'WA18 (Full Face)',
	'WA18 (3-spot)',
	'Bray I',
	'Worcester',
	'WA 1440',
	'WA 720',
	'St.George',
	'York',
	'Albion',
	'National',
	'Warwick',
	'Western',
	'WA Field 24 Unmarked/Marked/Mixed'
] as const;
type GentsRounds = (typeof gentsRounds)[number];

type Color = 'White' | 'Black' | 'Blue' | 'Red' | 'Gold';

export const badgesCUB: GenderedBowStyleBadgeInfo<LadieesRounds | GentsRounds, Color> = {
	id: 'badges_CUB',
	name: 'CUB Badges',
	icon: BowArrow,
	image: cubBadges,
	scoreTable: {
		gendered: true,
		useBowstyleSelect: true,
		columnsOrder: ['White', 'Black', 'Blue', 'Red', 'Gold'],
		rowLabelsTitle: 'Round',
		rowsOrder: [
			'Portsmouth (3-spot)',
			'Portsmouth',
			'WA18 (Full Face)',
			'WA18 (3-spot)',
			'Bray I',
			'Worcester',
			'WA 1440',
			'WA 720',
			'WA 50',
			'Hereford',
			'Windsor',
			'St.George',
			'York',
			'Albion',
			'National',
			'Warwick',
			'Western',
			'WA Field 24 Unmarked/Marked/Mixed'
		],
		content: {
			Recurve: {
				ladies: {
					Portsmouth: {
						White: 338,
						Black: 446,
						Blue: 514,
						Red: 541,
						Gold: 559
					},
					'WA18 (Full Face)': {
						White: 228,
						Black: 361,
						Blue: 514,
						Red: 541,
						Gold: 559
					},
					'WA18 (3-spot)': {
						White: 141,
						Black: 280,
						Blue: 433,
						Red: 493,
						Gold: 526
					},
					'Bray I': {
						White: 111,
						Black: 178,
						Blue: 228,
						Red: 249,
						Gold: 262
					},
					Worcester: {
						White: 126,
						Black: 195,
						Blue: 244,
						Red: 264,
						Gold: 277
					},
					'WA 1440': {
						White: 205,
						Black: 508,
						Blue: 873,
						Red: 1037,
						Gold: 1141
					},
					'WA 720': {
						White: 41,
						Black: 165,
						Blue: 374,
						Red: 477,
						Gold: 541
					},
					Hereford: {
						White: 139,
						Black: 417,
						Blue: 780,
						Red: 952,
						Gold: 1061
					},
					Albion: {
						White: 134,
						Black: 366,
						Blue: 629,
						Red: 746,
						Gold: 819
					},
					Windsor: {
						White: 245,
						Black: 519,
						Blue: 743,
						Red: 828,
						Gold: 881
					},
					National: {
						White: 109,
						Black: 287,
						Blue: 459,
						Red: 526,
						Gold: 568
					},
					Warwick: {
						White: 80,
						Black: 201,
						Blue: 312,
						Red: 355,
						Gold: 382
					},
					Western: {
						White: 159,
						Black: 402,
						Blue: 625,
						Red: 710,
						Gold: 764
					},
					'WA Field 24 Unmarked/Marked/Mixed': {
						White: 103,
						Black: 210,
						Blue: 254,
						Red: 275,
						Gold: 296
					}
				},
				gents: {
					Portsmouth: {
						White: 380,
						Black: 473,
						Blue: 530,
						Red: 554,
						Gold: 569
					},
					'WA18 (Full Face)': {
						White: 274,
						Black: 398,
						Blue: 484,
						Red: 518,
						Gold: 541
					},
					'WA18 (3-spot)': {
						White: 182,
						Black: 334,
						Blue: 471,
						Red: 516,
						Gold: 541
					},
					'Bray I': {
						White: 134,
						Black: 197,
						Blue: 240,
						Red: 258,
						Gold: 270
					},
					Worcester: {
						White: 150,
						Black: 214,
						Blue: 256,
						Red: 273,
						Gold: 285
					},
					'WA 1440': {
						White: 244,
						Black: 538,
						Blue: 885,
						Red: 1046,
						Gold: 1149
					},
					'WA 720': {
						White: 69,
						Black: 232,
						Blue: 437,
						Red: 522,
						Gold: 574
					},
					York: {
						White: 100,
						Black: 335,
						Blue: 698,
						Red: 889,
						Gold: 1015
					},
					Albion: {
						White: 199,
						Black: 458,
						Blue: 700,
						Red: 797,
						Gold: 858
					},
					'St.George': {
						White: 103,
						Black: 307,
						Blue: 575,
						Red: 705,
						Gold: 789
					},
					National: {
						White: 160,
						Black: 351,
						Blue: 500,
						Red: 555,
						Gold: 590
					},
					Warwick: {
						White: 115,
						Black: 243,
						Blue: 339,
						Red: 374,
						Gold: 396
					},
					Western: {
						White: 231,
						Black: 486,
						Blue: 677,
						Red: 748,
						Gold: 792
					},
					'WA Field 24 Unmarked/Marked/Mixed': {
						White: 103,
						Black: 210,
						Blue: 260,
						Red: 284,
						Gold: 307
					}
				}
			},
			Barebow: {
				ladies: {
					Portsmouth: {
						White: 231,
						Black: 360,
						Blue: 446,
						Red: 484,
						Gold: 510
					},
					'WA18 (Full Face)': {
						White: 135,
						Black: 251,
						Blue: 361,
						Red: 415,
						Gold: 453
					},
					'Bray I': {
						White: 65,
						Black: 123,
						Blue: 178,
						Red: 206,
						Gold: 225
					},
					Worcester: {
						White: 75,
						Black: 138,
						Blue: 195,
						Red: 222,
						Gold: 241
					},
					'WA 1440': {
						White: 59,
						Black: 171,
						Blue: 391,
						Red: 481,
						Gold: 728
					},
					'WA 720': {
						White: 6,
						Black: 31,
						Blue: 110,
						Red: 181,
						Gold: 286
					},
					Hereford: {
						White: 29,
						Black: 110,
						Blue: 306,
						Red: 477,
						Gold: 632
					},
					Albion: {
						White: 30,
						Black: 108,
						Blue: 278,
						Red: 412,
						Gold: 526
					},
					Windsor: {
						White: 70,
						Black: 206,
						Blue: 426,
						Red: 563,
						Gold: 662
					},
					National: {
						White: 24,
						Black: 88,
						Blue: 221,
						Red: 319,
						Gold: 396
					},
					Warwick: {
						White: 18,
						Black: 65,
						Blue: 157,
						Red: 222,
						Gold: 272
					},
					Western: {
						White: 37,
						Black: 129,
						Blue: 314,
						Red: 445,
						Gold: 544
					},
					'WA Field 24 Unmarked/Marked/Mixed': {
						White: 94,
						Black: 195,
						Blue: 233,
						Red: 255,
						Gold: 276
					}
				},
				gents: {
					Portsmouth: {
						White: 280,
						Black: 389,
						Blue: 466,
						Red: 500,
						Gold: 523
					},
					'WA18 (Full Face)': {
						White: 173,
						Black: 285,
						Blue: 389,
						Red: 439,
						Gold: 472
					},
					'Bray I': {
						White: 84,
						Black: 1140,
						Blue: 193,
						Red: 218,
						Gold: 235
					},
					Worcester: {
						White: 96,
						Black: 156,
						Blue: 209,
						Red: 234,
						Gold: 251
					},
					'WA 1440': {
						White: 82,
						Black: 226,
						Blue: 538,
						Red: 716,
						Gold: 831
					},
					'WA 720': {
						White: 12,
						Black: 61,
						Blue: 232,
						Red: 340,
						Gold: 407
					},
					York: {
						White: 19,
						Black: 89,
						Blue: 335,
						Red: 511,
						Gold: 637
					},
					Albion: {
						White: 52,
						Black: 181,
						Blue: 458,
						Red: 590,
						Gold: 666
					},
					'St.George': {
						White: 22,
						Black: 92,
						Blue: 307,
						Red: 442,
						Gold: 532
					},
					National: {
						White: 42,
						Black: 146,
						Blue: 351,
						Red: 436,
						Gold: 481
					},
					Warwick: {
						White: 32,
						Black: 106,
						Blue: 243,
						Red: 297,
						Gold: 326
					},
					Western: {
						White: 63,
						Black: 211,
						Blue: 486,
						Red: 595,
						Gold: 652
					},
					'WA Field 24 Unmarked/Marked/Mixed': {
						White: 94,
						Black: 204,
						Blue: 252,
						Red: 275,
						Gold: 300
					}
				}
			},
			Compound: {
				ladies: {
					'Portsmouth (3-spot)': {
						White: 359,
						Black: 481,
						Blue: 534,
						Red: 548,
						Gold: 557
					},
					'WA18 (3-spot)': {
						White: 227,
						Black: 383,
						Blue: 498,
						Red: 526,
						Gold: 541
					},
					'Bray I': {
						White: 156,
						Black: 212,
						Blue: 250,
						Red: 262,
						Gold: 270
					},
					Worcester: {
						White: 173,
						Black: 230,
						Blue: 269,
						Red: 283,
						Gold: 292
					},
					'WA 1440': {
						White: 391,
						Black: 788,
						Blue: 1125,
						Red: 1220,
						Gold: 1281
					},
					'WA 720': {
						White: 100,
						Black: 322,
						Blue: 532,
						Red: 588,
						Gold: 624
					},
					'WA 50': {
						White: 141,
						Black: 336,
						Blue: 525,
						Red: 581,
						Gold: 617
					},
					Hereford: {
						White: 306,
						Black: 693,
						Blue: 1045,
						Red: 1143,
						Gold: 1204
					},
					Albion: {
						White: 278,
						Black: 569,
						Blue: 809,
						Red: 875,
						Gold: 916
					},
					Windsor: {
						White: 426,
						Black: 697,
						Blue: 873,
						Red: 920,
						Gold: 948
					},
					National: {
						White: 221,
						Black: 423,
						Blue: 562,
						Red: 599,
						Gold: 623
					},
					Warwick: {
						White: 157,
						Black: 286,
						Blue: 378,
						Red: 402,
						Gold: 417
					},
					Western: {
						White: 314,
						Black: 578,
						Blue: 756,
						Red: 804,
						Gold: 834
					},
					'WA Field 24 Unmarked/Marked/Mixed': {
						White: 145,
						Black: 258,
						Blue: 307,
						Red: 330,
						Gold: 354
					}
				},
				gents: {
					'Portsmouth (3-spot)': {
						White: 408,
						Black: 504,
						Blue: 542,
						Red: 554,
						Gold: 562
					},
					'WA18 (3-spot)': {
						White: 278,
						Black: 428,
						Blue: 516,
						Red: 537,
						Gold: 549
					},
					'Bray I': {
						White: 177,
						Black: 226,
						Blue: 257,
						Red: 268,
						Gold: 274
					},
					Worcester: {
						White: 195,
						Black: 244,
						Blue: 277,
						Red: 289,
						Gold: 296
					},
					'WA 1440': {
						White: 453,
						Black: 858,
						Blue: 1134,
						Red: 1238,
						Gold: 1287
					},
					'WA 720': {
						White: 181,
						Black: 422,
						Blue: 566,
						Red: 619,
						Gold: 643
					},
					'WA 50': {
						White: 210,
						Black: 424,
						Blue: 559,
						Red: 612,
						Gold: 637
					},
					York: {
						White: 259,
						Black: 668,
						Blue: 996,
						Red: 1121,
						Gold: 1178
					},
					Albion: {
						White: 389,
						Black: 683,
						Blue: 849,
						Red: 910,
						Gold: 936
					},
					'St.George': {
						White: 245,
						Black: 554,
						Blue: 777,
						Red: 861,
						Gold: 899
					},
					National: {
						White: 303,
						Black: 491,
						Blue: 585,
						Red: 620,
						Gold: 634
					},
					Warwick: {
						White: 212,
						Black: 333,
						Blue: 393,
						Red: 415,
						Gold: 424
					},
					Western: {
						White: 423,
						Black: 665,
						Blue: 785,
						Red: 830,
						Gold: 848
					},
					'WA Field 24 Unmarked/Marked/Mixed': {
						White: 145,
						Black: 258,
						Blue: 312,
						Red: 340,
						Gold: 365
					}
				}
			},
			Longbow: {
				ladies: {
					Portsmouth: { White: 160, Black: 268, Blue: 370, Red: 424, Gold: 453 },
					'WA18 (Full Face)': { White: 87, Black: 163, Blue: 262, Red: 329, Gold: 370 },
					'Bray I': { White: 42, Black: 79, Blue: 128, Red: 162, Gold: 183 },
					Worcester: { White: 49, Black: 91, Blue: 144, Red: 179, Gold: 200 },
					'WA 1440': { White: 46, Black: 103, Blue: 205, Red: 313, Gold: 419 },
					'WA 720': { White: 5, Black: 14, Blue: 41, Red: 78, Gold: 122 },
					Hereford: { White: 21, Black: 58, Blue: 139, Red: 233, Gold: 332 },
					Albion: { White: 22, Black: 59, Blue: 134, Red: 217, Gold: 299 },
					Windsor: { White: 54, Black: 125, Blue: 245, Red: 355, Gold: 449 },
					National: { White: 18, Black: 48, Blue: 109, Red: 174, Gold: 237 },
					Warwick: { White: 14, Black: 36, Blue: 80, Red: 125, Gold: 168 },
					Western: { White: 28, Black: 72, Blue: 159, Red: 251, Gold: 336 },
					'WA Field 24 Unmarked/Marked/Mixed': {
						White: 94,
						Black: 195,
						Blue: 233,
						Red: 255,
						Gold: 276
					}
				},
				gents: {
					Portsmouth: { White: 195, Black: 304, Blue: 398, Red: 446, Gold: 473 },
					'WA18 (Full Face)': { White: 109, Black: 194, Blue: 296, Red: 361, Gold: 398 },
					'Bray I': { White: 53, Black: 95, Blue: 146, Red: 178, Gold: 197 },
					Worcester: { White: 61, Black: 108, Blue: 162, Red: 195, Gold: 214 },
					'WA 1440': { White: 82, Black: 161, Blue: 305, Red: 401, Gold: 509 },
					'WA 720': { White: 12, Black: 35, Blue: 90, Red: 150, Gold: 214 },
					York: { White: 19, Black: 53, Blue: 142, Red: 215, Gold: 308 },
					'St.George': { White: 22, Black: 57, Blue: 142, Red: 207, Gold: 286 },
					Albion: { White: 52, Black: 121, Blue: 257, Red: 344, Gold: 435 },
					National: { White: 42, Black: 98, Blue: 205, Red: 270, Gold: 336 },
					Warwick: { White: 32, Black: 72, Blue: 146, Red: 190, Gold: 233 },
					Western: { White: 63, Black: 144, Blue: 292, Red: 380, Gold: 466 },
					'WA Field 24 Unmarked/Marked/Mixed': {
						White: 94,
						Black: 204,
						Blue: 252,
						Red: 275,
						Gold: 300
					}
				}
			}
		}
	}
};

export const badgesToucan: BadgeInfo<BowStyle, Color> = {
	id: 'badges_TOUCAN',
	name: 'TOUCAN Badges',
	icon: Bird,
	image: toucanBadges,
	scoreTable: {
		rowsOrder: bowstyles,
		columnsOrder: ['White', 'Black', 'Blue', 'Red', 'Gold'],
		rowLabelsTitle: 'Bowstyle',
		gendered: true,
		content: {
			ladies: {
				Recurve: {
					White: 331,
					Black: 399,
					Blue: 454,
					Red: 496,
					Gold: 553
				},
				Barebow: {
					White: 276,
					Black: 336,
					Blue: 391,
					Red: 437,
					Gold: 505
				},
				Compound: {
					White: 449,
					Black: 491,
					Blue: 521,
					Red: 541,
					Gold: 566
				},
				Longbow: {
					White: 84,
					Black: 123,
					Blue: 174,
					Red: 235,
					Gold: 364
				}
			},
			open: {
				Recurve: {
					White: 378,
					Black: 437,
					Blue: 483,
					Red: 518,
					Gold: 566
				},
				Barebow: {
					White: 331,
					Black: 387,
					Blue: 433,
					Red: 472,
					Gold: 528
				},
				Compound: {
					White: 472,
					Black: 508,
					Blue: 532,
					Red: 549,
					Gold: 571
				},
				Longbow: {
					White: 127,
					Black: 178,
					Blue: 240,
					Red: 306,
					Gold: 423
				}
			}
		}
	}
};

export const badges252: BadgeInfo<BowStyle, 'Score'> = {
	id: 'badges_252',
	name: '252 Badges',
	image: twoFiveTwoBadges,
	icon: LandPlot,
	scoreTable: {
		rowsOrder: bowstyles,
		columnsOrder: ['Score'],
		rowLabelsTitle: 'Bowstyle',
		content: {
			Recurve: {
				Score: 252
			},
			Barebow: {
				Score: 162
			},
			Compound: {
				Score: 288
			},
			Longbow: {
				Score: 108
			}
		}
	}
};

export const badges252Distance: { distance: number; name: string; color: string }[] = [
	{
		name: 'Green',
		distance: 20,
		color: 'bg-[#6aa56f]'
	},
	{
		name: 'White',
		distance: 30,
		color: 'bg-base-100'
	},
	{
		name: 'Black',
		distance: 40,
		color: 'bg-neutral'
	},
	{
		name: 'Blue',
		distance: 50,
		color: 'bg-success'
	},
	{
		name: 'Red',
		distance: 60,
		color: 'bg-accent'
	},
	{
		name: 'Yellow',
		distance: 80,
		color: 'bg-warning'
	},
	{
		name: 'Purple',
		distance: 100,
		color: 'bg-[#412e6d]'
	}
];

export const badgesWaArrows: BadgeInfo<BowStyle, Color> = {
	id: 'badges_wa_arrows',
	name: 'WA Arrow Awards',
	icon: Earth,
	image: arrowAwards
};

export const badgesWaArrowsScoresheetsLastUpdate = '31/05/2026';
export const badgesWaArrowsScoresheets: { name: Color; color: string; doc: string }[] = [
	{
		name: 'White',
		color: 'bg-base-100',
		doc: arrowsScoresheetWhite
	},
	{
		name: 'Black',
		color: 'bg-neutral',
		doc: arrowsScoresheetBlack
	},
	{
		name: 'Blue',
		color: 'bg-success',
		doc: arrowsScoresheetBlue
	},
	{
		name: 'Red',
		color: 'bg-accent',
		doc: arrowsScoresheetRed
	},
	{
		name: 'Gold',
		color: 'bg-warning',
		doc: arrowsScoresheetGold
	}
];

export const badgesWaStar: SimpleBadgeInfo<
	'Star' | 'Black Star' | 'Blue Star' | 'Red Star' | 'Gold Star' | 'Purple Star',
	'Score'
> = {
	id: 'badges_wa_stars',
	name: 'WA Star',
	icon: Star,
	image: waStar,
	scoreTable: {
		columnsOrder: ['Score'],
		rowLabelsTitle: 'Award',
		rowsOrder: ['Star', 'Black Star', 'Blue Star', 'Red Star', 'Gold Star', 'Purple Star'],
		content: {
			Star: {
				Score: 1000
			},
			'Blue Star': {
				Score: 1200
			},
			'Black Star': {
				Score: 1100
			},
			'Red Star': {
				Score: 1300
			},
			'Gold Star': {
				Score: 1350
			},
			'Purple Star': {
				Score: 1400
			}
		}
	}
};

export const badgesWaTarget: BowStyleBadgeInfo<
	'72-arrow 70m' | '72-arrow 50m' | 'WA 900' | '60-arrow 25m' | '60-arrow 18m',
	Color | 'Purple'
> = {
	id: 'badges_wa_target',
	name: 'WA Target Awards',
	icon: Target,
	image: waTarget,
	scoreTable: {
		gendered: false,
		useBowstyleSelect: true,
		rowsOrder: ['72-arrow 70m', '72-arrow 50m', 'WA 900', '60-arrow 25m', '60-arrow 18m'],
		columnsOrder: ['White', 'Black', 'Blue', 'Red', 'Gold', 'Purple'],
		rowLabelsTitle: 'Round',
		content: {
			Recurve: {
				'72-arrow 70m': {
					White: 500,
					Black: 550,
					Blue: 600,
					Red: 650,
					Gold: 675,
					Purple: 700
				},
				'WA 900': {
					White: 750,
					Black: 800,
					Blue: 830,
					Red: 860,
					Gold: 875,
					Purple: 890
				},
				'60-arrow 25m': {
					White: 500,
					Black: 525,
					Blue: 550,
					Red: 575,
					Gold: 585,
					Purple: 595
				},
				'60-arrow 18m': {
					White: 500,
					Black: 525,
					Blue: 550,
					Red: 575,
					Gold: 585,
					Purple: 595
				}
			},
			Barebow: {
				'72-arrow 50m': {
					White: 480,
					Black: 500,
					Blue: 550,
					Red: 600,
					Gold: 625,
					Purple: 640
				},
				'WA 900': {
					White: 750,
					Black: 800,
					Blue: 830,
					Red: 860,
					Gold: 875,
					Purple: 890
				},
				'60-arrow 25m': {
					White: 500,
					Black: 525,
					Blue: 550,
					Red: 575,
					Gold: 585,
					Purple: 595
				},
				'60-arrow 18m': {
					White: 480,
					Black: 500,
					Blue: 520,
					Red: 540,
					Gold: 550,
					Purple: 560
				}
			},
			Compound: {
				'72-arrow 50m': {
					White: 500,
					Black: 550,
					Blue: 600,
					Red: 650,
					Gold: 675,
					Purple: 700
				},
				'WA 900': {
					White: 750,
					Black: 800,
					Blue: 830,
					Red: 860,
					Gold: 875,
					Purple: 890
				},
				'60-arrow 25m': {
					White: 500,
					Black: 525,
					Blue: 550,
					Red: 575,
					Gold: 585,
					Purple: 595
				},
				'60-arrow 18m': {
					White: 500,
					Black: 525,
					Blue: 550,
					Red: 575,
					Gold: 585,
					Purple: 595
				}
			}
		}
	}
};

export const badgesEafCross: SimpleBadgeInfo<BowStyle, 'Green' | Color | 'Purple'> = {
	id: 'badges_eaf_crosses',
	name: 'English Crosses',
	icon: Cross,
	image: eafCrosses,
	scoreTable: {
		rowLabelsTitle: 'Bowstyle',
		rowsOrder: bowstyles,
		columnsOrder: ['Green', 'White', 'Black', 'Blue', 'Red', 'Gold', 'Purple'],
		content: {
			Recurve: {
				Green: 850,
				White: 950,
				Black: 1050,
				Blue: 1150,
				Red: 1225,
				Gold: 1275,
				Purple: 1325
			},
			Compound: {
				Green: -1,
				White: 950,
				Black: 1050,
				Blue: 1150,
				Red: 1250,
				Gold: 1350,
				Purple: 1400
			},
			Longbow: {
				Green: 250,
				White: 350,
				Black: 450,
				Blue: 525,
				Red: 600,
				Gold: 650,
				Purple: 700
			},
			Barebow: {
				Green: 450,
				White: 550,
				Black: 650,
				Blue: 750,
				Red: 850,
				Gold: 950,
				Purple: 1025
			}
		}
	}
};

export const badgesRose: SimpleBadgeInfo<BowStyle, Color | 'Purple'> = {
	id: 'badges_rose',
	name: 'Rose Awards',
	icon: Rose,
	image: roseAwards,
	scoreTable: {
		rowLabelsTitle: 'Bowstyle',
		rowsOrder: bowstyles,
		columnsOrder: ['White', 'Black', 'Blue', 'Red', 'Gold', 'Purple'],
		content: {
			Recurve: {
				White: 800,
				Black: 900,
				Blue: 1000,
				Red: 1100,
				Gold: 1200,
				Purple: 1250
			},
			Compound: {
				White: 800,
				Black: 900,
				Blue: 1000,
				Red: 1100,
				Gold: 1200,
				Purple: 1250
			},
			Barebow: {
				White: 500,
				Black: 600,
				Blue: 700,
				Red: 800,
				Gold: 900,
				Purple: 1000
			},
			Longbow: {
				White: 225,
				Black: 300,
				Blue: 375,
				Red: 450,
				Gold: 525,
				Purple: 600
			}
		}
	}
};

export const badgesWaArrowhead: GenderedBadgeInfo<
	BowStyle,
	'Green' | 'Brown' | 'Grey' | 'Black' | 'White' | 'Silver' | 'Gold'
> = {
	id: 'badges_wa_arrowhead',
	name: 'WA Arrowhead',
	icon: MousePointer2,
	image: waArrowheads,
	scoreTable: {
		gendered: true,
		rowLabelsTitle: 'Bowstyle',
		rowsOrder: bowstyles,
		columnsOrder: ['Green', 'Brown', 'Grey', 'Black', 'White', 'Silver', 'Gold'],
		content: {
			ladies: {
				Recurve: {
					Green: 196,
					Brown: 227,
					Grey: 249,
					Black: 279,
					White: 302,
					Silver: 323,
					Gold: 339
				},
				Compound: {
					Green: 275,
					Brown: 301,
					Grey: 318,
					Black: 338,
					White: 357,
					Silver: 377,
					Gold: 388
				},
				Barebow: {
					Green: 182,
					Brown: 198,
					Grey: 226,
					Black: 250,
					White: 275,
					Silver: 299,
					Gold: 312
				}
			},
			gents: {
				Recurve: {
					Green: 219,
					Brown: 244,
					Grey: 265,
					Black: 291,
					White: 313,
					Silver: 338,
					Gold: 350
				},
				Compound: {
					Green: 292,
					Brown: 313,
					Grey: 331,
					Black: 351,
					White: 371,
					Silver: 389,
					Gold: 399
				},
				Barebow: {
					Green: 191,
					Brown: 230,
					Grey: 250,
					Black: 273,
					White: 294,
					Silver: 316,
					Gold: 335
				}
			}
		}
	}
};

export const badgesIndoorClassifications: GenderedBadgeInfo<
	BowStyle,
	'H (A3)' | 'G (A2)' | 'F (A1)' | 'E (B3)' | 'D (B2)' | 'C (B1)' | 'B (MB)' | 'A (GMB)'
> = {
	id: 'indoor_classifications',
	name: 'AGB Indoor Classifications',
	icon: BowArrow,
	scoreTable: {
		gendered: true,
		rowLabelsTitle: 'Bowstyle',
		rowsOrder: bowstyles,
		columnsOrder: ['H (A3)', 'G (A2)', 'F (A1)', 'E (B3)', 'D (B2)', 'C (B1)', 'B (MB)', 'A (GMB)'],
		content: {
			ladies: {
				Recurve: {
					'H (A3)': 331,
					'G (A2)': 399,
					'F (A1)': 454,
					'E (B3)': 496,
					'D (B2)': 528,
					'C (B1)': 553,
					'B (MB)': 572,
					'A (GMB)': 586
				},
				Barebow: {
					'H (A3)': 276,
					'G (A2)': 336,
					'F (A1)': 391,
					'E (B3)': 437,
					'D (B2)': 475,
					'C (B1)': 505,
					'B (MB)': 530,
					'A (GMB)': 550
				},
				Compound: {
					'H (A3)': 449,
					'G (A2)': 491,
					'F (A1)': 521,
					'E (B3)': 541,
					'D (B2)': 555,
					'C (B1)': 566,
					'B (MB)': 577,
					'A (GMB)': 589
				}
			},
			gents: {
				Recurve: {
					'H (A3)': 378,
					'G (A2)': 437,
					'F (A1)': 483,
					'E (B3)': 518,
					'D (B2)': 546,
					'C (B1)': 566,
					'B (MB)': 582,
					'A (GMB)': 593
				},
				Barebow: {
					'H (A3)': 331,
					'G (A2)': 387,
					'F (A1)': 433,
					'E (B3)': 472,
					'D (B2)': 503,
					'C (B1)': 528,
					'B (MB)': 549,
					'A (GMB)': 565
				},
				Compound: {
					'H (A3)': 472,
					'G (A2)': 508,
					'F (A1)': 532,
					'E (B3)': 549,
					'D (B2)': 560,
					'C (B1)': 571,
					'B (MB)': 583,
					'A (GMB)': 594
				}
			}
		}
	}
};
