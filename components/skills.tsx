import Image from 'next/image';

interface SkillItem {
	image: string;
	title: string;
	technologies: string[];
}

interface SkillsProps {
	skills: SkillItem[];
}

export default function Skills({ skills }: SkillsProps) {
	return (
		<section>
			<div className="mt-14 rounded-lg">
				<div>
					<h3 className="pb-6 font-sans text-3xl dark:text-white sm:text-4xl">
						Skills
					</h3>
				</div>
				<div className="flex flex-col gap-8 overflow-x-hidden md:grid md:grid-cols-2 md:grid-rows-2">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="grid flex-1 gap-10 rounded-xl px-10 py-8 text-center shadow-lg dark:bg-slate-800 md:w-full lg:w-auto lg:grid-rows-2"
						>
							<div className="flex flex-1 flex-col items-center justify-center">
								<Image
									src={skill.image}
									alt=""
									width={100}
									height={100}
									className="h-auto w-auto object-contain"
								/>
								<h3 className="font-sans text-lg font-medium dark:text-white">
									{skill.title}
								</h3>
							</div>
							{skill.technologies && skill.technologies.length > 0 && (
								<>
									<div className="flex flex-1 flex-col items-center justify-center">
										<h4 className="pb-4 font-sans text-teal-600">
											Technologies I Use
										</h4>
										{skill.technologies.map((tech, techIndex) => (
											<p
												key={techIndex}
												className="pb-2 font-mono text-gray-800 dark:text-white"
											>
												{tech}
											</p>
										))}
									</div>
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
