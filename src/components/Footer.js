import Link from 'next/link';

const navigationItems = [
	{ title: 'About', href: '/about' },
	{
		title: 'API Docs',
		href: 'https://voiceloft.notion.site/API-Documentation-c4d19bb5c19d44288bc11e596b6122d3',
		props: { target: '_blank', rel: 'noopener noreferrer' },
	},
	{ title: 'Contact', href: '/contact' },
	{
		title: 'Supported languages',
		href: 'https://www.notion.so/voiceloft/Supported-languages-8ec4d48f0e414591a0adc9adda6f6eff',
		props: { target: '_blank', rel: 'noopener noreferrer' },
	},
];

const socialMedias = [
	{
		title: 'Voiceloft Email',
		href: 'mailto:mail@voiceloft.com',
		icon: (
			<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
				<path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
			</svg>
		),
	},
	{
		title: 'Voiceloft Facebook',
		href: 'https://www.facebook.com/voiceloftinc',
		icon: (
			<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
				<path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
			</svg>
		),
	},
	// {
	// 	title: 'Voiceloft Instagram',
	// 	href: 'https://www.instagram.com/voiceloft',
	// 	icon: (
	// 		<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
	// 			<path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
	// 			<circle cx="11.994" cy="11.979" r="3.003"></circle>
	// 		</svg>
	// 	),
	// },
	// {
	// 	title: 'Voiceloft Twitter',
	// 	href: 'https://twitter.com/voiceloft',
	// 	icon: (
	// 		<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
	// 			<path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
	// 		</svg>
	// 	),
	// },
];

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="section-wrapper-flex">
					<div className="copyright-and-partners">
						<small>Copyright © {new Date().getFullYear()} Voiceloft. All Rights Reserved.</small>
						<Link href="https://500.co" target="_blank" rel="noopener noreferrer" title="500 Startups">
							<svg viewBox="0 0 140 48" width={140} height={48} fill="">
								<path
									d="M72.412 2.247C66.694.82 61.205 9.795 58.212 21.81c-2.994 12.014-2.358 22.517 3.361 23.944 5.72 1.427 11.208-7.548 14.201-19.562 2.994-12.014 2.358-22.517-3.362-23.944ZM90.382 24c-.67 13.255-11 24-24.6 24-13.6 0-22.845-10.745-22.177-24 .668-13.255 10.998-24 24.598-24s22.846 10.745 22.178 24Zm31.616-21.753C116.279.82 110.79 9.795 107.797 21.81c-2.993 12.014-2.358 22.517 3.361 23.944 5.719 1.427 11.208-7.548 14.201-19.562 2.993-12.014 2.357-22.517-3.361-23.944ZM139.966 24c-.668 13.255-10.998 24-24.598 24S92.522 37.255 93.19 24c.668-13.255 10.998-24 24.598-24s22.846 10.745 22.178 24Zm-98.691 7.448c-.371 10.645-10.352 16.419-20.626 16.419-8.705 0-16.834-4.659-20.649-7.492L4.292 28.44l.256.092c7.059 10.558 13.057 17.83 19.327 17.264 4.147-.374 6.61-2.904 6.785-7.917.244-6.974-5.076-15.62-25.09-12.052l-.3-.108L14.28.666h30.197l-4.054 11.273h-28.29l-2.668 7.419c15.986-8.217 32.216.451 31.81 12.09Z"
									fill="#0a1e25"
								/>
							</svg>
						</Link>
					</div>
					<nav>
						<ul className="list">
							{navigationItems.map(({ title, href, props }, index) => (
								<li key={index}>
									<Link className="link" href={href} title={title} {...props}>
										{title}
									</Link>
								</li>
							))}
						</ul>
						<ul className="socials">
							{socialMedias.map(({ title, href, icon }, index) => (
								<li key={index}>
									<Link className="link" href={href} target="_blank" rel="noopener noreferrer" title={title}>
										{icon}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};
