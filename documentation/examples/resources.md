# Editing the Resources Page

We have a sophisticated (well, more sophisticated than the rest of the site at least) system for resources to enable searching and systemic generation of the card components. We will look through how it works and what you need to do to edit/add new resources on this page. It is quite simple in most cases, just a little different from the rest of the codebase.

## :building_construction: Structure

The resources page is structured with a simple hierarchy of **resource category -> section -> item**. Each "category" will have its own heading and area, while each "section" will be a card, whereas each main point in the card is a "item". Please reference the `src/data/resources/types.ts` file to see the specifics on how this is typed.

Resource items can be divided into 3 types: simple items (i.e. non-links), internal links, or external links. They all work similarly, but internal link resources enforce stricter checks on the link url to ensure they exist on the site.

All resource items can have an `info` property, which is an array of strings, displayed as sub-points and used for resource items that need further description. We have a simple "rich text" parser implemented for `info` points to allow the use of bold text and links. They specific syntax is basically the same as markdown, except only bolding and links are processed at the moment. If you're not sure what that looks like, or you would like further details about the parser, please see the section below.

## :page_with_curl: Adding "Rich" Text

The logic for processing markdown syntax in strings is kept in the `RichText` component (file: `src/components/common/RichText.svelte`). Simply put, the current recognised syntax are as follows:

```typescript
'**bolded**'; // double asterisks for bold
'[label](url)'; // square and normal brackets for links

const exampleString =
	'Here are some normal text. **This is important.** For more information visit [link label](link url)';
```

The parser uses regex to find the special parts and separates them out to generate the relevant html for them. This is done to simplify the writing process for resource item details, as it can be more of a hassle to keep a neat reuseable data format if we need to accommodate html/jsx in the the overall `resources` variable. If you would like to alter the parsing logic, or add more rich text functionalities, please feel free to, though I would advise sticking closely to traditional markdown formatting to prevent steep learning curves/unreadable code.
