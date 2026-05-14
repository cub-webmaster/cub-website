<script lang="ts">

    import { resolve } from "$app/paths";
	import type { ResolvedPathname } from "$app/types";

    const { parentLink, parentLabel, pageLabel }: {parentLink: ResolvedPathname, parentLabel: string, pageLabel: string} = $props()
</script>

<div class="breadcrumbs text-sm">
  <ul>
    <li><a class="link-secondary" href={ resolve("/") }><b>Home</b></a></li>
    <li><a class="before:text-neutral link-secondary" href={ parentLink }><b>{parentLabel}</b></a></li>
    <li class="text-info"><b>{pageLabel}</b></li>
  </ul>
</div>