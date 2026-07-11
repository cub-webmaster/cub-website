# Updating the Committee Page

A new committee is always exciting, and its really important that we keep the website up to date so members and site visitors can recognise the people managing the club this year. See below for the full guide of how to do this.

## :crown: Positions and Names

Firstly, to input the basic information + positions of the new members, go to `src/data/about/committee.ts`. Here you will find a variable called `committeePositions`. This object defines all available committee positions and their relevant title text, email as well as the section they go into (i.e. core or comms etc.) If you need to change a committee position's name, email, or even add a new one, add them here. Otherwise, just take note of the key of each position as you will need to use them later.

```typescript
export const committeePositions: Record<string, Position> = {
    ...
	captain: {
		title: 'Captain', // e.g. change this to 'Co-Captain' if there are multiple for that year
		email: 'captain@cubowmen.com',
		type: 'core' // you could also change this to another CommitteeType defined in the same file
	}
    ...
}
```

For actually setting the names and colleges for the new committee members, move on to the `committeeMembers` variable. Edit this array to list out all the new members and their positions in the format shown below:

```typescript
export const committeeMembers: CommitteeMember[] = [
    ...
	{
		position: committeePositions.webmaster,
		name: 'Rachel Tam',
		college: "Christ's"
	},
    ...
]
```

Note that the `committeeMembers` variable only accepts positions defined in `committeePositions` so make sure you use the correct key for the relevant positions.

There are also no restrictions on how many of each position there needs to be in the current code, so you should be able to just use the same position multiple times where necessary.

## :camera: Individual Photos

Once that's all done, you might want to add in the individual photos for the committee members. To do this, first upload the pictures into `src/lib/assets/img/committee` - make sure they are named appropriately, e.g. by the member's name or position. Then import each image into the `src/data/about/committee.ts` file and set it as the image attribute for the relevant committee. See below for an example:

```typescript
import rachelPhoto from "$lib/assets/img/committee/rachel.jpg"

...

export const committeeMembers: CommitteeMember[] = [
    ...
	{
		position: committeePositions.webmaster,
		name: 'Rachel Tam',
		college: "Christ's",
        image: rachelPhoto // add photo here
	},
    ...
]

```

Note that we have a picture called `generic.jpg` in the committee folder to be used for committee members who don't want their photos on the website. This picture of a boss with arrows on it is what is shown if the `image` property is not set for a specific committee member.

> [!TIP]
> Don't forget to delete the photos of last year's committee members while you're doing this! Unnecessary images in the code can make building and loading the site slower.
