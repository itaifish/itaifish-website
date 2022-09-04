import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const links = [
	{
		name: 'About',
	},
	{
		name: 'Services',
	},
	{
		name: 'Portfolio',
	},
	{
		name: 'Clients',
	},
	{
		name: 'Work',
	},
	{
		name: 'Statistics',
	},
	{
		name: 'Blog',
	},
	{
		name: 'Contact',
	},
];

export function NavBar() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	return (
		<div className="flex w-full items-center justify-between bg-primary" style={{ maxWidth: '100%' }}>
			<div className="container flex w-full items-center justify-between bg-primary">
				<Link className="mt-8" href="/" passHref>
					<a>
						<div className="border-5 relative mt-10 h-40 w-40">
							<Image src="/assets/img/FishLogo.png" layout="fill" alt="logo image" />
						</div>
					</a>
				</Link>
				<div className="hidden lg:block">
					<ul className="flex items-center">
						{links.map((link, idx) => (
							<li key={idx} className="group pl-6">
								<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
									{link.name}
								</span>
								<span className="block h-0.5 w-full bg-transparent group-hover:bg-ao-english"></span>
							</li>
						))}
					</ul>
				</div>
				<div className="block lg:hidden">
					<button onClick={() => setMenuOpen(true)}>
						<i className="bx bx-menu text-4xl text-white"></i>
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
								<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
									{link.name}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
