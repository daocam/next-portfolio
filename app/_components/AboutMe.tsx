import Image from 'next/image.js';

import photo from '@/public/daouda.jpg';

const AboutMe = () => {
	return (
		<div
			className="grid grid-cols-12 grid-rows-6"
			id="aboutme"
		>
			<div className="col-start-1 col-span-8 row-start-1 row-span-6 pt-10">
				<h3 className="text-5xl font-bold mb-14">About Me</h3>
				<div className="p-8 border border-slate-100 bg-white/50 drop-shadow-lg backdrop-blur-lg rounded-2xl relative z-20">
					<h2 className="text-2xl font-semibold mb-9">Who is Daouda?</h2>
					<p className="text-base mb-8">
						Hi, I&apos;m Daouda Camara, a passionate web developer. I&apos;m a
						self-taught developer who loves to create beautiful and functional web
						apps. I&apos;m always looking for new challenges and opportunities to
						grow as a developer. I&apos;m currently working as a full-stack developer
						at a small startup. I&apos;m always looking for new opportunities to
						learn and grow as a developer.
					</p>
					<p className="text-base">
						Hi, I&apos;m Daouda Camara, a passionate web developer. I&apos;m a
						self-taught developer who loves to create beautiful and functional web
						apps. I&apos;m always looking for new challenges and opportunities to
						grow as a developer. I&apos;m currently working as a full-stack developer
						at a small startup. I&apos;m always looking for new opportunities to
						learn and grow as a developer.
					</p>
				</div>
			</div>
			<div className="col-start-8 col-span-4 row-start-1 row-span-5">
				<div className="w-fit h-fit rounded-2xl drop-shadow-lg">
					<Image
						alt="Daouda Camara"
						className="rounded-2xl relative z-10"
						height={ 400 }
						src={ photo }
						width={ 400 }
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;