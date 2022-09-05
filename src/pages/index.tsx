import type { NextPage } from 'next';
import Head from 'next/head';
import { HomePage } from '../components/organisms/homepage';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Itai Fish</title>
				<meta name="description" content="Personal Portfolio of Itai Fish" />
				<link rel="icon" href="/favicon.ico" />
				<link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
			</Head>

			<HomePage />
		</>
	);
};

export default Home;
