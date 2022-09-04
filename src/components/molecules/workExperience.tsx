/* eslint-disable @next/next/no-img-element */
interface Experience {
	name: string;
	logo: string;
	companyUrl: string;
	dateRange: string;
	description: string | JSX.Element;
}

const workExperience: Experience[] = [
	{
		name: 'Software Engineering Intern',
		companyUrl: 'https://www.fidelity.com/',
		logo: 'fidelity.png',
		dateRange: 'Summer 2019',
		description: (
			<>
				While at Fidelity, I played a key role in the development of Canary API, a robust service health monitoring API,
				working directly with a senior software engineer as a team of two. We used <b>Java Spring Boot</b>, along with
				the <b>Google Guice</b> dependency injection framework. I also researched and integrated the <b>Wiremock</b>{' '}
				service virtualization tool into an example workflow and demonstrated Wiremock’s usefulness through a live demo
				where I converted an entire array of microservices into a mock endpoint for advanced testing.
			</>
		),
	},
	{
		name: 'nexVortex (Now BCM One) Development Intern',
		logo: 'BCM-One.svg',
		dateRange: 'Summer 2018',
		companyUrl: 'https://www.bcmone.com/',
		description: (
			<>
				As a summer intern for nexVortex, I integrated users’ Microsoft Office calendars with Phillips Hue light bulbs,
				which turned green when a user was available and red when they were busy according to their calendar. This
				integration was done in <b>PHP</b>, calling multiple <b>RESTful APIs</b>. I also created a company dashboard,
				which was viewed by the whole company as they entered the office. This dashboard was made in <b>ReactJS</b>, and
				displayed weather, relevant news, and company performance metrics.
			</>
		),
	},
	{
		name: 'nexVortex (Now BCM One) Development Intern',
		logo: 'BCM-One.svg',
		companyUrl: 'https://www.bcmone.com/',
		dateRange: 'Summer 2016',
		description: (
			<>
				During my first ever internship, I used <b>PHP</b> and <b>MySQL</b> to analyze company churn, sales, and growth
				metrics. My final deliverable was a detailed report about company performance, sales, churn, and growth areas
				that showed high growth and a shift in customer needs that nexVortex was able to adapt to.
			</>
		),
	},
];

export function WorkExperience() {
	return (
		<div className="container py-16 md:py-20" id="work">
			<h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
				My work experience
			</h2>
			<h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
				Here is my employment timeline
			</h3>

			<div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
				<span className="absolute inset-y-0 left-2/5 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>
				{workExperience.map((experience, idx) => (
					<div key={idx} className="mt-8 flex flex-col text-center md:flex-row md:text-left">
						<div className="md:w-2/5">
							<div className="flex justify-center md:justify-start">
								<span className="shrink-0 cursor-pointer" onClick={() => window.open(experience.companyUrl, '_blank')}>
									<img
										src={`/assets/img/logo/${experience.logo}`}
										className="h-auto w-32"
										alt={`${experience.companyUrl} company logo`}
									/>
								</span>
								<div className="relative ml-3 hidden w-full md:block">
									<span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
								</div>
							</div>
						</div>
						<div className="md:w-3/5">
							<div className="relative flex md:pl-18">
								<span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

								<div className="mt-1 flex">
									<i className="bx bxs-right-arrow hidden text-primary md:block"></i>
									<div className="md:-mt-1 md:pl-8">
										<span className="block font-body font-bold text-grey-40">{experience.dateRange}</span>
										<span className="block pt-2 font-header text-xl font-bold text-primary">{experience.name}</span>
										<div className="pt-2">
											<span className="block font-body text-black">{experience.description}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
