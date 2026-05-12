import { resolve } from '$app/paths';
import type { ResolvedPathname } from '$app/types';

interface NavbarItem {
		route: ResolvedPathname;
		label: string;
		children?: NavbarItem[];
		external?: boolean;
	}

export const navItems: NavbarItem[] = [
    {
        route: resolve('/join'),
        label: 'Join',
        children: [
            {
                route: resolve('/join/beginners'),
                label: 'Beginners'
            },
            {
                route: resolve('/join/experienced'),
                label: 'Experienced Archers'
            }
        ]
    },
    {
        route: resolve('/resources'),
        label: 'Resources'
    }
];