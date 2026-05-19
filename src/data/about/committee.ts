import links from "$data/links";

export type CommitteeType = "core" | "welfare" | "comms" | "shooting";

export interface CommitteeMember {
    image?: string,
    name: string,
    email: string,
    college: string,
    position: string
}

export const committeeTypeLabels: Record<CommitteeType, string> = {
    "core": "Core",
    "welfare": "Welfare",
    "shooting": "Shooting",
    "comms": "Comms and Events",

}

export const committee: Record<CommitteeType, CommitteeMember[]> = {
    "core": [
        {
            position: "Captain",
            email: links.captain_email.url,
            name: "Amber Holt",
            college: "Queen's"
        },
        {
            position: "Secretary",
            email: links.secretary_email.url,
            name: "Emily Naden",
            college: "Peterhouse"
        },
        {
            position: "Treasurer",
            email: links.treasurer_email.url,
            name: "Luke Vogt",
            college: "St. Edmund's"
        }
    ],
    "welfare": [
        {
            position: "Welfare Officer",
            email: links.welfare_email.url,
            name: "Alex Germain",
            college: "Pembroke"
        },
        {
            position: "Safety Officer",
            email: links.safety_email.url,
            name: "Diana Galvan Sosa",
            college: "N/A (staff)"
        },
        // women's
        
    ],
    "shooting": [
        //equipment
        {
            position: "Tournaments Officer",
            email: links.tournaments_email.url,
            name: "Alex Mappleback",
            college: "Churchill"
        },
        {
            position: "Novice Officer",
            email: links.novice_email.url,
            name: "Sriyashas Mohan-Kalluri",
            college: "King's"
        },
        {
            position: "Development Officer",
            email: links.development_email.url,
            name: "Pegah Abyaneh",
            college: "Gonville and Caius"
        }
    ],
    "comms": [
        // social secretary
        //publicity
        {
            position: "Alumni Officer",
            email: links.alumni_email.url,
            name: "Rachel Tam",
            college: "Christ's (alumni)"
        },
        {
            position: "Webmaster",
            email: links.webmaster_email.url,
            name: "Rachel Tam",
            college: "Christ's (alumni)"
        }
    ]
}

