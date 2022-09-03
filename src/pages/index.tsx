import type { NextPage } from 'next';
import Head from 'next/head';
import { HomePage } from '../components/organisms/homepage';
import { trpc } from '../utils/trpc';

type TechnologyCardProps = {
	name: string;
	description: string;
	documentation: string;
};

const TechnologyCard = ({ name, description, documentation }: TechnologyCardProps) => {
	return (
		<section className="border-gray-500 flex flex-col justify-center rounded border-2 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
			<h2 className="text-gray-700 text-lg">{name}</h2>
			<p className="text-gray-600 text-sm">{description}</p>
			<a
				className="text-violet-500 mt-3 text-sm underline decoration-dotted underline-offset-2"
				href={documentation}
				target="_blank"
				rel="noreferrer"
			>
				Documentation
			</a>
		</section>
	);
};

const Home: NextPage = () => {
	const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

	return (
		<>
			<Head>
				<title>Itai Fish</title>
				<meta name="description" content="Personal Portfolio of Itai Fish" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HomePage />
		</>
	);
};

export default Home;
