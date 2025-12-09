import Image from 'next/image';
import { IconType } from 'react-icons';

interface PortfolioItem {
	imageUrl: string;
	icons: {
		icon: IconType;
		link: string;
	}[];
	description: string;
}

interface PortfolioProps {
	items: PortfolioItem[];
}

export default function Portfolio({ items }: PortfolioProps) {
	return (
		<section>
			<div className="mt-14 rounded-lg">
				<div>
					<h3 className="pb-6 font-sans text-3xl dark:text-white sm:text-4xl">
						Portfolio
					</h3>
				</div>
				<div className="grid grid-cols-2 flex-col gap-8 sm:flex sm:flex-row sm:gap-5 lg:gap-9">
					{items.map((item, index) => (
						<div className="relative flex-1" key={index}>
							<div className="overflow-hidden rounded-lg">
								<Image
									className="rounded-lg object-cover"
									width={1000}
									height={1000}
									layout="responsive"
									src={item.imageUrl}
									alt={`Image ${index + 1}`}
								/>
								<div className="overlay-icons absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-black p-4 opacity-0 transition-opacity duration-300 hover:bg-opacity-80 hover:opacity-100">
									<div className="flex flex-wrap items-center justify-center">
										{item.icons.map((iconItem, iconIndex) => {
											const IconComponent = iconItem.icon;
											return (
												<a
													key={iconIndex}
													href={iconItem.link}
													download={iconItem.link.endsWith('.apk')}
													target="_blank"
													rel="noopener noreferrer"
													className="m-2 text-4xl text-white text-opacity-70 transition-colors duration-300 hover:text-opacity-100 sm:text-2xl md:text-3xl lg:text-4xl"
												>
													<IconComponent />
												</a>
											);
										})}
									</div>
									<p className="mt-2 text-center font-sans text-lg font-medium text-white sm:text-sm lg:text-lg">
										{item.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
