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
            email: "captain@cubowmen.com",
            name: "Amber Holt",
            college: "Queen's"
        },
        {
            position: "Secretary",
            email: "secretary@cubowmen.com",
            name: "Emily Naden",
            college: "Peterhouse"
        },
        {
            position: "Treasurer",
            email: "treasurer@cubowmen.com",
            name: "Luke Vogt",
            college: "St. Edmund's"
        }
    ],
    "welfare": [
        {
            position: "Welfare Officer",
            email: "welfare@cubowmen.com",
            name: "Alex Germain",
            college: "Pembroke"
        },
        {
            position: "Safety Officer",
            email: "safety@cubowmen.com",
            name: "Diana Galvan Sosa",
            college: "N/A (staff)"
        },
        // women's
        
    ],
    "shooting": [
        //equipment
        {
            position: "Tournaments Officer",
            email: "tournaments@cubowmen.com",
            name: "Alex Mappleback",
            college: "Churchill"
        },
        {
            position: "Novice Officer",
            email: "novice@cubowmen.com",
            name: "Sriyashas Mohan-Kalluri",
            college: "King's"
        },
        {
            position: "Development Officer",
            email: "development@cubowmen.com",
            name: "Pegah Abyaneh",
            college: "Gonville and Caius"
        }
    ],
    "comms": [
        // social secretary
        //publicity
        {
            position: "Alumni Officer",
            email: "alumni@cubowmen.com",
            name: "Rachel Tam",
            college: "Christ's (alumni)"
        },
        {
            position: "Webmaster",
            email: "webmaster@cubowmen.com",
            name: "Rachel Tam",
            college: "Christ's (alumni)"
        }
    ]
}

