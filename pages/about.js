import { Layout } from '@components/Layout';

import styles from '@styles/pages/About.module.css';

const Contact = () => {
	return (
		<Layout className="contact" title="Contact">
			<section className={styles.intro}>
				<h1>Who are we?</h1>
				<p>
					We are a team of passionate entrepreneurs, engineers, and data scientists that aim to do the impossible. Teaching machines to talk
					and understand speech better than a human does. Machines should be more efficient in this specific task than humans are, but they
					are not. We are changing that!
				</p>
			</section>
			<div className="line">
				<svg width="100%" height="559" viewBox="0 0 1440 559" fill="none" preserveAspectRatio="none">
					<path
						d="M-3.98499 0.233165C101.646 38.6966 174.222 146.381 270.688 204.718C373.68 267.013 507.206 232.762 634.594 216.327C730.811 203.916 856.089 177.256 893.221 303.016C907.01 349.699 910.758 406.853 922.945 455.24C937.363 512.48 964.647 545.375 1006.45 555.137C1141.05 586.529 1325.15 382.298 1457.54 424.842"
						stroke="#272FFB"
						stroke-width="0.261658"
						stroke-miterlimit="10"
					></path>
				</svg>
			</div>
			<section className={styles[`about-percentage`]}>
				<div className="container">
					<div className="icon-percentage"></div>
					<p>
						We constantly benchmark our solution against our competitors for a range of use cases specifically designed to replicate the
						real-world. Our models are developed and iterated throughout this process, along with our expertise within the ASR market. These
						tests help to highlight where we can improve and how we compare against our global competitors.
					</p>
					<small className='re'>*All benchmarking data collected by Voiceloft as part of benchmarking activities.</small>
				</div>
			</section>
			<div className="line">
				<svg viewBox="0 0 1440 259" fill="none">
					<g clip-path="url(#clip111)">
						<rect width="1440" height="259" fill="white"></rect>
						<path
							d="M-1 -1883.93C332 -1883.93 458 -1934.43 796 -1951.93C1134 -1969.43 990.001 -1765.93 1440 -1868.93C1440 -1460.43 1441 -44.6504 1441 194.85C1101.5 280.85 1170.5 58.8496 777 81.8496C383.5 104.85 0 12.3496 0 12.3496C0 12.3496 -1 -1574.93 -1 -1883.93Z"
							fill="#FFF8F8"
						></path>
						<path
							d="M-49.3292 24.8813C54.1698 35.923 156.506 55.1565 259.692 68.4506C314.851 75.5583 369.769 81.9133 425.896 80.3459C491.033 78.5222 556.494 71.9308 621.801 67.3647C679.65 63.3118 738.003 59.0938 794.903 65.821C835.167 70.5834 872.012 77.1114 906.482 106.876C935.36 131.811 959.993 166.212 988.213 192.66C1023.96 226.157 1061.31 234.027 1103.65 241.221C1231.74 262.966 1365.36 158.508 1493.26 186.27"
							stroke="#272FFB"
							stroke-width="0.26123"
							stroke-miterlimit="10"
						></path>
					</g>
					<defs>
						<clipPath id="clip111">
							<rect width="1440" height="259" fill="white"></rect>
						</clipPath>
					</defs>
				</svg>
			</div>
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

export default Contact;
