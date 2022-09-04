import Link from 'next/link';

export function Footer() {
	return (
		<div className="bg-primary">
			<div className="container flex flex-col justify-between py-6 sm:flex-row">
				<p className="text-center font-body text-white md:text-left">
					© Copyright 2022 - {new Date().getFullYear()}. All rights reserved, Itai Fish.
				</p>
				<div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
					<Link href="/">
						<i className="bx bxl-facebook-square hover:text-yellow text-2xl text-white"></i>
					</Link>
					<Link href="/" className="pl-4">
						<i className="bx bxl-twitter hover:text-yellow text-2xl text-white"></i>
					</Link>
					<Link href="/" className="pl-4">
						<i className="bx bxl-dribbble hover:text-yellow text-2xl text-white"></i>
					</Link>
					<Link href="/" className="pl-4">
						<i className="bx bxl-linkedin hover:text-yellow text-2xl text-white"></i>
					</Link>
					<Link href="/" className="pl-4">
						<i className="bx bxl-instagram hover:text-yellow text-2xl text-white"></i>
					</Link>
				</div>
				<p className="font-body text-white md:text-left">
					<a target="_blank" href="https://icons8.com/icon/103683/web" rel="noreferrer">
						Web
					</a>{' '}
					icons by{' '}
					<a target="_blank" href="https://icons8.com" rel="noreferrer">
						Icons8
					</a>
				</p>
			</div>
		</div>
	);
}
