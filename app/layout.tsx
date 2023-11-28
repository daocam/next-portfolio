import type { Metadata } from 'next';

import './globals.css';
import Providers from './_components/Providers';

export const metadata: Metadata = {
	title: 'Daouda Camara',
	description: 'Daouda Camara, a passionate web developer. I build websites and apps witgh React, Next.js, TailwindCSS and more.',
	keywords: 'web, developer, react, next, typescript, javascript',
	creator: 'Daouda Camara',
	authors: {
		name: 'Daouda Camara',
		url: 'https://github.com/daocam',
	},
};

const RootLayout = ({ children }: {
  children: React.ReactNode
}) => {
	return (
		<html lang="en">
			<body>
				<Providers>
					{ children }
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
