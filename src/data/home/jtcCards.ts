import { resolve } from "$app/paths";
import type { ResolvedPathname } from "$app/types";
import { Sparkle, Dumbbell, BowArrow } from "@lucide/svelte";
import type { Component } from "svelte";

const landingCardsContent: { title: string; icon: Component, items: {text: string, href: ResolvedPathname}[] }[] = [
		{
			title: 'Join',
			icon: Sparkle,
            items: [
                {
                    text: "As a Beginner",
                    href: resolve("/join/beginners")
                },
                {
                    text: "As an Experienced Archer",
                    href: resolve("/join/experienced")
                },
                {
                    text: "As a University Staff/Alumni",
                    href: resolve("/join/staff-alum")
                }
            ]
		},
		{
			title: 'Train',
			icon: Dumbbell,
            items: [
                {
                    text: "See Training Schedule",
                    href: resolve("/members/training#calendar")
                },
                {
                    text: "Training Resources",
                    href: resolve("/resources#training-aids")
                },
                {
                    text: "Equipment Help",
                    href: resolve("/resources#equipment")
                }
            ]
		},
		{
			title: 'Compete',
			icon: BowArrow, 
            items: [
                {
                    text: "Current Tournaments",
                    href: resolve("/members/tournaments")
                },
                {
                    text: "Awards and Badges",
                    href: resolve("/members/awards")
                },
                {
                    text: "Past Fixtures & Records",
                    href: resolve("/resources#records")
                }
            ]
		}
	];

export default landingCardsContent