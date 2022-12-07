import Image from 'next/image';
import CountUp from 'react-countup';
import AudioPlayer from 'react-h5-audio-player';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Ellipsis } from '@components/Ellipsis';
import { Intro } from '@components/Intro';
import { Layout } from '@components/Layout';
import { SeparatorSVG } from '@components/SeparatorSVG';
import { VoiceButton } from '@components/VoiceButton';

// import { VoiceUploader } from '@components/VoiceUploader';
import speechIdentification from '@imgs/speech-identification.webp';

import { triangle, voice } from '@styles/components/VoiceButton.module.css';
import styles from '@styles/pages/Home.module.css';

import {
	// compareResultVoices,
	competitors, // competitorsAudioContent,
	competitorsAudioTranscript,
	sttVoices,
} from '../constants';
import { highlightCurrentTranscriptElement } from '../utils';

const swiperBreakpoints = {
	780: { slidesPerView: 2 },
	992: { slidesPerView: 3 },
	1200: { slidesPerView: 4 },
};

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
			<section className={styles.competitors}>
				<div className="container">
					<h2>The most accurate and inclusive speech-to-text on the market</h2>
					<p>TED: The Global Opportunity to Accelerate Africa&apos;s Sustainable Future</p>
					<Swiper spaceBetween={30} breakpoints={swiperBreakpoints}>
						{competitors.map(({ name, accuracy, duration, style }, index) => (
							<SwiperSlide key={name}>
								<div className={styles.competitor} key={name}>
									<div className={styles['competitor-image-wrapper']} style={style}>
										<Image src={`/imgs/competitor-logos/${name.toLowerCase()}.svg`} alt={name} width={110} height={110} />
									</div>
									<em>{name}</em>
									<strong id={index < competitors.length ? 'competitors' : 'voiceloft'}>
										<CountUp end={accuracy} duration={duration} suffix=" %" />
									</strong>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<AudioPlayer
						autoPlay
						timeFormat="mm:ss"
						listenInterval={500}
						src="/sounds/competitors.mp3"
						defaultDuration={<>25:17</>}
						defaultCurrentTime={<>00:00</>}
						customControlsSection={['MAIN_CONTROLS']}
						onListen={highlightCurrentTranscriptElement}
						onSeeked={highlightCurrentTranscriptElement}
					/>
					{/* <pre id="competitors-audio">{competitorsAudioContent}</pre> */}
					<div className={styles.transcript} id="competitors-audio-transcript">
						{competitorsAudioTranscript.map((item, index) => (
							<div key={index} data-time={item.split(' - ')[0]} data-active="false">
								{/* <span>{item.split(' - ')[0]}</span> */}
								{/* <span> — </span> */}
								<span>{item.split(' - ')[1]}</span>
							</div>
						))}
					</div>
				</div>
			</section>
			<SeparatorSVG />
			<section className={styles['speech-identification']}>
				<div className="container">
					<div className="section-wrapper-flex">
						<Image src={speechIdentification} alt="Speech Identification" width={536} />
						<div className={styles.description}>
							<h2>Supported languages</h2>
							<p>Easy to integrate, simple to scale.</p>
							<p>
								Our Global Voice Recognition is now available in more than 100 languages. It’s everything you know and love about our
								asynchronous Automated Speech Recognition (ASR) engine, now with even more languages at your disposal.
							</p>
							<a
								className="read-more"
								href="https://docs.voiceloft.com/languages/"
								title="Read more about supported languages"
								target="_blank"
								rel="noopener noreferrer"
							>
								Read More
							</a>
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
