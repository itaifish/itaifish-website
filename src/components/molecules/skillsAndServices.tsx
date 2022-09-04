import Image from 'next/image';

const skills = [
	{
		name: 'Web Development [Full Stack]',
		icon: 'webdevelopment.png',
		description: (
			<>
				I have experience buildings websites in Typescript, Javascript, React, NextJS, (and HTML/CSS of course) and
				using Material UI, TailwindCSS, Bootstrap, and Bulma. I programmed this website myself and also helped build{' '}
				<a href="https://mudra.capital" target="_blank" rel="noreferrer" className="text-primary">
					Mudra.Capital
				</a>
			</>
		),
	},
	{
		name: 'Backend Development [Full Stack]',
		icon: 'backend.png',
		description: (
			<>
				I have built servers in NodeJS with express, and in Java using Spring Boot, Javalin, and Guice. I have
				experience with MySQL, PostgreSQL, MongoDB and DynamoDB. I helped build Amazon{"'"}s grocery delivery backend,
				and Mudra Capital{"'"}s entire tech stack.
			</>
		),
	},
	{
		name: 'Technical Writing, Documentation, and Communication',
		icon: 'technicalwriting.png',
		description: (
			<>
				I have written detailed documentation, UML flowcharts, and design descriptions for a multitude of projects, and
				communicate clearly and explicitly with project stakeholders.
			</>
		),
	},
	{
		name: 'Video Game Design, Programming',
		icon: 'videogamedesign.png',
		description: (
			<>
				I have experience in both the Gamemaker and Unity engines, as well as a passion for both playing and creating
				games.
			</>
		),
	},
] as const;

export function SkillsAndServices() {
	return (
		<div className="container py-16 md:py-20" id="services">
			<h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
				Here{"'"}s what I can do
			</h2>
			<h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
				These are my skills and proficiencies
			</h3>

			<div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
				{skills.map((skill) => (
					<div key={skill.name} className="group rounded bg-lila px-8 py-12 hover:scale-110 hover:shadow-2xl">
						<div className="relative mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
							<div className=" hidden group-hover:block">
								<Image
									src={`/assets/img/icons/${skill.icon}`}
									alt={`${skill.name} Icon`}
									layout="fill" // required
									objectFit="cover"
								/>
							</div>
							<div className="block group-hover:hidden">
								<Image
									src={`/assets/img/icons/${skill.icon}`}
									alt={`${skill.name} Icon`}
									layout="fill" // required
									objectFit="cover"
								/>
							</div>
						</div>
						<div className="text-center">
							<h3 className="group-hover:text-yellow pt-8 text-lg font-semibold uppercase text-primary lg:text-xl">
								{skill.name}
							</h3>
							<p className="text-grey pt-4 text-sm md:text-base">{skill.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
