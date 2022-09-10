import { Introduction } from '../molecules/introduction';
import { SkillsAndServices } from '../molecules/skillsAndServices';
import { HeroBox } from '../molecules/heroBox';
import { WorkExperience } from '../molecules/workExperience';
import { Footer } from '../molecules/footer';
import { StatsProfile } from '../molecules/statsProfile';
import PageWithNav from './pageWithNav';

const links = [
	{
		name: '',
		element: <HeroBox />,
		scrollTo: 'heroBox',
		inNav: false,
	},
	{
		name: 'About',
		scrollTo: 'introduction',
		element: <Introduction />,
		inNav: true,
	},
	{
		name: 'Skills',
		scrollTo: 'skillsAndServices',
		element: <SkillsAndServices />,
		inNav: true,
	},
	{
		name: 'Work Experience',
		scrollTo: 'workExperience',
		element: <WorkExperience />,
		inNav: true,
	},
	{
		name: 'Statistics',
		scrollTo: 'statsProfile',
		element: <StatsProfile />,
		inNav: true,
	},
];

export function HomePage() {
	return (
		<>
			<div className="absolute top-0 z-50 w-full">
				<PageWithNav links={links} />
				<Footer />
			</div>
		</>
	);
}
