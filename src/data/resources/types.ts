import type { ResolvedPathname } from '$app/types';
import type { Icon } from '$lib/util';

interface ResourceItemBase {
	title: string;
	info?: string[];
	external?: boolean;
	url?: string;
}

interface InternalResourceItem extends ResourceItemBase {
	external: false;
	url: ResolvedPathname;
}

interface ExternalResourceItem extends ResourceItemBase {
	external: true;
	url: string;
}

interface NonLinkResourceItem extends ResourceItemBase {
	external?: undefined;
	url?: undefined;
}

export type ResourceItem = InternalResourceItem | ExternalResourceItem | NonLinkResourceItem;

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
