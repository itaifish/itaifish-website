import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const languages = {
	Typescript: {
		startYear: 2020,
		skillLevel: '90%',
	},
	Javascript: {
		startYear: 2013,
		skillLevel: '65%',
	},
	Java: {
		startYear: 2015,
		skillLevel: '70%',
	},
	Rust: {
		startYear: 2021,
		skillLevel: '40%',
	},
};

export function Introduction() {
	const now = new Date();
	const [sortType, setSortType] = useState<'Years of Experience' | 'Skill Level'>('Skill Level');
	const [parent] = useAutoAnimate<HTMLDivElement>({ duration: 550 });
	return (
		<div className="bg-grey-50" id="about">
			<div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
				<div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
					<h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
						Who am I?
					</h2>
					<h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
						I{"'"}m Itai Fish, a Software Engineer
					</h4>
					<p className="pt-6 font-body text-lg leading-relaxed text-grey-10">
						I got my start in the realm of Computer Science at the age of 10 when, after looking to not just play games
						but make them, I was introduced to{' '}
						<a href="https://gamemaker.io/en/gamemaker" target="_blank" rel="noreferrer" className="text-primary">
							Gamemaker.
						</a>{' '}
						I spent much of my middle-school years designing and programming video games. The summer before high school
						I apprenticed at a Computational Modeling and Computer Science education non-profit,{' '}
						<a href="http://shodor.org/" target="_blank" rel="noreferrer" className="text-primary">
							Shodor
						</a>
						. There, I learned Javascript and web design.
					</p>
					<p className="pt-6 font-body text-lg leading-relaxed text-grey-10">
						In high school, I took a Java/OOP intro class at the local community college, and continued making video
						games. My senior year, I entered into the{' '}
						<a
							href="https://en.wikipedia.org/wiki/Technology_Student_Association"
							className="text-primary"
							target={'_blank'}
							rel="noreferrer"
						>
							Technology Student Association
						</a>{' '}
						competition with some friends, winning a state-level competition in videogame design, and a national-level
						competition in coding. I then went to college, first at The University of North Carolina at Asheville, and
						then after a year, transferring to The University of North Carolina at Chapel Hill.
					</p>
					<p className="pt-6 font-body text-lg leading-relaxed text-grey-10">
						I am a lifelong student, vegetarian, chess player, basketball player and fan, and Magic: The Gathering
						enthusiast. I love engineering, technology, and the art of problem solving.
					</p>
				</div>
				<div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
					<div className="pt-6 ">
						<h4 className="font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">Favourite Languages</h4>
						<div
							className="float-top float-right cursor-pointer text-primary"
							onClick={() => {
								setSortType((prevSortType) => (prevSortType === 'Skill Level' ? 'Years of Experience' : 'Skill Level'));
							}}
						>
							<i className="bx bx-sort-down bx-sm"></i>
							{sortType}
						</div>
					</div>
					<div ref={parent}>
						{Object.entries(languages)
							.sort(([_languageName, data1], [_languageName2, data2]) =>
								sortType === 'Skill Level'
									? data2.skillLevel.localeCompare(data1.skillLevel)
									: data1.startYear - data2.startYear,
							)
							.map(([languageName, data]) => {
								const yoe = now.getFullYear() - data.startYear;
								return (
									<div key={languageName} className="m-8">
										<div className="flex items-end justify-between">
											<h4 className="font-body font-semibold uppercase text-black">{languageName}</h4>
											<h4 className="float-right ml-20 font-body text-xl font-bold text-primary">
												{yoe} Year{yoe > 1 ? 's' : ''} of Experience
											</h4>
										</div>
										<div className="mt-2 h-3 w-full rounded-full bg-lila">
											<div className="h-3 rounded-full bg-primary" style={{ width: data.skillLevel }}></div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
}
