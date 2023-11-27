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
			<div className="pb-2 lg:pb-8 bg-gradient-to-tr relative from-[#97f0ff] to-[#aa95fe] 2xl:min-h-screen">
				<div className="absolute inset-0 bg-gradient-to-t from-white to-transparent 2xl:min-h-screen z-0">
					{ /* <div className="px-2 md:px-8 py-2 md:py-8">
						<Navbar />
					</div>
					<div className="w-full px-2 md:px-10 2xl:px-0 lg:container lg:m-auto flex flex-col">
						<div className="text-center pt-8 md:pt-4 2xl:pt-12 4xl:pt-16 5xl:pt-24 flex flex-col gap-0 lg:gap-4 2xl:gap-6 mb-6 lg:mb-8 2xl:mb-10 5xl:mb-11">
							<p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">Hello there! 👋</p>
							<h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold">I&apos;m Bryan Berger</h1>
							<h2 className="text-xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold">a passionate web developer</h2>
						</div>
						<div className="mx-auto flex gap-4 mb-8 sm:mb-12 md:mb-20 lg:mb-6 2xl:mb-16 5xl:mb-32">
							<Button
								className="gap-2"
								asChild
							>
								<Link
									href="/Bryan_Berger.pdf"
									target="_blank"
								>
									<Download size="16" />
									Download my résumé
								</Link>
							</Button>
						</div>
						<AboutMe />
					</div> */ }
				</div>
				<div className="relative 2xl:min-h-screen z-10">
					<div className="px-2 md:px-8 py-2 md:py-8">
						<Navbar />
					</div>
					<div className="w-full px-2 md:px-10 2xl:px-0 lg:container lg:m-auto flex flex-col">
						<div className="text-center pt-8 md:pt-4 2xl:pt-12 4xl:pt-16 5xl:pt-24 flex flex-col gap-0 lg:gap-4 2xl:gap-6 mb-6 lg:mb-8 2xl:mb-10 5xl:mb-11">
							<p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">Hello there!</p>
							<h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold">I&apos;m Daouda Camara</h1>
							<h2 className="text-xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold">a passionate web developer</h2>
						</div>
						<div className="mx-auto flex gap-4 mb-8 sm:mb-12 md:mb-20 lg:mb-6 xl:mb-10 2xl:mb-32">
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
						className="px-2 w-full md:px-8 lg:px-0 lg:container lg:m-auto text-center py-8 md:pt-16 2xl:pt-8 flex flex-col gap-8"
						id="projects"
					>
						<h2 className="text-3xl lg:text-5xl font-bold">My projects</h2>
						<p className="text-sm text-muted-foreground">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem harum amet laborum deleniti dignissimos. Voluptatum corporis architecto ut consectetur dicta rerum, quam voluptate, dolorum repellendus magnam velit harum laboriosam.</p>
						<Tabs
							className="text-left"
							defaultValue="open-source"
						>
							<TabsList className="w-full grid grid-cols-3 mb-8 lg:w-fit mx-auto">
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
