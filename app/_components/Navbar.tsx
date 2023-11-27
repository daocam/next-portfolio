'use client';

import { Layers } from 'lucide-react';
import Link from 'next/link.js';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between p-8 border border-slate-100 bg-white/50 drop-shadow-sm backdrop-blur-lg rounded-2xl">
			<Link
				className="text-base lg:text-3xl flex items-center gap-2 lg:gap-4"
				href="/"
			>
				<Layers className="h-4 w-4 lg:h-8 lg:w-8" />
				<span className="font-semibold">Daouda Camara</span>
			</Link>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem className="hidden lg:inline-flex">
						<Link
							href="#aboutme"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={ navigationMenuTriggerStyle({ className: 'bg-transparent hover:bg-white' }) }>
								Who is Daouda?
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className="hidden lg:inline-flex">
						<Link
							href="#projects"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={ navigationMenuTriggerStyle({ className: 'bg-transparent' }) }>
								Projects
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className="hidden lg:inline-flex">
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