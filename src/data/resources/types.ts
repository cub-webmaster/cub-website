import type { ResolvedPathname } from '$app/types';
import type { Icon } from '$lib/util';

interface ResourceItemBase {
	title: string;
	url: string;
	external: boolean;
	info?: string[];
}

interface InternalResourceItem extends ResourceItemBase {
	external: false;
	url: ResolvedPathname;
}

interface ExternalResourceItem extends ResourceItemBase {
	external: true;
}

export type ResourceItem = InternalResourceItem | ExternalResourceItem;

export interface ResourceSection {
	title: string;
	items: ResourceItem[];
	id: string;
}

export interface ResourceCategory {
	title: string;
	id: string;
	sections: ResourceSection[];
	icon: Icon;
}
