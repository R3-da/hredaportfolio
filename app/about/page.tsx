import Button from '@/components/ui/button';
import Image from 'next/image';

export default function About() {
	return (
		<div className="mx-5 my-10">
			<div className="mb-10 flex flex-col items-center text-center">
				<h1 className="mb-2 font-serif text-4xl font-bold">
					Meet Kawtar
					<span className="text-4xl leading-3 text-accent">.</span>
				</h1>
				<p className="mb-3">
					A talented Software Engineer with multiple skills!
				</p>
				<Image
					src="/about/polaroid.png"
					style={{ objectFit: 'cover' }}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
					width={800}
					height={500}
					loading="eager"
					alt="Kawtar Choubari Skills"
				/>
			</div>
			<div></div>
			<div className="px-4 lg:mx-56">
				<h2 className="mb-4 font-serif text-2xl font-bold">
					About Me
					<span className="text-2xl leading-3 text-accent">.</span>
				</h2>
				<p className="mb-4">
					Hey! I'm <span className="font-bold">Kawtar CHOUBARI</span>, a
					Software Engineer and Content Creator from Morocco, currently living
					in Paris, France.
				</p>
				<p className="mb-4">
					I mainly work on Front-End development on a daily basis, with
					JavaScript / TypeScript and frameworks like ReactJS, Next.js, and also
					React Native. I'm currently looking into learning Back-End JS
					development with NodeJS.
				</p>
				<p className="mb-4">
					I have been able to put my knowledge in good use by giving back to the
					community: volunteering on organizing tech events, creating
					educational content on{' '}
					<a href="/creator" className="text-accent underline">
						social media
					</a>
					, sharing{' '}
					<a href="/oss" className="text-accent underline">
						open source
					</a>{' '}
					projects and actively delivering{' '}
					<a href="/talks" className="text-accent underline">
						workshops & conferences
					</a>
					.
				</p>
				<p className="mb-4">
					When I don't code, I'm usually planning and working on my next piece
					of content (I haven't published too much in 2023, tough year tbh),
					playing on{' '}
					<a
						href="https://www.chess.com/member/choubari"
						target="_blank"
						className="text-accent underline"
						rel="noreferrer"
					>
						chess.com
					</a>{' '}
					(just started btw), or taking care of my brand-new balcony garden.
				</p>
				<h2 className="mb-4 mt-12 font-serif text-2xl font-bold">
					What can I help you with
					<span className="text-2xl leading-3 text-accent">?</span>
				</h2>
				<ul className="ml-4 list-disc">
					<li>Software Development</li>
					<li>Public Speaking</li>
					<li>Content Creation</li>
					<li>Community Building</li>
					<li>Partnership & Collaboration</li>
					<li>Student life, Career Advice</li>
					<li>...</li>
				</ul>
				<h2 className="mb-4 mt-12 font-serif text-2xl font-bold">
					Follow Me on Socials
					<span className="text-2xl leading-3 text-accent">.</span>
				</h2>
				<p>
					You will find me on major{' '}
					<a href="/creator" className="text-accent underline">
						social media
					</a>{' '}
					platforms under the username @choubari, or @choubari_ if the first one
					is taken.
				</p>
				<h2 className="mb-6 mt-12 font-serif text-2xl font-bold">
					Let<span className="text-2xl leading-3 text-accent">'</span>s build
					something cool together
					<span className="text-2xl leading-3 text-accent">!</span>
				</h2>
				<Button route={'/contact'} label={'Get in touch'}></Button>
			</div>
		</div>
	);
}
