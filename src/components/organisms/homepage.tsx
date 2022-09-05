import { NavBar } from '../molecules/navBar';
import { Introduction } from '../molecules/introduction';
import { SkillsAndServices } from '../molecules/skillsAndServices';
import { HeroBox } from '../molecules/heroBox';
import { WorkExperience } from '../molecules/workExperience';
import { Footer } from '../molecules/footer';
import { StatsProfile } from '../molecules/statsProfile';

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
					<StatsProfile />
					{/* <Clients />
					
					<Contact />
					<Subscribe />
					*/}
					<Footer />
				</>
			</div>
		</>
	);
}
