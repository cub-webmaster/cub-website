interface Link {
	url: string;
	label: string;
}

const links: Record<string, Link> = {
	instagram: { url: 'https://www.instagram.com/camuniarchery/', label: 'CUB instagram' },
	facebook: { url: 'https://www.facebook.com/camuniarchery/', label: 'CUB facebook' },
	twitter: { url: 'https://twitter.com/CamUniArchery', label: 'CUB twitter(X)' },
	donate: {
		url: 'https://www.philanthropy.cam.ac.uk/give-to-cambridge/cambridge-university-bowmen-club',
		label: 'Donate'
	},
	signup: {
		url: 'https://www.eventbrite.co.uk/e/cub-training-sessions-tickets-1981018056334',
		label: 'Sessions Signup'
	},
	calendar: {
		url: 'https://calendar.google.com/calendar/u/4?cid=ZWRyMGxoZ3Q5cW1sYjFqdmU5MHI4c2lvcDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
		label: 'CUB Calendar'
	},
	merlin: { url: 'https://www.merlinarchery.co.uk/', label: 'Merlin Archery' },
	clickers: { url: 'https://www.clickersarchery.co.uk/', label: 'Clickers Archery' },
	wa_rules: { url: 'https://www.worldarchery.sport/rulebook', label: 'World Archery Rulebook' },
	caa_contact: { url: 'archer9453@yahoo.co.uk', label: 'John Gorman' },
	captain_email: { url: 'captain@cubowmen.com', label: 'Captain Email' },
	secretary_email: { url: 'secretary@cubowmen.com', label: 'Secretary Email' },
	treasurer_email: { url: 'treasurer@cubowmen.com', label: 'Treasurer Email' },
	alumni_email: { url: 'alumni@cubowmen.com', label: 'Alumni Officer Email' },
	tournaments_email: { url: 'tournaments_email@cubowmen.com', label: 'Tournaments Officer Email' },
	development_email: { url: 'development@cubowmen.com', label: 'Development Officer Email' },
	webmaster_email: { url: 'webmaster@cubowmen.com', label: 'Webmaster Email' },
	safety_email: { url: 'safety@cubowmen.com', label: 'Safety Officer Email' },
	novice_email: { url: 'novice@cubowmen.com', label: 'Novice Officer Email' },
	welfare_email: { url: 'welfare@cubowmen.com', label: 'Welfare Officer Email' },
	equipment_email: { url: 'equipment@cubowmen.com', label: 'Equipment Officer Email' },
	committee_email: { url: 'committee@cubowmen.com', label: 'Committee Email' },
	social_email: { url: 'social@cubowmen.com', label: 'Social Secretary Email' },
	agb_sport80: { url: 'https://agb.sport80.com', label: 'AGB Sport 80 Platform' },
	agb_guide: { url: '#', label: 'AGB Membership guide' },
	history_1950s: {
		url: 'https://archivesearch.lib.cam.ac.uk/repositories/2/archival_objects/11290',
		label: 'Proof of CUB existence since at least the 1950s'
	},
	history_1862: {
		url: 'https://archivesearch.lib.cam.ac.uk/repositories/2/archival_objects/11289',
		label: 'Proof of Archery Club in 1862'
	},
	cc_attribution_sharealike: {
		url: 'https://creativecommons.org/licenses/by-sa/4.0/',
		label: 'Attribution-ShareAlike 4.0 International'
	},
	wa_arrow_awards_manual: {
		url: 'https://documents.worldarchery.sport/?doc=825',
		label: 'WA Arrow Awards Manual'
	},
	wa_arrow_awards_curriculum: {
		url: 'https://extranet.worldarchery.org/documents/index.php/documents/?doc=4658',
		label: 'WA Arrow Awards Curriculum'
	},
	english_crosses_form: {
		url: 'https://archeryengland.org/wp-content/uploads/2024/07/Senior-Cross-application2024.pdf',
		label: 'English Crosses Form'
	},
	english_crosses_email: {
		url: 'crosses@archeryengland.org',
		label: 'Archery England email for English Crosses'
	},
	agb_indoor_classifications: {
		url: 'https://archerygb.org/resources/indoor-classifications-and-handicaps',
		label: 'AGB guidance on Indoor Classifications and Handicaps'
	},
	agb_outdoor_classifications: {
		url: 'https://archerygb.org/resources/outdoor-classifications-and-handicaps',
		label: 'AGB guidance on Indoor Classifications and Handicaps'
	},
	archery_calculator: {
		url: 'https://www.archerycalculator.co.uk/',
		label: 'Archery calculator'
	}
};

export default links;
