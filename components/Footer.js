import Link from 'next/link';

const navigationItems = [
	{ title: 'About', href: '/about' },
	{ title: 'Contact', href: '/contact' },
	{ title: 'API', href: 'https://docs.voiceloft.az' },
	{ title: 'mail@voiceloft.com', href: 'mailto:mail@voiceloft.com' },
];

const socialMedias = [
	{
		title: 'Voiceloft Facebook',
		href: 'https://www.facebook.com/voiceloftinc',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#000">
				<path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
			</svg>
		),
	},
	{
		title: 'Voiceloft Twitter',
		href: 'https://twitter.com/voiceloft',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#000">
				<path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
			</svg>
		),
	},
];

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<nav>
					<ul className="list">
						{navigationItems.map(({ title, href }) => (
							<li key={href}>
								<Link className="link" href={href} title={title}>
									{title}
								</Link>
							</li>
						))}
					</ul>
					<ul className="list">
						{socialMedias.map(({ title, href, icon }) => (
							<li key={href}>
								<Link className="social" href={href} target="_blank" rel="noopener noreferrer" title={title}>
									{icon}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	);
};
