'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Toaster } from 'sonner';
const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Toaster
				closeButton
				richColors
			/>
			{ children }
			<ProgressBar
				color="#000"
				height="3px"
				options={ { showSpinner: false } }
				shallowRouting
			/>
		</>
	);
};

export default Providers;