import links from "$data/links"
import { BowArrow, Flag, HeartHandshake } from "@lucide/svelte"
import type { ResourceCategory } from "./types"

export const resources: ResourceCategory[] = [
    {
        title: "Shooting",
        id: "shooting",
        icon: BowArrow,
        sections: [
            {
                id: "general",
                title: "General",
                items: [
                    {
                        title: "Etiquette and rules of shooting",
                        url: "",
                        external: true
                    },
                    {
                        title: "Sessions signup",
                        url: links.signup.url,
                        external: true,
                        info: [
                            "Only open to full members (i.e. completed beginners' course/induction for experienced archers",
                            "Note that you will need to indicate which club bow you intend (if any) to use to ensure availability"
                        ]
                    },
                ]
            },
            {
                id: "training",
                title: "Training aids",
                items: [
                    {
                        title: "Warm-ups",
                        url: "",
                        external: true
                    },
                ]
            },
            {
                id: "equipment",
                title: "Equipment",
                items: [
                    {
                        title: "Clickers Archery",
                        url: links.clickers.url,
                        external: true,
                        info: [
                            "Archery equipment shop with a long-time relationship with CUB",
                            "Situated at Norwich",
                            "Recommended for in-person shopping and bow fitting"
                        ]
                    },
                    {
                        title: "Merlin Archery",
                        url: links.merlin.url,
                        external: true,
                        info: [
                            "Archery equipment shop with a great online catalogue",
                        ]
                    }
                ]
            }
        ]
    }, 
    {
        icon: Flag,
        title: "Competitions and Records",
        id: "comps",
        sections: [
            {
                id: "general",
                title: "General Knowledge",
                items: [
                    {
                        title: "Rounds",
                        url: "",
                        external: true
                    }
                ]
            },
            {
                id: "recurring",
                title: "Recurring Competitions",
                items: [
                    {
                        title: "TOUCAN",
                        url: "",
                        external: true,
                    },
                    {
                        title: "BUCS",
                        url: "",
                        external: true
                    }
                ]
            }
        ]
    }, 
    {
        icon: HeartHandshake,
        title: "Welfare",
        id: "welfare",
        sections: [
            {
                id: 'general',
                title: "General",
                items: [
                    {
                        title: "Welfare Policy",
                        url: "",
                        external: true
                    }
                ]
            }
        ]
    }
]