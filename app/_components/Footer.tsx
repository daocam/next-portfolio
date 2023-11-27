import { Layers } from 'lucide-react';
import Link from 'next/link.js';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {

	const currentYear = new Date().getFullYear();

	return (
		<footer className="px-2 w-full lg:container lg:m-auto lg:px-8">
			<Separator orientation="horizontal" />
			<div className="grid grid-cols-1 lg:grid-cols-12 pt-8 pb-8 lg:pb-16">
				<div className="lg:col-start-1 lg:col-span-6 flex flex-col justify-between items-start">
					<Link 
						className="flex items-center gap-4" 
						href="/"
					>
						<Layers size="64" />
						<span className="flex flex-col">
							<span className="text-4xl font-semibold">Daouda Camara</span>
							<span className="text-lg">© { currentYear }</span> 
						</span>
					</Link>
					<Button 
						variant="link"
						asChild
					>
						<Link href="/legal-notice">
							Legal Notice
						</Link>
					</Button>
				</div>
				<nav className="hidden lg:block lg:col-start-7 lg:col-span-3">
					<ul>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="/"
									scroll={ false }
								>
									Who is Daouda?
								</Link>
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link href="/">
									Projects
								</Link>
							</Button>
						</li>
						<li></li>
					</ul>
				</nav>
				<nav className="lg:col-start-10 lg:col-span-3">
					<ul>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https://github.com/daocam"
									target="_blank"
								>
									GitHub
								</Link>
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https://linkedin.com/in/daouda-camara-bf"
									target="_blank"
								>
									LinkedIn
								</Link>
							</Button>
						</li>             
						<li></li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;