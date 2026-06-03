<script lang="ts">
	import { generateClassString, type Icon } from '$lib/util';
	import BowArrow from '@iconify-svelte/lucide/bow-arrow';

	import CalendarX from '@iconify-svelte/lucide/calendar-x';

	import Dumbbell from '@iconify-svelte/lucide/dumbbell';

	import Flag from '@iconify-svelte/lucide/flag';
	import PartyPopper from '@iconify-svelte/lucide/party-popper';
	import { SvelteDate } from 'svelte/reactivity';

	type Event = {
		start: { dateTime: string };
		end: { dateTime: string };
		summary: string;
	};

	type EventType = 'training' | 'snc' | 'social' | 'comp';

	type ConvertedEvent = {
		title: string;
		start: Date;
		end: Date;
		color: string;
		icon: Icon;
	};

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const eventTypeColor: Record<EventType, string> = {
		training: 'border-accent/80',
		snc: 'border-[#4C3549]',
		social: 'border-[#EAC964]',
		comp: 'border-secondary'
	};

	const eventTypeIcon: Record<EventType, Icon> = {
		training: BowArrow,
		snc: Dumbbell,
		social: PartyPopper,
		comp: Flag
	};

	const { schedule }: { schedule: Event[] } = $props();

	const convertedSchedule = $derived(
		schedule.map(({ start, end, summary }) => {
			const type: EventType =
				summary === 'SnC'
					? 'snc'
					: summary.toLowerCase().match(/training|seminar/)
						? 'training'
						: summary.toLocaleLowerCase().match(/social|dinner/)
							? 'social'
							: 'comp';
			return {
				title: summary,
				start: new Date(start.dateTime),
				end: new Date(end.dateTime),
				color: eventTypeColor[type],
				icon: eventTypeIcon[type]
			};
		})
	);

	let fullWeek: { date: string; monthYear: string; day: string; events: ConvertedEvent[] }[] =
		$derived(makeFullWeek(convertedSchedule));

	function makeFullWeek(allEvents: ConvertedEvent[]) {
		let curPointer = 0;
		const result = [];
		const today = new SvelteDate();
		today.setHours(0, 0, 0);

		for (let i = 0; i < 7; i++) {
			const d = new Date(today.getTime() + i * 86400000);
			const todayTime = d.getTime();
			const tmrTime = d.getTime() + 86400000;
			const events: ConvertedEvent[] = [];
			let nextEventTime =
				curPointer >= allEvents.length ? 0 : allEvents[curPointer].start.getTime();

			while (nextEventTime >= todayTime && nextEventTime < tmrTime) {
				events.push(allEvents[curPointer]);
				curPointer += 1;
				nextEventTime = curPointer >= allEvents.length ? 0 : allEvents[curPointer].start.getTime();
			}

			result.push({
				date: d.getDate() < 10 ? `0${d.getDate()}` : d.getDate().toString(),
				monthYear: `${months[d.getMonth()]} ${d.getFullYear() % 100}`,
				day: days[d.getDay()],
				events
			});
		}

		return result;
	}
</script>

<div class="grid gap-2 w-full md:max-w-150">
	{#each fullWeek as { date, events, monthYear, day }, i (i)}
		<div class={`flex border border-primary ${events.length ? 'bg-base-200' : 'bg-neutral/10'}`}>
			<div class="flex justify-center items-center flex-col p-4 bg-info text-base-200">
				<div class="md:text-base text-bold opacity-70 uppercase text-sm">
					{day}
				</div>
				<div class="md:text-xl text-lg font-bold">{date}</div>
				<div class="uppercase text-xs opacity-70">{monthYear}</div>
			</div>
			<div class="grow p-2">
				{#each events as event, j (j)}
					<div
						class={generateClassString(
							'bg-base-300',
							'px-4',
							'py-2',
							'flex',
							'items-center',
							'border-l-10',
							event.color
						)}
					>
						<div class="flex flex-col">
							<span class="font-semibold flex gap-2 items-center"
								><event.icon height="1rem" />{event.title}</span
							>
							<span class="opacity-90"
								>{`${event.start.getHours()}:${event.start.getMinutes()} - ${event.end.getHours()}:${event.end.getMinutes()}`}</span
							>
						</div>
					</div>
				{/each}
				{#if !events.length}
					<div class="h-full flex items-center ml-4">
						<div class="flex text-sm gap-2 items-center">
							<CalendarX height="1.5rem" class="shrink-0" /><span class="text-nowrap"
								>No sessions</span
							>
						</div>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
