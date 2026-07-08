# Introduction

This page details all of the key, basic knowledge and best practices you need for working with this codebase. Please also acquaint yourself with the content in the [hosting documentation](hosting.md) once you are comfortable with what is detailed here.

## :building_construction: Structure/Where things are

The main code needed for day-to-day maintenance are found in `src`. Here, there are 4 main directories:

- `routes` - which determine the url routes of the website and the contents shown on each route
- `components` - where reusable design elements go
- `lib` - where reusable non-design code goes, as well as the images and documents hosted on the site
- `data` - where all regularly changing information and repetitive lists of data go

This codebase is written with a relatively strict DRY (don't repeat yourself) philosophy, so often times repeating elements live in the `components` directory, with their corresponding data in the `data` directory, instead of clogging the files in `routes` with too much repetition. This is also why we use the dynamic slugs for rendering subsections, as that would allow reuse of layout elements more effectively and reduce repetition.

<!-- TODO add pic -->

When trying to identify where an edit needs to be made, first look for the relevant page under `routes`. If you're looking to make changes to unique text content, then you can do it directly in the file.

However, if you may find that the relevant data/component is in another file. In this case, you should identify the relevant parent section (e.g. Join or About) and find the folder of that name under either `components` or `data`. Future webmasters are also encouraged to keep this pattern of using the url routes structure in these to directories when creating new files. This will ensure that the codebase stays organised and that things are easy to find.

<!-- TODO add pic -->

If you are finding this daunting, there are some guidance of where you need to make edits for common tasks can be found in the [last section](#common). Use these are examples to familiarise yourself with the codebase before you make important edits.

## :octocat: Working with Git & GitHub

This documentation is mostly written with assumption of basic Git knowledge i.e. you understand stuff like committing, pushing and pulling from remote repositories on GitHub. If you aren't comfortable with that I would recommend reading [this](https://cloud-and-devops.hashnode.dev/git101-abeginnersguideforgit) to start.

Usually, all you would need are the following:
```bash
# include file to next commit
git add <filename>

# make commit with message
git commit -m <message>

# push local changes to GitHub
git push

# sync local repo with GitHub
git pull

```

If you are using vscode, using the graphic interface provided might also be more comfortable than using the command line.

<!-- TODO add pic -->

Beyond the general stuff, there is one basic rule that I need all webmasters to respect: **DO NOT commit or push directly into the `live` branch.**

All development and edits should happen on the `main` branch (or preferably a feature branch if you're comfortable with that). Once you are done, please open a pull request (PR) from the `main` branch to `live` when you are ready to deploy your changes - this will run automatic checks to help with spot issues before it reaches the live site, and also make a test deployment to ensure there will be no issues when pushing to the live site.

If you need guidance on how to open a pull request on GitHub, please read more here.

Only merge the branch into `live` once the checks have passed you've double checked the test deployment for issues.

> [!CAUTION]
> The strict settings that protect the `live` branch are there for a reason, do not change them unless you know what you're doing (and especially do not do that just because an LLM tells you to)

## :artist: Key Design Elements

### Colours
The main colour palette used on this website are as follows:

- **Primary** - ![#cae3d2](https://placehold.co/15x15/cae3d2/cae3d2.png) `#cae3d2 (light cam blue)`
- **Secondary** - ![#85b09a](https://placehold.co/15x15/85b09a/85b09a.png) `#85b09a (cam blue)`
- **Accent/Red** - ![#dd3025](https://placehold.co/15x15/dd3025/dd3025.png) `#dd3025 (cam red?)`
- **Info/Brown** - ![#594236](https://placehold.co/15x15/594236/594236.png) `#594236`
- **Light Base** - ![#fdfcf7](https://placehold.co/15x15/fdfcf7/fdfcf7.png) `#fdfcf7`
- **Base** - ![#fcfaf2](https://placehold.co/15x15/fcfaf2/fcfaf2.png) `#fcfaf2`
- **Dark Base** - ![#f6efd6](https://placehold.co/15x15/f6efd6/f6efd6.png) `#f6efd6`
- **Neutral/Black** - ![#2e282a](https://placehold.co/15x15/2e282a/2e282a.png) `#2e282a`
- **Success/Blue** - ![#21467d](https://placehold.co/15x15/21467d/21467d.png) `#21467d`
- **Warning/Yellow** - ![#eac964](https://placehold.co/15x15/eac964/eac964.png) `#eac964`
- **Error** - ![#fec8c8](https://placehold.co/15x15/fec8c8/fec8c8.png) `#fec8c8`
- **Green** - ![#6aa56f](https://placehold.co/15x15/6aa56f/6aa56f.png) `#6aa56f`
- **Purple** - ![#412e6d](https://placehold.co/15x15/412e6d/412e6d.png) `#412e6d`

These colours (other than the last 2) are already in the website theme specified in `src/app.css` and can be accessed via the relevant classes using their semantic name e.g. `bg-primary` for light cam blue backgrounds.

### Icons
We use [lucide icons](https://lucide.dev/) for this website (but through [iconify](https://icon-sets.iconify.design/lucide/) for faster building), so look at their icons catalogue if you would like to add icons to any content while maintaining the same look and feel.

### Other Important Design Elements
There are a few elements to work together to make the entire website look cohesive. Succinctly, they are
- sharp corner on boxes
- slightly darker background and light cam blue borders on most boxes
- consistent section heading look (red thick partial underline)
- consistent use of colours and icons

As long as you follow these few rules changes to the design of the site should stay somewhat cohesive. All that is left is experimenting with what looks good. That said, the design shouldn't need to be changed too frequently and a consistent design helps visitors recognise us. So keep that in mind before making any changes + stick to the rules and you should be all set!

## :link: Offsite Data

We have some data hosted off-site (mostly in the webmaster Google Drive) either for ease of edit by the committee or to avoid cluttering the website. These are currently as follows:

- **Archive** - all items in webmaster Google Drive. Includes Purple Badge Holder records, old website blogs, past meeting minutes etc.
- **Club Records** - now in a Google Sheets for ease of edit by Records Officer.
- **AGB Membership Guide** - Google Docs for ease of edit by Secretary.
- **Warm-up Guides** - Google Docs + pdf in Google Drive
- **Google Calendar** - Not strictly for the purpose of access from website, but the data of the calendar is reflected in the website

Please monitor and prompt fellow committee members to keep these up to date (when applicable) as part of your work.

<a name="common" />

## :memo: Common Maintenance Tasks

- [Updating committee information](documentation/examples/committee.md)
- [Adding new images/documents](documentation/examples/images_docs.md)
- [Changing the wording of existing pages](documentation/examples/wording.md)
- [Opening signup for Beginners' Course](documentation/examples/beginners.md)
- [Editing resources page](documentation/examples/resources.md)
