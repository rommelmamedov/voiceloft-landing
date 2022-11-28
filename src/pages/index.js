import Image from 'next/image';

import { Layout } from '@components/Layout';
import { VoiceButton } from '@components/VoiceButton';

// import VoiceUploader from '@components/VoiceUploader';
import speechIdentification from '@images/persons.webp';

import { triangle, voice } from '@styles/components/VoiceButton.module.css';
import styles from '@styles/pages/Home.module.css';

import { voices } from '../constants';

const Home = () => {
	return (
		<Layout className="home" title="Speech recognition system">
			<section className="intro">
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
						<div className={styles.voices}>
							{voices.map(voiceProps => (
								<VoiceButton key={voiceProps.id} {...voiceProps} />
							))}
							<div className={voice} style={{ backgroundColor: '#e8f0be', cursor: 'default' }}>
								<div className="ellipsis">
									<div></div>
									<div></div>
									<div></div>
									<div></div>
								</div>
								<svg className={triangle} width={24} height={18} viewBox="0 0 24 18">
									<path d="M.845.265h22.403l-2.425 1.043A45.894 45.894 0 0 0 .845 17.901V.265z" fill="#e8f0be" />
								</svg>
							</div>
						</div>
						<div className={styles.description}>
							<h2>Speech to text</h2>
							<p>
								There are many challenges with using automatic speech recognition within real-world applications including noisy
								environments, different dialects, accents and context specifics. So, we are using our expertise to provide solutions,
								enabling ASR to be used effectively within use cases regardless of the environmental conditions.
							</p>
							{/* <Link href="/speech-to-text">Read more</Link> */}
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
			<section className="supported-languages">
				<div className="container">
					<h2>Supported languages</h2>
					<p>Easy to integrate, simple to scale.</p>
					<p>
						Our Global Voice Recognition is now available in more than 100 languages. It’s everything you know and love about our
						asynchronous Automated Speech Recognition (ASR) engine, now with even more languages at your disposal.
					</p>
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
						<Image className="" src={speechIdentification} alt="Speech Identification" width={536} />
						<div className={styles.description}>
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
			{/* <VoiceUploader /> */}
		</Layout>
	);
};

export default Home;
