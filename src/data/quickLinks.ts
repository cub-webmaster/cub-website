import type { ExternalNav } from "./navigation.svelte";
import links from "./links";

const quickLinks: ExternalNav[] = [ 
    links.signup,
    links.calendar
].map(({ url, label }) => { return { link: url, label, external: true }})

export default quickLinks;