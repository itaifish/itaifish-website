export function Footer() {
	return (
		<div className="bg-primary">
			<div className="container flex flex-col justify-between py-6 sm:flex-row">
				<p className="text-center font-body text-white md:text-left">
					© Copyright 2022 - {new Date().getFullYear()}. All rights reserved, Itai Fish.
				</p>
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
