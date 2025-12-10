import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub, AiOutlineQrcode } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const QRCode = dynamic(
	() => import('qrcode.react').then((mod) => ({ default: mod.QRCodeSVG })),
	{ ssr: false },
);

interface HeroProps {
	profileImage: string;
}

export default function Hero({ profileImage }: HeroProps) {
	const [isFlipped, setIsFlipped] = useState(false);
	const handleQrClick = () => setIsFlipped(!isFlipped);

	// Tailwind classes for border and background
	const borderClass = 'border-blue-400';
	const backFaceClass = 'bg-blue-400';

	return (
		<section>
			<div className="flex flex-col-reverse items-center justify-center gap-4 rounded-lg md:flex-row md:gap-8">
				{/* Left content */}
				<div className="text-center">
					<h2>
						<span className="text-ellipsis whitespace-nowrap py-2 font-sans tracking-wide text-blue-600 ~text-3xl/6xl dark:text-blue-400">
							Reda Haddan
						</span>
					</h2>
					<h3 className="text-ellipsis whitespace-nowrap py-2 font-sans ~text-xl/4xl dark:text-white">
						Software Developer
					</h3>

					<div className="flex justify-center py-3 ~/lg:~gap-3/7">
						{/* Social icons */}
						<a
							href="https://www.linkedin.com/in/reda-dev"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex h-fit items-center justify-center rounded-xl border-4 border-gray-600 p-3 text-gray-600 transition-all dark:border-gray-400 dark:text-gray-400"
						>
							<AiFillLinkedin className="text-2xl transition-all group-hover:scale-125" />
						</a>
						<a
							href="https://stackoverflow.com/u/18568328"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex h-fit items-center justify-center rounded-xl border-4 border-gray-600 p-3 text-gray-600 transition-all dark:border-gray-400 dark:text-gray-400"
						>
							<BsStackOverflow className="text-2xl transition-all group-hover:scale-125" />
						</a>
						<a
							href="https://github.com/R3-da"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex h-fit items-center justify-center rounded-xl border-4 border-gray-600 p-3 text-gray-600 transition-all dark:border-gray-400 dark:text-gray-400"
						>
							<AiFillGithub className="text-2xl transition-all group-hover:scale-125" />
						</a>
						<button
							onClick={handleQrClick}
							className={`group inline-flex h-fit items-center justify-center rounded-xl border-4 p-3 transition-all ${isFlipped ? 'border-white text-white' : 'border-gray-400 text-gray-400'}`}
						>
							<AiOutlineQrcode className="text-2xl transition-all group-hover:scale-125" />
						</button>
					</div>
				</div>

				{/* 3D Flip Circle */}
				<div
					style={{ perspective: '1200px' }}
					className={`transition-transform duration-700 ease-in-out ${isFlipped ? 'z-10 scale-110' : 'scale-100'}`}
				>
					<div
						className={`relative flex-shrink-0 border-4 ${borderClass} ${backFaceClass}`}
						style={{
							width: '220px',
							height: '220px',
							transition: 'transform 0.7s ease, border-radius 0.7s ease',
							transformStyle: 'preserve-3d',
							transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
							borderRadius: isFlipped ? '20px' : '50%', // circle to rounded square
						}}
					>
						{/* FRONT (Profile image) */}
						<div
							className="absolute inset-0 overflow-hidden"
							style={{
								backfaceVisibility: 'hidden',
								WebkitBackfaceVisibility: 'hidden',
								borderRadius: 'inherit',
							}}
						>
							<Image src={profileImage} alt="" fill className="object-cover" />
						</div>

						{/* BACK (QR Code) */}
						<div
							className={`absolute inset-0 flex items-center justify-center`}
							style={{
								transform: 'rotateY(180deg)',
								backfaceVisibility: 'hidden',
								WebkitBackfaceVisibility: 'hidden',
								transition: 'border-radius 0.7s ease',
							}}
						>
							<QRCode
								value="https://www.redahaddan.com"
								bgColor="transparent"
								fgColor="#20293a"
								level="H"
								style={{ width: '90%', height: '90%' }} // <-- fills parent container
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
