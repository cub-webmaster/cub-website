# Finding and Changing Text

Maintaining this website is just about changing some text and data for the majority of the time. This guide takes you through how to find and change text in a few different scenario. Note that if you're looking to edit the content of the resources page, we have a separate guide [here](resources.md).

## :page_with_curl: Main Content Texts

The main text of each page can usually be found easily under `src/routes`, with the specific location corresponding to the page url. (e.g. to find the beginners page has url `join/beginners` and the relevant file is `src/routes/join/[subsection]/Beginners.svelte`).

Once you're in the right file, you would want to look for the correct `PageSection`. Usually the first one would be unnamed, and the rest would have `headingText` properties that corresponding to the heading you can see on the page.

If you intend to create a new `PageSection` for your edits, note that you also have to give it a unique id to enable auto scrolling from the side navigation.

If you are unfamiliar with html, the `<p></p>` tags help separate the text into their own paragraphs. Make sure to put your text between `p` tags to keep them formatted as you intend.

## :link: Links Component

The text in some components, particularly the links in this codebase are usually set as component properties, e.g:

```jsx
<Link href={links.beginners_form.url} label="here" external />
```

In this case the `label` property is the text being displayed. If you are having trouble finding where to make the edit you want, you might want to check if it might be part of a component's property instead of the main text blocks. Searching the codebase might also help.

For changing the actual url the link leads to, you would want to check the key referenced in the relevant `Link` component (the `href` property) and change the url in `src/data/links.ts` this will allow all references of the link to be updated at the same time.

## :arrows_counterclockwise: Repetitive Components

For more repetitive components e.g. the FAQ accordian in the front page, the texts are generally set in a file under `src/data`. As mentioned in the [introductory doc](../basics.md#️-structurewhere-things-are), you should be able to find what you need based on which parent section (e.g. Join/Members/About) the data belongs to.

Using the FAQ example, you can add a new question/answer by going to `src/data/home/faq.ts` and editing the `landingPageFaqs` variable.

Similarly, for changing information about the badges, you would want to update the relevant objects in `src/data/members/badges.ts`.

It is also just worth looking the the relevant data files if you are having trouble finding the content you want to change in the main text files.

## :world_map: Navigation Related

If you need to change anything related to navigation, e.g. the navbar or section menus, you will need to use the `src/data/navigation.ts` file. Here you can edit section/subsection names, subsection url slugs, subsection descriptions and so on.

These are then imported across the website to generate the navbar, side navigation etc. so they should all change automatically. Note however that, if you changed the subsection slugs, you will need to update the main `[subsection]/+page.svelte` of the relevant section, to ensure the new slug points to the intended content.

> [!WARNING]
> While it is not horribly disruptive, you should avoid changing the slugs unless absolutely necessary as it could adversely affect SEO of the site, you might also consider setting up redirecting from the old slug to the new if it needs to be done.
