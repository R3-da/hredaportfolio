// components/CoinFlip.tsx
import Image from 'next/image';

interface CoinFlipProps {
	front: string; // front image
	back: string; // back image (QR code)
	isFlipped: boolean;
}

export default function CoinFlip({ front, back, isFlipped }: CoinFlipProps) {
	return (
		<div className="perspective relative h-40 w-40">
			<div
				className={`preserve-3d relative h-full w-full transition-transform duration-700 ${
					isFlipped ? 'rotate-y-180' : ''
				}`}
			>
				{/* Front */}
				<div className="backface-hidden absolute inset-0 overflow-hidden rounded-full bg-white shadow-xl">
					<Image src={front} alt="front" fill className="object-contain p-4" />
				</div>

				{/* Back */}
				<div className="rotate-y-180 backface-hidden absolute inset-0 overflow-hidden rounded-full bg-white shadow-xl">
					<Image src={back} alt="back" fill className="object-contain p-4" />
				</div>
			</div>
		</div>
	);
}
