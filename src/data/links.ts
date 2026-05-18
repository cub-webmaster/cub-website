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
	wa_rules: { url: 'https://www.worldarchery.sport/rulebook', label: 'World Archery Rulebook' }
};

export default links;
