import { NavBar } from '../molecules/navBar';
import { Introduction } from '../molecules/introduction';
import { SkillsAndServices } from '../molecules/skillsAndServices';
import { HeroBox } from '../molecules/heroBox';
import { WorkExperience } from '../molecules/workExperience';
import { Footer } from '../molecules/footer';
import { StatsProfile } from '../molecules/statsProfile';
import NavigableComponentList from '../molecules/wrappers/NavigableComponentList';

export function HomePage() {
	return (
		<>
			<div className="absolute top-0 z-50 w-full">
				<>
					<NavBar />
					<NavigableComponentList
						components={[
							{ element: <HeroBox />, id: 'heroBox' },
							{ element: <Introduction />, id: 'introduction' },
							{ element: <SkillsAndServices />, id: 'skillsAndServices' },
							{ element: <WorkExperience />, id: 'workExperience' },
							{ element: <StatsProfile />, id: 'statsProfile' },
						]}
					/>
					<Footer />
				</>
			</div>
		</>
	);
}
