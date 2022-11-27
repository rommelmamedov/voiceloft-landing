import { Layout } from '@components/Layout';

import styles from '@styles/pages/Contact.module.css';

const Contact = () => {
	return (
		<Layout className="contact" title="Contact">
			<section className={styles.intro}>
				<div className="container">
					<h1>Have a Question?</h1>
					<p>
						Whether you want to ask us about Voiceloft services or anything else, we will do our best to answer you. Feel free to contact us
						at any time. We will respond to you as soon as possible.
					</p>
				</div>
			</section>
			<svg  width="100%" height="300" viewBox="0 0 1440 160" fill="none" preserveAspectRatio="none">
				<path
					d="M-50.3836 103.331C93.3197 98.2453 237.091 101.434 380.823 98.6222C457.656 97.1206 534.006 94.9125 610.408 84.6896C699.072 72.8213 787.214 56.1919 875.555 41.5877C953.806 28.643 1032.71 15.4573 1111.85 13.3106C1167.85 11.7935 1219.53 12.5494 1272.67 36.6312C1317.19 56.8061 1357.82 86.9888 1401.75 108.76C1457.39 136.332 1510.04 138.336 1569.35 138.901C1748.83 140.591 1910.35 16.7292 2090.78 24.3944"
					stroke="#272FFB"
					stroke-width="0.26123"
					stroke-miterlimit="10"
				></path>
			</svg>
			<section className={styles.contact}>
				<div className="container">
					<div className="contact-wrapper">
						<div className="icon">
							<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
								<circle cx="40" cy="40" r="40" fill="#FFE5E5"></circle>
								<path
									d="M45.2907 46.6959L48.0276 43.9591C48.3962 43.595 48.8626 43.3458 49.3701 43.2417C49.8776 43.1376 50.4044 43.1831 50.8866 43.3726L54.2221 44.7044C54.7094 44.9022 55.1272 45.2398 55.4229 45.6746C55.7186 46.1095 55.879 46.6221 55.8838 47.148V53.257C55.8809 53.6147 55.8057 53.9682 55.6627 54.2961C55.5197 54.624 55.3118 54.9195 55.0515 55.1649C54.7912 55.4104 54.484 55.6006 54.1483 55.7241C53.8126 55.8477 53.4553 55.902 53.098 55.8839C29.7249 54.43 25.0088 34.6367 24.1169 27.0615C24.0755 26.6895 24.1133 26.313 24.2279 25.9567C24.3424 25.6004 24.5311 25.2723 24.7816 24.9942C25.0321 24.716 25.3386 24.494 25.681 24.3429C26.0234 24.1917 26.3939 24.1147 26.7682 24.117H32.6695C33.1961 24.1186 33.7102 24.2776 34.1457 24.5737C34.5811 24.8699 34.9181 25.2895 35.1131 25.7786L36.4449 29.1142C36.6407 29.5944 36.6906 30.1217 36.5885 30.6302C36.4864 31.1387 36.2367 31.6058 35.8706 31.9732L33.1338 34.71C33.1338 34.71 34.7099 45.3764 45.2907 46.6959Z"
									fill="#D17272"
								></path>
							</svg>
						</div>
						<div className="contact-info">
							<h2>Telephone</h2>
							<p>
								Tel: <a href="tel:+1.951.430.3337"> +1 951 430 337 </a>
							</p>
						</div>
					</div>
					<div className="contact_wrapper">
						<div className="icon">
							<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
								<circle cx="40" cy="40" r="40" fill="#CCF3FF"></circle>
								<path
									d="M25.4632 32.2859L40.3003 41.5591L55.1374 32.2859L40.3003 23.0127L25.4632 32.2859ZM58.8466 32.2859V50.8322C58.8466 51.816 58.4558 52.7595 57.7602 53.4551C57.0646 54.1507 56.1211 54.5415 55.1374 54.5415H25.4632C24.4794 54.5415 23.536 54.1507 22.8403 53.4551C22.1447 52.7595 21.7539 51.816 21.7539 50.8322V32.2859C21.7539 30.932 22.4772 29.7636 23.5529 29.1144L40.3003 18.6357L57.0476 29.1144C58.1233 29.7636 58.8466 30.932 58.8466 32.2859Z"
									fill="#272FFB"
								></path>
							</svg>
						</div>
						<div className="contact-info">
							<h2>Email</h2>
							<p>
								Email: <a href="mailto:mail@voiceloft.com">mail@voiceloft.com</a>
							</p>
						</div>
					</div>
				</div>
			</section>
			<svg  width="100%" height="300" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none">
				<path
					d="M1439.8 203.995C1265.68 208.316 1092.52 227.924 918.646 236.447C710.58 246.652 649 252.353 384 207.054C165.5 169.704 111.306 81.9139 15.5004 85.5006C-52.2944 88.0424 -104.695 157.503 -165.816 207.054C-217.02 248.566 -262.274 308.191 -312.561 352.595C-376.267 408.831 -439.57 417.557 -511.11 424.261C-727.571 444.51 -938.141 231.146 -1155 262.521"
					stroke="#272FFB"
					stroke-width="0.26123"
					stroke-miterlimit="10"
				></path>
			</svg>
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
