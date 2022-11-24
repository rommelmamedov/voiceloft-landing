import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@components/Layout';

import speechIdentification from '@images/persons.webp';

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
					<div className="section-wrapper-flex">
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
			<svg className="separator-svg" width="100%" height="133" viewBox="0 0 1440 133" fill="none" preserveAspectRatio="none">
				<path
					stroke="#272FFB"
					strokeWidth="0.26123"
					strokeMiterlimit="10"
					d="M1504.12 76.7519C1400.09 73.4505 1296.08 78.4231 1192.05 77.3957C1136.44 76.8478 1081.17 75.5875 1025.79 66.3136C961.521 55.5466 897.589 40.0125 833.531 26.5058C776.79 14.5333 719.572 2.32793 662.287 1.16355C621.751 0.341644 584.358 1.7389 546.121 26.4784C514.088 47.2042 484.956 77.8889 453.366 100.204C413.348 128.464 375.27 131.121 332.35 132.423C202.487 136.34 84.4981 14.4922 -46.0001 24.3962"
				/>
			</svg>
			<section className={styles['speech-identification']}>
				<div className="container">
					<div className="section-wrapper-flex">
						<Image src={speechIdentification} alt="Speech Identification" width={536} />
						<div className="description">
							<h2>
								Speech
								<br />
								Identification
							</h2>
							<p>
								Speaker Identification (SID) technology uses the power of voice biometrics to recognize a speaker automatically and with
								high accuracy based on their voice. Its latest generation uses deep neural networks for even greater performance.
							</p>
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
