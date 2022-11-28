import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { Button } from '@components/Button';
import { Layout } from '@components/Layout';

import speechIdentification from '@images/persons.webp';

import fileImport from '@icons/file-import.svg';
import speechRecord from '@icons/speech-record.svg';
import youTube from '@icons/you-tube.svg';

import styles from '@styles/pages/Home.module.css';

import { voices } from '../constants';

const tabs = [
	{
		tab: 'Speech record',
		className: 'speech-record',
		icon: speechRecord,
		title: 'Start recording',
		description: 'Click on the following link to convert our demo file from WAV to MP3',
		content: <></>,
		button: (
			<Button
				icon={
					<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
						<path d="M6 12H4c0 4.072 3.061 7.436 7 7.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6z" />
						<path d="M8 12c0 2.206 1.794 4 4 4s4-1.794 4-4h-2v-2h2V8h-2V6h2c0-2.217-1.785-4.021-3.979-4.021a.933.933 0 0 0-.209.025A4.006 4.006 0 0 0 8 6h4v2H8v2h4v2H8z" />
					</svg>
				}
			>
				Record
			</Button>
		),
	},
	{
		tab: 'Import audio file',
		className: 'file-import',
		icon: fileImport,
		title: 'Drag and drop file',
		description: 'Click on the following link to convert our demo file from WAV to MP3',
		content: <></>,
		button: (
			<Button
				icon={
					<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
						<path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z" />
					</svg>
				}
			>
				Choose file
			</Button>
		),
	},
	{
		tab: 'YouTube link',
		className: 'you-tube',
		icon: youTube,
		title: 'Paste YouTube link',
		description: 'Click on the following link to convert our demo file from WAV to MP3',
		content: <></>,
		button: (
			<Button
				icon={
					<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
						<path d="M11 15h2V9h3l-4-5-4 5h3z" />
						<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
					</svg>
				}
			>
				Upload
			</Button>
		),
	},
];

const Home = () => {
	const [activeTab, setActiveTab] = useState('file-import');

	const handleClick = useCallback(event => {
		// NOTE: Order of the class names matters.
		setActiveTab(event.target.classList[0]);

	}, []);

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
							{voices.map(({ avatar, audio, text, style }, index) => (
								<button key={index} className={styles.voice} style={style}>
									<svg width="36" height="36" viewBox="0 0 24 24">
										<path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" />
										<path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" />
									</svg>
									{text}
								</button>
							))}
						</div>
						<div className={styles.description}>
							<h2>Speech to text</h2>
							<p>
								There are many challenges with using automatic speech recognition within real-world applications including noisy
								environments, different dialects, accents and context specifics. So, we are using our expertise to provide solutions,
								enabling ASR to be used effectively within use cases regardless of the environmental conditions.
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
			<section className="upload">
				<div className="container">
					<div className="upload-container">
						<div className="tab-buttons">
							{tabs.map(({ tab, className }, index) => (
								<button key={index} onClick={handleClick} className={classNames(className, { active: activeTab === className })}>
									{tab}
								</button>
							))}
						</div>
						<div className="tab-list">
							{tabs.map(({ icon, title, description, content, className, button }, index) => (
								<div key={index} className={classNames('tab-content', { active: activeTab === className })}>
									<Image src={icon} alt={title} />
									<h2>{title}</h2>
									<p>{description}</p>
									{button}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Home;
