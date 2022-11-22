import Head from 'next/head';
import Image from 'next/image';

import styles from '@styles/pages/Home.module.css';

const Home = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>VOICELOFT | Speech recognition system</title>
				<meta name="description" content="Speech recognition system" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	);
};

export default Home;
