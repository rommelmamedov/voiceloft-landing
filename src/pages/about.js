import Image from 'next/image';
import { useCountUp } from 'react-countup';

import { Layout } from '@components/Layout';

import human from '@images/about-human.webp';
import wave from '@images/wave.svg';

import styles from '@styles/pages/About.module.css';

const About = () => {
	useCountUp({ ref: 'counter-1', end: 95, duration: 5, suffix: '%' });
	useCountUp({ ref: 'counter-2', end: 95, duration: 5, suffix: '%' });

	return (
		<Layout className="about" title="About">
			<section className="intro">
				<div className="container">
					<h1>Who are we?</h1>
					<p>
						We are a team of passionate entrepreneurs, engineers, and data scientists that aim to do the impossible. Teaching machines to
						talk and understand speech better than a human does. Machines should be more efficient in this specific task than humans are,
						but they are not. We are changing that!
					</p>
				</div>
			</section>
			<svg width="100%" height="559" viewBox="0 0 1440 559" fill="none" preserveAspectRatio="none">
				<path
					d="M-3.98499 0.233165C101.646 38.6966 174.222 146.381 270.688 204.718C373.68 267.013 507.206 232.762 634.594 216.327C730.811 203.916 856.089 177.256 893.221 303.016C907.01 349.699 910.758 406.853 922.945 455.24C937.363 512.48 964.647 545.375 1006.45 555.137C1141.05 586.529 1325.15 382.298 1457.54 424.842"
					stroke="var(--blue)"
					strokeWidth="0.261658"
					strokeMiterlimit="10"
				/>
			</svg>
			<section className={styles.percentage}>
				<div className="container">
					<svg viewBox="0 0 360 140">
						<text id="counter-1" fill="#ccf3ff" transform="matrix(1 0 0 1 10.9488 133.6656)" />
						<text id="counter-2" fill="none" stroke="var(--blue)" strokeMiterlimit="10" transform="matrix(1 0 0 1 -0.9911 122.9283)" />
					</svg>
					<p>
						We constantly benchmark our solution against our competitors for a range of use cases specifically designed to replicate the
						real-world. Our models are developed and iterated throughout this process, along with our expertise within the ASR market. These
						tests help to highlight where we can improve and how we compare against our global competitors.
					</p>
					<small>*All benchmarking data collected by Voiceloft as part of benchmarking activities.</small>
				</div>
			</section>
			<section className={styles.info}>
				<Image className={styles.human} src={human} alt="human" width={600} />
				<div className={styles.waves}>
					<Image src={wave} alt="wave" />
				</div>
			</section>
			<section className={styles.product}>
				<div className="container">
					<p>
						We are continually innovating to ensure our language offering is both relevant and far-reaching by collecting high quality and
						high volume datasets. We have several languages in research and are collecting data to further train these models.{' '}
					</p>
					<p>
						We provide high-quality training data with our leading technology platform, managed services, and our global crowd to power AI
						globally.
					</p>
				</div>
			</section>

			{/* <section className={styles.data}>
				<svg viewBox="0 0 1440 186" fill="none">
					<g clip-path="url(#clip0)">
						<rect width="1440" height="186" fill="white"></rect>
						<path
							d="M0 101.074C333 101.074 459 50.5746 797 33.0746C1135 15.5746 991.001 219.074 1441 116.074C1441 524.574 1442 1233.35 1442 1472.85C1102.5 1558.85 1171.5 1336.85 778 1359.85C384.5 1382.85 1 1290.35 1 1290.35C1 1290.35 0 410.074 0 101.074Z"
							fill="#FFF8F8"
						></path>
						<path
							d="M-350.06 109.481C-206.357 104.396 -62.5852 107.584 81.1463 104.773C157.979 103.271 234.33 101.063 310.732 90.84C399.395 78.9717 487.538 62.3423 575.879 47.7381C654.13 34.7934 733.037 21.6077 812.173 19.461C868.172 17.9439 919.855 18.6998 972.995 42.7816C1017.51 62.9565 1058.14 93.1392 1102.07 114.911C1157.71 142.482 1210.36 144.486 1269.68 145.052C1449.16 146.742 1610.67 22.8796 1791.11 30.5448"
							stroke="#272FFB"
							strokeWidth="0.26123"
							strokeMiterlimit="10"
						></path>
						<path
							d="M-597.975 111.587C-441.273 106.042 -284.496 109.519 -127.763 106.453C-43.9798 104.815 39.2774 102.408 122.59 91.26C219.274 78.318 315.39 60.1845 411.722 44.2592C497.051 30.1435 583.095 15.7651 669.39 13.4242C730.455 11.7699 786.813 12.5942 844.76 38.8544C893.304 60.8542 937.611 93.7671 985.509 117.508C1046.19 147.573 1103.6 149.759 1168.28 150.375C1364 152.219 1540.12 17.152 1736.87 25.5106"
							stroke="#272FFB"
							strokeWidth="0.26123"
							strokeWiterlimit="10"
						></path>
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="1440" height="186"></rect>
						</clipPath>
					</defs>
				</svg>
				<h1>Datasets that we have</h1>

				<button>Speech to text</button>
				<div className="container">
					<div className="flex-box">
						<div className="flex-item">
							<div className="speech"></div>
							<p>Speech (hours)</p>
						</div>
					</div>
					<p>
						When your goal is to launch world-class AI, our reliable training data gives you the confidence to deploy. You choose the level
						of service and security you want for data collection and annotation, from white-glove managed service to flexible self-service
					</p>
				</div>
			</section> */}
			{/* <svg viewBox="0 0 1440 259" fill="none">
				<g clipPath="url(#clip111)">
					<rect width="1440" height="259" fill="white"></rect>
					<path
						d="M-1 -1883.93C332 -1883.93 458 -1934.43 796 -1951.93C1134 -1969.43 990.001 -1765.93 1440 -1868.93C1440 -1460.43 1441 -44.6504 1441 194.85C1101.5 280.85 1170.5 58.8496 777 81.8496C383.5 104.85 0 12.3496 0 12.3496C0 12.3496 -1 -1574.93 -1 -1883.93Z"
						fill="#FFF8F8"
					></path>
					<path
						d="M-49.3292 24.8813C54.1698 35.923 156.506 55.1565 259.692 68.4506C314.851 75.5583 369.769 81.9133 425.896 80.3459C491.033 78.5222 556.494 71.9308 621.801 67.3647C679.65 63.3118 738.003 59.0938 794.903 65.821C835.167 70.5834 872.012 77.1114 906.482 106.876C935.36 131.811 959.993 166.212 988.213 192.66C1023.96 226.157 1061.31 234.027 1103.65 241.221C1231.74 262.966 1365.36 158.508 1493.26 186.27"
						stroke="#272FFB"
						strokeWidth="0.26123"
						strokeMiterlimit="10"
					></path>
				</g>
				<defs>
					<clipPath id="clip111">
						<rect width="1440" height="259" fill="white"></rect>
					</clipPath>
				</defs>
			</svg> */}
		</Layout>
	);
};

export default About;
