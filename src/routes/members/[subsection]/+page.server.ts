import { subsectionPageLoadFunction, subsectionEntryGenerator } from '$lib/util';
import { membersSection } from '$data/navigation';
import type { PageServerLoad } from './$types';
import { calendar } from '@googleapis/calendar';
import { GOOGLE_API_KEY } from '$env/static/private';

export const prerender = 'auto';
export const entries = subsectionEntryGenerator(membersSection, ['training']);

export const load: PageServerLoad = async ({ params }) => {
	if (params.subsection === 'training') {
		const api = calendar({
			version: 'v3',
			auth: GOOGLE_API_KEY
		});

		const today = new Date();
		today.setHours(0, 0, 0);
		const nextWeek = new Date(today.getTime() + 604800000);

		const events = await api.events.list({
			calendarId: 'edr0lhgt9qmlb1jve90r8siop8@group.calendar.google.com',
			timeMin: today.toISOString(),
			timeMax: nextWeek.toISOString(),
			singleEvents: true,
			orderBy: 'startTime'
		});

		return {
			schedule: events.data.items,
			...subsectionPageLoadFunction(membersSection, params.subsection)
		};
	}

	return subsectionPageLoadFunction(membersSection, params.subsection);
};
