import { Download, ExternalLink } from 'lucide-react';
import Link from 'next/link.js';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import AboutMe from './_components/AboutMe';
import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import OpenSourceProjects from './_components/Projects/OpenSourceProjects';
import OhterProjects from './_components/Projects/OtherProjects';
import ProfessionalProjects from './_components/Projects/PorfessionalProjects';

const Home = () => {
	return (
		<>
			<div className="py-8 bg-gradient-to-tr from-[#97f0ff] to-[#aa95fe] min-h-screen">
				<div className="absolute inset-0 bg-gradient-to-t from-white to-transparent">
					<div className="px-8 py-8">
						<Navbar />
					</div>
					<div className="container m-auto">
						<div className="pt-24 flex flex-col gap-6 mb-11">
							<p className="text-3xl font-semibold">Hello there!</p>
							<h1 className="text-8xl font-bold">I&apos;m Daouda Camara</h1>
							<h2 className="text-6xl font-semibold">a passionate web developer</h2>
						</div>
						<div className="flex gap-4 mb-32">
							<Button 
								className="gap-2" 
								asChild
							>
								<Link href="/daouda_camara.pdf">
									<Download size="16" />
									Download my resume
								</Link>
							</Button>
							{ /* <Button 
								className="gap-2" 
								type="button"
								variant="secondary"
							>
								<MessageSquare size="16" />
								Text me
							</Button> */ }
						</div>
						<AboutMe />
					</div>
					<div
						className="container m-auto text-center py-8 flex flex-col gap-8"
						id="projects"
					>
						<h2 className="text-5xl font-bold">My projects</h2>
						<p className="text-sm text-muted-foreground">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem harum amet laborum deleniti dignissimos. Voluptatum corporis architecto ut consectetur dicta rerum, quam voluptate, dolorum repellendus magnam velit harum laboriosam.</p>
						<Tabs
							className="text-left"
							defaultValue="open-source"
						>
							<TabsList className="grid w-fit grid-cols-3 mb-8 mx-auto">
								<TabsTrigger value="open-source">Open source</TabsTrigger>
								<TabsTrigger value="profesional">Professional</TabsTrigger>
								<TabsTrigger value="other">Other</TabsTrigger>
							</TabsList>
							<TabsContent 
								className="flex flex-col gap-8 items-center"
								value="open-source"
							>
								<OpenSourceProjects />
							</TabsContent>
							<TabsContent 
								className="flex flex-col gap-8 items-center"
								value="profesional"
							>
								<ProfessionalProjects />
							</TabsContent>
							<TabsContent 
								className="flex flex-col gap-8 items-center"
								value="other"
							>
								<OhterProjects />
							</TabsContent>
						</Tabs>
						<Button 
							className="mx-auto gap-2 items-center"
							variant="link"
							asChild
						>
							<Link
								href="https://github.com/daocam"
								target="_blank"
							>
								View more on GitHub <ExternalLink size="16" />
							</Link>
						</Button>
					</div>
					<Footer />
				</div>
			</div>

		</>
		
	);
};

export default Home;
