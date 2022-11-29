import Image from 'next/image';

import { Layout } from '@components/Layout';
import { SeparatorSVG } from '@components/SeparatorSVG';
import { VoiceButton } from '@components/VoiceButton';

// import VoiceUploader from '@components/VoiceUploader';
import speechIdentification from '@imgs/rasters/persons.webp';

import { triangle, voice } from '@styles/components/VoiceButton.module.css';
import styles from '@styles/pages/Home.module.css';

import { voices } from '../constants';

const competitors = [
	{ name: 'Rev', logo: '', accuracy: '65%' },
	{ name: 'Verbit', logo: '', accuracy: '65%' },
	{ name: 'Speechmatics', logo: '', accuracy: '65%' },
	{ name: 'Deepgram', logo: '', accuracy: '65%' },
];

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
			<SeparatorSVG />
			<section className="competitors">
				<div className="container">
					<h2>The most accurate and inclusive speech-to-text on the market</h2>
					<p>NASA: First All-Female Space Walk audio</p>
				</div>
			</section>
			<SeparatorSVG />
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
