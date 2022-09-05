import { NavBar } from '../molecules/navBar';
import { Introduction } from '../molecules/introduction';
import { SkillsAndServices } from '../molecules/skillsAndServices';
import { HeroBox } from '../molecules/heroBox';
import { WorkExperience } from '../molecules/workExperience';

export function HomePage() {
	return (
		<>
			<div className="absolute top-0 z-50 w-full">
				<>
					<NavBar />
					<HeroBox />
					<Introduction />
					<SkillsAndServices />
					<WorkExperience />
					{/* <Clients />
					<StatsProfile />
					<Contact />
					<Subscribe />
					<Footer /> */}
				</>
			</div>
		</>
	);
}
