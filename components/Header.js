import Image from 'next/image';
import Link from 'next/link';

import logo from '@images/logo.svg';

import styles from '@styles/components/Header.module.css';

const navigationItems = [
	{ title: 'About', href: '/about' },
	{ title: 'Contact', href: '/contact' },
];

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.wrapper}>
					<Link href="/">
						<Image src={logo} alt="Voiceloft Logo" width={200} height={60} priority />
					</Link>
					<nav>
						<ul className={styles.list}>
							{navigationItems.map(({ title, href }) => (
								<li key={href}>
									<Link className={styles.link} href={href} title={title}>
										{title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
