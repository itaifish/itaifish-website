import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const links = [
	{
		name: 'About',
		scrollTo: 'introduction',
	},
	{
		name: 'Skills',
		scrollTo: 'skillsAndServices',
	},
	{
		name: 'Work Experience',
		scrollTo: 'workExperience',
	},
	{
		name: 'Statistics',
		scrollTo: 'statsProfile',
	},
	// {
	// 	name: 'Blog',
	// 	scrollTo: '',
	// },
	// {
	// 	name: 'Contact',
	// 	scrollTo: '',
	// },
];

const scrollAmount = 400;

export function NavBar() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isShadow, setShadow] = useState(false);
	useEffect(() => {
		window.onscroll = () => {
			setShadow(window.pageYOffset >= scrollAmount);
		};
	}, []);
	return (
		<div
			className={`sticky top-0 z-50 flex w-full items-center justify-between bg-primary ${
				isShadow ? 'opacity-95 shadow-2xl' : ''
			}`}
		>
			<div className="container flex w-full items-center justify-between bg-primary">
				<Link className="mt-8" href="/" passHref>
					<a>
						<div className="border-5 lg:h-30 lg:w-30 relative mt-5 mb-5 h-10 w-10 sm:h-15 sm:w-15 md:h-20 md:w-20 ">
							<Image src="/assets/img/FishLogo.png" layout="fill" alt="logo image" />
						</div>
					</a>
				</Link>
				<div className="hidden lg:block">
					<ul className="flex items-center">
						{links.map((link, idx) => (
							<li key={idx} className="group mt-5 mb-5 pl-6">
								<span className="pt-0.5 font-header font-semibold uppercase text-white">
									<Link href={`#${link.scrollTo}`} scroll={false}>
										<a>{link.name}</a>
									</Link>
								</span>
								<span className="block h-0.5 w-full bg-transparent group-hover:bg-ao-english"></span>
							</li>
						))}
					</ul>
				</div>
				<div className="block lg:hidden">
					<button onClick={() => setMenuOpen(true)}>
						<i className="bx bx-menu mb-5 mt-5 text-4xl text-white"></i>
					</button>
				</div>
			</div>

			<div
				className={`fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 ${
					isMenuOpen ? '' : 'pointer-events-none opacity-0'
				} transition-opacity lg:hidden`}
			>
				<div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
					<button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMenuOpen(false)}>
						<Image src="/assets/img/icon-close.svg" width={48} height={24} alt="" />
					</button>

					<ul className="mt-8 flex flex-col">
						{links.map((link, idx) => (
							<li key={idx} className="py-2">
								<span className="pt-0.5 font-header font-semibold uppercase text-white">
									<Link href={`#${link.scrollTo}`} scroll={false}>
										<a onClick={() => setMenuOpen(false)}>{link.name}</a>
									</Link>
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
