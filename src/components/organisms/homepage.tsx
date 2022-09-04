import { Clients } from '../molecules/clients';
import { Contact } from '../molecules/contact';
import { NavBar } from '../molecules/navBar';
import { Introduction } from '../molecules/introduction';
import { Portfolio } from '../molecules/portfolio';
import { SkillsAndServices } from '../molecules/skillsAndServices';
import { SocialLinks } from '../molecules/socialLinks';
import { StatsProfile } from '../molecules/statsProfile';
import { Subscribe } from '../molecules/subscribe';
import { WorkExperience } from '../molecules/workExperience';

export function HomePage() {
	return (
		<>
			<div className="absolute top-0 z-50 w-full">
				<>
					<NavBar />
					<SocialLinks />
					<Introduction />
					<SkillsAndServices />
					<Portfolio />
					<Clients />
					<WorkExperience />
					<StatsProfile />
					<Contact />
					<Subscribe />
				</>
			</div>
		</>
	);
}
