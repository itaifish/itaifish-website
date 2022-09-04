import { Clients } from '../molecules/clients';
import { Contact } from '../molecules/contact';
import { NavBar } from '../molecules/navBar';
import { Introduction } from '../molecules/introduction';
import { Portfolio } from '../molecules/portfolio';
import { SkillsAndServices } from '../molecules/skillsAndServices';
import { HeroBox } from '../molecules/heroBox';
import { StatsProfile } from '../molecules/statsProfile';
import { Subscribe } from '../molecules/subscribe';
import { WorkExperience } from '../molecules/workExperience';
import { Footer } from '../molecules/footer';

export function HomePage() {
	return (
		<>
			<div className="absolute top-0 z-50 w-full">
				<>
					<NavBar />
					<HeroBox />
					<Introduction />
					<SkillsAndServices />
					<Portfolio />
					<Clients />
					<WorkExperience />
					<StatsProfile />
					<Contact />
					<Subscribe />
					<Footer />
				</>
			</div>
		</>
	);
}
