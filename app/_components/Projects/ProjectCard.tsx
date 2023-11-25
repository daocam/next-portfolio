import { ExternalLink, Star } from 'lucide-react';
import Image, { StaticImageData } from 'next/image.js';
import Link from 'next/link.js';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export type ProjectData = {
  id: number
  title: string
  description: string
  npm_url?: string
  github_url?: string
  github_stars?: number
  status: 'under-developement' | 'archived' | 'released'
  website_url?: string
  technos: {
    title: string
    photo_url: StaticImageData
  }[]
}

type ProjectCardProps = {
  project: ProjectData
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Card className="min-w-[700px] max-w-[750px]">
			<CardHeader>
				<CardTitle>{ project.title }</CardTitle>
				<CardDescription>{ project.description }</CardDescription>
				<div className="flex gap-3">
					{
						project.status === 'under-developement' && (
							<Badge variant="secondary">Under development</Badge>
						)
					}
					{
						project.status === 'archived' && (
							<Badge variant="outline">Archived</Badge>
						)
					}
					{
						project.status === 'released' && (
							<Badge variant="default">Released</Badge>
						)
					}
					{
						project.github_stars ? (
							<Badge
								className="flex items-center gap-2"
								variant="secondary"
							><Star size="16" /><span>{ project.github_stars } stars</span>
							</Badge>
						) : null
					}
				</div>
			</CardHeader>
			<CardContent>
				<div className="flex gap-2">
					{
						project.technos.map((techno) => (
							<Image 
								key={ techno.title }
								alt={ techno.title }
								className="rounded-sm"
								height="24"
								src={ techno.photo_url }
								title={ techno.title }
								width="24"
							/>
						))
					}
				</div>
			</CardContent>
			<CardFooter className="justify-end gap-4">
				{
					project.github_url ? (
						<Button 
							className="gap-2 items-center"
							asChild
						>
							<Link
								href={ project.github_url }
								target="_blank"
							>
								View on Github<ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
				{
					project.npm_url ? (
						<Button 
							className="gap-2 items-center"
							variant="destructive"
							asChild
						>
							<Link
								href={ project.npm_url }
								target="_blank"
							>
								View on NPM<ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
				{
					project.website_url ? (
						<Button 
							className="gap-2 items-center"
							variant="outline"
							asChild
						>
							<Link
								href={ project.website_url }
								target="_blank"
							>
								View on Website<ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;