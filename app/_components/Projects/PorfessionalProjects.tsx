import reactPng from './assets/next.svg';
import vitePng from './assets/vercel.svg';
import ProjectCard, { ProjectData } from './ProjectCard';

const projects: ProjectData[] = [
	{
		id: 1,
		title: 'Pokedex',
		description: 'ReactJS pokedex app that use the PokeAPI',
		github_url: 'https://github.com/daocam/pokedex',
		github_stars: 0,
		status: 'released',
		website_url: 'https://react-pokemon-app-483f4.web.app/login',
		technos: [
			{
				title: 'React',
				photo_url: reactPng,
			},
			{
				title: 'Typescript',
				photo_url: reactPng,
			},
			{
				title: 'Vite',
				photo_url: vitePng,
			},
			{
				title: 'Materialize',
				photo_url: vitePng,
			},
		],
	},
	{
		id: 2,
		title: 'Memory card',
		description: 'ReactJS memory card app',
		github_url: 'https://github.com/daocam/memory-card',
		github_stars: 0,
		status: 'released',
		website_url: 'https://react-memory-card-1a62c.web.app',
		technos: [
			{
				title: 'React',
				photo_url: reactPng,
			},
			{
				title: 'Typescript',
				photo_url: reactPng,
			},
			{
				title: 'Vite',
				photo_url: vitePng,
			},
		],
	},
	{
		id: 3,
		title: 'Shopping cart',
		description: 'ReactJS shopping cart',
		github_url: 'https://github.com/daocam/shopping-cart',
		github_stars: 0,
		status: 'released',
		website_url: 'https://react-pomodoro-app.web.app',
		technos: [
			{
				title: 'React',
				photo_url: reactPng,
			},
			{
				title: 'Javscript',
				photo_url: reactPng,
			},
		],
	},
];

const ProfessionalProjects = () => {
	return (
		projects.map((project) => (
			<ProjectCard
				key={ project.id }
				project={ project }
			/>
		))
	);
};

export default ProfessionalProjects;