/* eslint-disable @next/next/no-img-element */
const monthMs = 2592000000;
const hourMs = 1000 * 60 * 60;
const engagedOn = 1639802357000;
const bornAt = 923002942;
const now = new Date().getTime();
const monthsEngaged = Math.floor((now - engagedOn) / monthMs);
const hoursAge = Math.floor((now - bornAt) / hourMs);

const stats = [
	{
		name: 'Dota 2 Games Played',
		amount: '2749+',
		icon: 'dota2.png',
	},
	{
		name: 'Pounds of Raw Pasta Cooked and Eaten in a Single Sitting',
		amount: 1,
		icon: 'spaghetti.png',
	},
	{
		name: 'Bicycle Accidents',
		amount: '3',
		icon: 'bicycle.png',
	},
	{
		name: "Bachelor's Degrees",
		amount: '1',
		icon: 'graduation-cap.png',
	},
	{
		name: 'Months of Engagement',
		amount: monthsEngaged,
		icon: 'ring.png',
	},
	{
		name: 'Hours Old',
		amount: hoursAge,
		icon: 'age.png',
	},
	{
		name: 'Lichess Rating',
		amount: 1848,
		icon: 'chess.png',
	},
	{
		name: 'One Piece Volumes Owned',
		amount: 100,
		icon: 'onepiece.png',
	},
];

export function StatsProfile() {
	return (
		<div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24">
			<div className="container">
				<div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
					<h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
						Fun statistics
					</h2>
					<h3 className="pt-6 text-center font-header text-xl font-medium text-secondary sm:text-2xl lg:text-3xl">
						A novel™ way to tell you a bit about myself
					</h3>
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-4 xl:gap-5">
						{stats.map((stat, idx) => (
							<div
								key={idx}
								className="m-15 flex flex-col items-center justify-center text-center md:flex-row md:text-left"
							>
								<div className="md:h-50 md:w-50 h-25 w-25 mx-auto flex-shrink-0">
									<img src={`/assets/img/icons/${stat.icon}`} alt={`${stat.name} Icon`} />
								</div>
								<div className="pt-5 md:pl-5 md:pt-0">
									<h1 className="font-body text-2xl font-bold text-primary md:text-4xl">{stat.amount}</h1>
									<h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
										{stat.name}
									</h4>
								</div>
							</div>
						))}
					</div>
					<img
						src="https://raw.githubusercontent.com/itaifish/github-stats/master/generated/overview.svg"
						className="mx-auto h-auto w-full sm:h-100 sm:w-auto"
						alt="icon project"
					/>
				</div>
			</div>
		</div>
	);
}
