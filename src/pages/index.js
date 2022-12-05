import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';

import { Ellipsis } from '@components/Ellipsis';
import { Intro } from '@components/Intro';
import { Layout } from '@components/Layout';
import { SeparatorSVG } from '@components/SeparatorSVG';
import { VoiceButton } from '@components/VoiceButton';

// import { VoiceUploader } from '@components/VoiceUploader';
import speechIdentification from '@imgs/speech-identification.webp';

import { triangle, voice } from '@styles/components/VoiceButton.module.css';
import styles from '@styles/pages/Home.module.css';

import { compareResultVoices, sttVoices } from '../constants';

const competitors = [
	{ name: 'Rev', accuracy: 65 },
	{ name: 'Verbit', accuracy: 65 },
	{ name: 'Speechmatics', accuracy: 65 },
	{ name: 'Deepgram', accuracy: 65 },
	{ name: 'Voiceloft', accuracy: 96 },
];

const Home = () => {
	return (
		<Layout className="home" title="Speech recognition system">
			<Intro
				title={
					<>
						Understanding every voice,
						<br /> language, dialect and accent is real
					</>
				}
				description="Our technology understands the most people across the world. The most accessible engine that can help businesses better understand and connect with their customers, regardless of demographic, pitch, dialect, modes of speech, or semantics."
			/>
			<section className={styles.stt}>
				<div className="container">
					<div className="section-wrapper-flex">
						<div className={styles.voices}>
							{sttVoices.map((voiceProps, index) => (
								<div className={styles['voice-wrapper']} key={index}>
									<Image src={`/imgs/persons/${index + 1}.webp`} alt={voiceProps.text} width={64} height={64} />
									<VoiceButton {...voiceProps} audio={`/sounds/${index + 1}.mp3`} />
								</div>
							))}
							<div className={styles['voice-wrapper']}>
								<Image src="/imgs/persons/7.webp" alt="Ellipsis" width={64} height={64} />
								<div className={voice} style={{ backgroundColor: '#f1f7d1', cursor: 'default' }}>
									<div>
										<Ellipsis />
									</div>
									<svg className={triangle} width={24} height={18} viewBox="0 0 24 18">
										<path d="M.845.265h22.403l-2.425 1.043A45.894 45.894 0 0 0 .845 17.901V.265z" fill="#e8f0be" />
									</svg>
								</div>
							</div>
						</div>
						<div className={styles.description}>
							<h2>Speech to text</h2>
							<p>
								There are many challenges with using automatic speech recognition within real-world applications including noisy
								environments, different dialects, accents and context specifics. So, we are using our expertise to provide solutions,
								enabling ASR to be used effectively within use cases regardless of the environmental conditions.
							</p>
						</div>
					</div>
				</div>
			</section>
			<SeparatorSVG />
			<section className="supported-languages">
				<div className="container">
					<h2>Supported languages</h2>
					<p>Easy to integrate, simple to scale.</p>
					<p>
						Our Global Voice Recognition is now available in more than 100 languages. It’s everything you know and love about our
						asynchronous Automated Speech Recognition (ASR) engine, now with even more languages at your disposal.
					</p>
					<a className="link" href="https://docs.voiceloft.com/languages/" target="_blank" rel="noopener noreferrer">
						Read More
					</a>
				</div>
			</section>
			<SeparatorSVG />
			<section className={styles.competitors}>
				<div className="container">
					<h2>The most accurate and inclusive speech-to-text on the market</h2>
					<p>NASA: First All-Female Space Walk audio</p>
					<ul>
						{competitors.map(({ name, accuracy }, index) => (
							<li key={name}>
								<div className="image-wrapper">
									<Image src={`/imgs/competitor-logos/${name.toLowerCase()}.svg`} alt={name} width={110} height={110} />
								</div>
								<em>{name}</em>
								<strong id={index < competitors.length ? 'competitors' : 'voiceloft'}>
									<CountUp end={accuracy} duration={3} suffix=" %" />
								</strong>
							</li>
						))}
					</ul>
				</div>
			</section>
			<SeparatorSVG />
			<section className={styles['speech-identification']}>
				<div className="container">
					<div className="section-wrapper-flex">
						<Image src={speechIdentification} alt="Speech Identification" width={536} />
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
			<SeparatorSVG />
			{/* <VoiceUploader /> */}
		</Layout>
	);
};

export default Home;
