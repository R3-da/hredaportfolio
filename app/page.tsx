'use client';

import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import {
	BsDownload,
	BsStackOverflow,
	BsFillMoonStarsFill,
} from 'react-icons/bs';
import { FaHandPointDown, FaGooglePlay } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import Hero from '../components/hero';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);

	const images = {
		profile: '/profile.png',
		mobileDev: '/skills/mobile-dev.png',
		webDev: '/skills/web-dev.png',
		design: '/skills/design.png',
		sound: '/skills/sound.png',
		web1: '/web1.png',
		web2: '/web2.png',
		web3: '/web3.png',
		web4: '/web4.png',
	};

	const skills = [
		{
			image: images.mobileDev,
			title: 'MOBILE DEVELOPMENT',
			technologies: [],
		},
		{
			image: images.webDev,
			title: 'WEB DEVELOPMENT',
			technologies: [],
		},
		{
			image: images.design,
			title: 'UI/UX',
			technologies: [],
		},
		{
			image: images.sound,
			title: 'SOUND DESIGN',
			technologies: [],
		},
	];

	const portfolioItems = [
		{
			imageUrl: images.web1,
			icons: [
				{ icon: AiFillGithub, link: 'https://github.com/R3-da/Insectify' },
				{
					icon: FaGooglePlay,
					link: 'https://play.google.com/store/apps/details?id=com.reda.insectify',
				},
			],
			description: 'Insectify : Identify Beetles Using A.I',
		},
		{
			imageUrl: images.web2,
			icons: [
				{ icon: AiFillGithub, link: 'https://github.com/R3-da/Daytics' },
				{ icon: BsDownload, link: '/daytics.apk' },
			],
			description: 'Daytics : Plan & Keep Track Of Your Day',
		},
		{
			imageUrl: images.web3,
			icons: [
				{ icon: AiFillGithub, link: 'https://github.com/R3-da/S.T.S_v6' },
				{ icon: BsDownload, link: '/sts.apk' },
			],
			description: 'ShapeSwipe :  Fidget & Play With Shapes',
		},
		{
			imageUrl: images.web4,
			icons: [
				{ icon: AiFillGithub, link: 'https://github.com/R3-da/JamsterScanner' },
			],
			description: 'Jamster : A MIDI Scanner/Transposer ',
		},
	];

	return (
		<div className={darkMode ? 'dark' : ''}>
			<main className="bg-white ~/lg:~px-4/40 ~/lg:~pt-10/20 ~/lg:~pb-10/20 dark:bg-gray-900">
				<div className="absolute right-[5rem] top-[10rem] z-0 h-[21.25rem] w-[21.25rem] rounded-full bg-[#f82b32] blur-[10rem] dark:bg-[#946263]"></div>
				{/* 
				<div className="absolute right-[-35rem] top-[10rem] z-0 h-[21.25rem] w-[50rem] rounded-full bg-[#4536b9] blur-[10rem] dark:bg-[#676394]"></div>
				 */}
				<div className="relative">
					{/* <nav className="py-10 mb-12 flex justify-between dark:text-white">
						<h1 className="font-serif text-xl"></h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkMode)}
									className=" cursor-pointer text-2xl"
								/>
							</li>
							<li>
								<a
									className="bg-gradient-to-r font-sans from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
									href="/resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => {
										window.open('/resume.pdf', '_blank');
									}}
								>
									Resume
								</a>
							</li>
						</ul>
					</nav> */}
					<section>
						<Hero profileImage={images.profile} />
					</section>
					{/* <section>
						<div className="mt-8 rounded-lg">
							<h3 className="pb-8 font-sans text-3xl dark:text-white sm:text-4xl">
								Bio:
							</h3>
							<div className="flex flex-col gap-4">
								<p className="font-sans text-lg leading-8 text-gray-800 dark:text-gray-200">
									Mobile & Web Developer | Open-Source Enthusiast.
								</p>
							</div>
						</div>
					</section>
					<section>
						<div className="mt-8 rounded-lg">
							<div>
								<h3 className="pb-8 font-sans text-3xl dark:text-white sm:text-4xl">
									Companies
								</h3>
							</div>
							<div className="flex min-h-32 items-center justify-evenly gap-4 bg-red-500">
								<div className="flex-1 bg-green-500 text-center">Al Omrane</div>
								<div className="flex-1 bg-green-500 text-center">3WDEV</div>
								<div className="flex-1 bg-green-500 text-center">Majjane</div>
								<div className="flex-1 bg-green-500 text-center">
									Offzone Agency
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="mt-8 rounded-lg">
							<div>
								<h3 className="pb-8 font-sans text-3xl dark:text-white sm:text-4xl">
									Featured Projects
								</h3>
							</div>
							<div className="flex min-h-32 items-center justify-evenly gap-4 bg-red-500">
								<div className="flex-1 bg-green-500 text-center">GPP</div>
								<div className="flex-1 bg-green-500 text-center">TTMT</div>
								<div className="flex-1 bg-green-500 text-center">In Skins</div>
								<div className="flex-1 bg-green-500 text-center">
									Vue.js Dashboard
								</div>
								<div className="flex-1 bg-green-500 text-center">
									.NET doc generator
								</div>
							</div>
						</div>
					</section> */}
					<Skills skills={skills} />
					<Portfolio items={portfolioItems} />
				</div>
			</main>
		</div>
	);
}
