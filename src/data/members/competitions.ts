import Bird from '@iconify-svelte/lucide/bird';
import University from '@iconify-svelte/lucide/university';
import Trophy from '@iconify-svelte/lucide/trophy';
import Snowflake from '@iconify-svelte/lucide/snowflake';
import Sparkles from '@iconify-svelte/lucide/sparkles';

import type { Icon } from '$lib/util';

export const teamSelectionCriteria = [
	"**Drivers**: sometimes we'll need to drive to competitions, and will prioritise those who can help with that",
	'**Attendance**: preference will be given to those who regularly commit to training',
	'**Performance**: performance in previous competitions and target days will be taken into account if available',
	'**Demographic**: we strive to be representative of the club in terms of gender, bowstyle, experience level etc.'
];

export const squadCommitments = [
	'Attend coaching session every Wednesday morning',
	'Join Strength and Conditioning sessions weekly',
	'Attend at least one more training session each week besides the above',
	'Compete in at least 4 competitions (including Varsity) throughout the year'
];

export const squadPerks = [
	'Priority spots for competitions',
	'Subsidies for both entry fees and related travels',
	'Additional exclusive coaching to help you improve quickly',
	'Priority and reduced fee for bow rental',
	'Meeting & befriending other competitive archers, CUB and beyond!'
];

type Competition = {
	icon: Icon;
	name: string;
	desc: string[];
};

export const recurringComps: Competition[] = [
	{
		icon: Bird,
		name: 'TOUCAN league',
		desc: [
			'The TOUCAN league, formerly known as the BUTTS league, consists of a growing number of university archery clubs across England. Currently, member clubs include Cambridge, Birmingham, Derby, De Montfort, Loughborough, Nottingham, Nottingham Trent, and Oxford.',
			'TOUCAN hosts 3 legs at different universities during the indoor season, which is followed by the Indoors Championship and a Ball afterwards. There is also a TOUCAN Outdoor Championship that happens around May that we sometimes participate in, depending on member capacity.',
			'Notably, the first TOUCAN indoor leg usually happens around or right after the end of Michaelmas. Those who intend to participate should prepare accordingly. However, do not worry if you are unable to attend the first leg as there will be more, and the third leg usually happens at Cambridge!'
		]
	},
	{
		icon: University,
		name: 'BUCS',
		desc: [
			'BUCS, being the forefront of student sport events, holds some of the biggest student archery competitions across the UK.',
			'The Indoor Championships happen in Lent term, where Portsmouth rounds are shot, starting with the qualifiers in around February, and then the finals in March for those who successfully qualify. The Outdoor Championship on the other hand, is usually held in the summer around June, where WA rounds like the 70m/60m/50m and WA900 rounds are shot.',
			'Both events require qualifying scores to enter (yes, even before the indoor qualifiers), so you will need to have achieved the required score at a competition/target day by the time of registration. Note that for the indoor qualifiers, this means you will need to have shot for a qualifying score by the end of Michaelmas, so we would encourage anyone interested in joining BUCS indoors to attempt this either on a club target day or the TOUCAN leg 1.'
		]
	},
	{
		icon: Snowflake,
		name: 'Frosbite Grudge Match',
		desc: [
			'The Grudge Match, is an annual friendly match with our rival, the Oxford University Company of Archers, traditionally held by the side that is not hosting Varsity that year. This happens usually in February and is a frostbite round (i.e. it will be shot outdoors while it is still cold!) of 36 arrows at 30 yards.',
			"This is a regular low stakes, friendly match that anyone can join, so feel free to try it out if you're interested!"
		]
	},
	{
		icon: Sparkles,
		name: 'Varsity',
		desc: [
			'The Varsity Match against Oxford is the highlight of Easter term. We take turns with Oxford hosting this competition every year, and as of 2025, this has been going on for 75 years and counting!',
			'Historically, we shoot the the Albion (108 arrows total on 80, 60 and 50 yards) and Windsor (108 arrows total on 60, 50 and 40 yards) rounds for men and women respectively. All members are welcomed to participate, but only the top few scores for each category (3 from experienced open, 3 from experienced women, 4 from novices) are counted towards the final result.'
		]
	},
	{
		icon: Trophy,
		name: 'Cuppers (Inter-College match)',
		desc: [
			'We host a fun inter-college cuppers match at the end of each academic year. Archers are asked to pair up to form college teams though combined college teams are also welcomed if you fail to find a teammate from your own college. This is usually followed by a social to mark the end of the year and celebrate the end of exam season.'
		]
	}
];
