# Adding Images/Documents

Adding/Updating assets to the website is pretty simple, but there are a few rules you should follow to keep the codebase neat and the website running fast. Follow the steps detailed on this doc and you should be all set.

## :file_folder: Uploading to the `assets` Folder

All of our images and documents live in the `src/lib/assets` folder and are imported into files when needed. This allows us to take advantage of [Vite's built-in handling](https://svelte.dev/docs/kit/images#Vite's-built-in-handling) which helps improve performance.

If you are replacing an existing asset, first identify the current file in either `src/lib/assets/img` or `src/lib/assets/docs`, whichever applies. Then simply replace the file with the new one - make sure to keep the file name the same, otherwise you'll to find every place it's been referenced and update them.

If you are adding a new image/document, upload them to the correct folder and follow the next section to add them to the website.

## :arrow_right_hook: Importing the New Asset

The key here is to find the files relevant to where you want to link the document or show an image in and import them in the appropriate place. Below are a few scenario of common changes you might want to do with your new asset to help you get started.

### Scenario 1: Adding a new document to the Important Documents page

The content of this page is populated by the file `src/data/about/documents.ts`, import your new document on top of this file to start:

```typescript
// change the variable name and file name as appropriate
import yourNewDoc from '$lib/assets/docs/your-new-doc.pdf';
```

Then add your doc to the appropriate section in the `documents` variable:

```typescript
// for example, if this is a data policy related document
...
export const documents: Record<DocCategory, Doc[]> = {
    ...
    data: [
        ...
        // add the following
        {
            name: 'Your Document Name',
            file: yourNewDoc,
            // date when doc was writter/last updated
            lastUpdated: new Date(2000, 01, 01)
        },
        ...
    ]
    ...
}
...
```

### Scenario 2: Adding/replacing pictures on the front page carousel

The front page carousel is populated by the `src/data/home/carouselImages.ts` file. First, import your new image on the top of the file:

```typescript
// change the variable name and file name as appropriate
import yourNewImg from '$lib/assets/img/your-new-img.jpg';
```

Then, add the following to the `homeImages` array:

```typescript
export const homeImages: CarouselImage[] = [
    ...
    {
        path: yourNewImg,
        alt: 'Short caption describing your image'
    },
    ...
]
```

Note that the order of images in this list reflects the order in which they show up on the carousel. Move the items around in the list if you need to.

### Scenario 3: Adding pictures to a content page

As an example, let's say you want to add a nice picture of a recent social to the Socials page. Once again, we start by importing the image in the `routes/members/[subsection]/Socials.svelte` file.

```typescript
// change the variable name and file name as appropriate
import yourImgName from '$lib/assets/img/your-new-img.jpg';
```

Next, identify where you would like to add the image. For this example, let's say we want to add it at the end of the top section. So we'll add the image in the top `PageSection`, making use of the existing `CaptionedImage` component.

```jsx
...

<PageSection>
	...
    <CaptionedImage
		src={yourImgname}
		alt="Some caption"
		credit="Rachel Tam" // optional
	/>
</PageSection>

...
```

For more details on the various ways of displaying images, see the next section on image components.

## :framed_picture: Image Components

### The basic `img`

For the most basic, no-frills use cases, simply use the `img` tag as is. You can of course style the `img` as you need, but for the sake of design cohesion, it is recommended that you consider the below existing components before considering making your own custom design.

### `CaptionedImage`

<image src="../images/captioned_image_example.png" alt="An example of a CaptionedImage component as used in the live website" />

This is a simple image display component that comes with built in captioning and optional credits. This should be used for the majority of decorative image use cases and flows well with text blocks in `PageSection`. See below for an example:

```jsx
<script lang="ts">
    import CaptionedImage from '$components/common/CaptionedImage.svelte';
    import yourImgName from '$lib/assets/img/your-new-img.jpg';
</script>
...

<CaptionedImage
    src={yourImgname}
    alt="Some caption"
    credit="Rachel Tam" // optional
/>

...
```

### `Carousel`

<image src="../images/carousel_example.png" alt="An example of a Carousel component as used in the live website" />

We also have a useful carousel component for displaying multiple images in a row, with a separate design from the front page carousel to fit better with our standard content layouts. See below for an example use case:

```jsx
<script lang="ts">
    import Carousel from '$components/common/Carousel.svelte';

    import image1 from '$lib/assets/img/image1.jpg';
    import image2 from '$lib/assets/img/image2.jpg';
    import image3 from '$lib/assets/img/image3.jpg';
    import image4 from '$lib/assets/img/image4.jpg';

    const carouselImages = [
        { path: image1, alt: "Image 1 caption" },
        { path: image2, alt: "Image 2 caption" },
        { path: image3, alt: "Image 3 caption" },
        { path: image4, alt: "Image 4 caption" },
    ]
</script>
...

<Carousel
    images={carouselImages}
    ratio={0.5625} // represents aspect ratio, e.g. 9:16 is 0.5625

/>

...
```
