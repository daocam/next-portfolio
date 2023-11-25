'use client';

import { Layers } from 'lucide-react';
import Link from 'next/link.js';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between p-8 border border-slate-100 bg-white/50 drop-shadow-sm backdrop-blur-lg rounded-2xl">
			<Link
				className="text-3xl flex items-center gap-4"
				href="/"
			>
				<Layers size="32" />
				<span className="font-semibold">Daouda Camara</span>
			</Link>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link
							href="#aboutme"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={ navigationMenuTriggerStyle({ className: 'bg-transparent' }) }>
								Who is Daouda?
							</NavigationMenuLink>
						</Link>
						<Link
							href="#projects"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={ navigationMenuTriggerStyle({ className: 'bg-transparent' }) }>
								Projects
							</NavigationMenuLink>
						</Link>
						<Link
							href="https://linkedin.com/in/daouda-camara-bf"
							target="_blank"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={ navigationMenuTriggerStyle({ className: 'bg-primary text-white hover:bg-primary-foreground' }) }>
								Work together
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	);
};

export default Navbar;