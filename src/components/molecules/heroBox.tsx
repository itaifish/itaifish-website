import Image from 'next/image';

export function HeroBox() {
	return (
		<div
			className="relative bg-cover bg-center bg-no-repeat py-8"
			style={{ backgroundImage: 'url(/assets/img/itaiWithFamily.jpg)' }}
		>
			<div className="absolute inset-0 z-20 bg-gradient-to-b from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

			<div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
				<div className="flex flex-col items-center justify-center lg:flex-row">
					<div className="relative h-48 w-48 rounded-full border-8 border-primary shadow-xl sm:h-56">
						<Image
							src="/assets/img/itailinkedin.jpeg"
							className="rounded-full"
							layout="fill"
							objectFit="cover"
							alt="Picture of Itai"
						/>
					</div>
					<div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
						<h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
							Itai{"'"}s Page
						</h1>
						<div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
							<div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
								<p className="font-body text-lg font-bold uppercase text-white">Let{"'"}s connect</p>
								<div className="hidden sm:block">
									<i className="bx bx-chevron-right text-yellow text-3xl"></i>
								</div>
							</div>
							<div className="flex cursor-pointer items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
								<a
									href="https://www.linkedin.com/in/itai-rivkin-fish/"
									target="_blank"
									className="pl-4"
									rel="noreferrer"
								>
									<i className="bx bxl-linkedin hover:text-yellow text-2xl text-white"></i>
								</a>
								<a href="mailto:itai.rivkin.fish@gmail.com" target="_blank" className="pl-4" rel="noreferrer">
									<i className="bx bx-envelope hover:text-yellow text-2xl text-white"></i>
								</a>
								<a href="https://github.com/itaifish" target="_blank" className="pl-4" rel="noreferrer">
									<i className="bx bxl-github hover:text-yellow text-2xl text-white"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
