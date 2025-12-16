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
				<div className="flex flex-col gap-7 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-9 lg:gap-10">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="relative flex min-h-56 flex-1 flex-col gap-6 overflow-hidden rounded-3xl border border-transparent bg-[rgba(255,255,255,0.05)] px-10 py-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl backdrop-saturate-150 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-tr before:from-white/10 before:via-white/10 before:to-white/10 before:opacity-40 before:blur-3xl before:content-[''] dark:bg-[rgba(255,255,255,0.05)] md:min-h-64 md:w-full lg:min-h-80 lg:w-auto"
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
