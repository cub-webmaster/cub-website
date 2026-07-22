# Miscellaneous Ramblings

This is where I'm documenting thoughts and info that don't necessary fit elsewhere. Mostly off-site things and some random, more advanced stuff that don't fit in the Introductions doc.

## :hammer: Building and Prerendering

Building is the process of basically converting the website code into something easier to work with for the server (as opposed to its current form, which prioritises ease of use for humans). Part of the building process that helps make the site fast is **prerendering**. More advanced webmaster may want to read up on [prerendering](https://svelte.dev/docs/kit/glossary#Prerendering) and [other SvelteKit build configurations](https://svelte.dev/docs/kit/configuration).

Most importantly, this knowledge is applicable on how we handle subsections in this codebase. We use dynamic slugs which help us reuse more layout elements and keep the code DRY, but it also means SvelteKit does not consider those pages static and will not prerender them.

However, most of our pages are, in fact, static with the exception of the training page which dynamically pings the Google Calendar. This is why we have to manually set up prerendering i.e. exporting `prerender = true` in the root layout and using entry generators in the subsection pages/page serveres. This is also the reason why the members section `+page.server.ts` are so much more complex than the rest.

## :closed_lock_with_key: User Information and Access Control

For the ease of maintenance and preventing this codebase from becoming to complex for future webmasters (and also keeping you from unnecessary headaches), I have deliberately removed and would advice against all on-site user records and access control. Requiring login is a big bag of worms that can be a pain to keep secure + working so the longer we can avoid that the better.

However, in cases where you do require user info or ease of editing by other committee members, I recommend using your tool of choice in the Google Suite.

As of the time of writing this, I keep the archive as a folder under the webmaster Google Drive, and the club records, which need to be easily accessible by the Records Officer, are kept as a Google Sheets which edit access granted to the records account. These are then linked on the website so people can access them easily when browsing our other information.

Importantly, stuff like Google Docs are much easier to manage access rights with and removes the bottleneck of the committee needing to ask the webmaster for frequent edits. Not to mention Google Forms allowing quicker and easier access to collercted data by the rest of the committee. So please default to third party tools and stay away from login functionalities as long as you can help it.

## :wrench: Codespace Configurations

The GitHub codespace is currently setup such that in the case of a less experienced webmaster/absence of a webmaster, someone unfamiliar with coding/web dev can make simple edits easily with minimal setup.

Currently, it is configured with automatic dependency installations as well as some useful extensions. If you have thoughts on other things that might make life easier for a newbie webmaster do add them in.

## :key: Google Cloud Console and API Key

We also have an account on Google Cloud Console which is where we set up the API key needed to access Google Calendar. This is set up with very minimal access rights, but it is still best practice to keep it secret. If at any point you need to access/change this key, please just log in via the webmaster google account.

As of the time of writing, this can be found in the `APIs and services` page, under the `Credentials` section.
