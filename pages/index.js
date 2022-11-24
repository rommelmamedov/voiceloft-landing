import Link from 'next/link';

import { Layout } from '@components/Layout';

import styles from '@styles/pages/Home.module.css';

const Home = () => {
	return (
		<Layout className="home" title="Speech recognition system">
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
			<section className={styles.stt}>
				<div className="container">
					<div className={styles['stt-wrapper']}>
						<div className="voices"></div>
						<div className="description">
							<h2>Speech to text</h2>
							<p>
								There are many challenges with using automatic speech recognition within real-world applications including noisy
								environments, different dialects, accents and context specifics. So, we are using our expertise to provide solutions,
								enabling ASR to be used effectively within use-cases regardless of the environmental conditions.
							</p>
							<Link href="/speech-to-text">Read more</Link>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.motto}>
				<div className="container">
					<h2>
						Want to try our cutting
						<br />
						edge voice technologies?
					</h2>
				</div>
			</section>
		</Layout>
	);
};

export default Home;
