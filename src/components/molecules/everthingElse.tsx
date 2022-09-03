export function EverythingElse() {
	return (
		<>
			<div className="container flex items-center justify-between">
				<div>
					<a href="/">
						<img src="/assets/img/logo.svg" className="w-24 lg:w-48" alt="logo image" />
					</a>
				</div>
				<div className="hidden lg:block">
					<ul className="flex items-center">
						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>
							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>
						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>
							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>
						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>
							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>
						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>
							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>
						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>
							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>{' '}
						</li>
						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>
							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>

						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>
							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>

						<li className="group pl-6">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>
							<span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
						</li>
					</ul>
				</div>
				<div className="block lg:hidden">
					<button>
						<i className="bx bx-menu text-4xl text-white"></i>
					</button>
				</div>
			</div>

			<div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
				<div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
					<button className="absolute top-0 right-0 mt-4 mr-4">
						<img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
					</button>

					<ul className="mt-8 flex flex-col">
						<li className="py-2">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>
						</li>

						<li className="py-2">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>
						</li>
						<li className="py-2">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>
						</li>

						<li className="py-2">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>
						</li>

						<li className="py-2">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>
						</li>

						<li className="py-2">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>
						</li>

						<li className="py-2">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>
						</li>

						<li className="py-2">
							<span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
