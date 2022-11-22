import Head from 'next/head';

import { Layout } from '@components/Layout';

import styles from '@styles/pages/Home.module.css';

const Home = () => {
	return (
		<Layout title="Speech recognition system">
			<section className={styles.intro}>
				<div className="container">
					<h1>
						Understanding every voice,
						<br />
						language, dialect and accent is real
					</h1>
					<p>
						Our technology understands the most people across the world. The most accessible engine that can help businesses better
						understand and connect with their customers, regardless of demographic, pitch, dialect, modes of speech, or semantics.
					</p>
				</div>
			</section>
		</Layout>
	);
};

export default Home;
