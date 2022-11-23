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
				<nav className={styles.wrapper}>
					<Link href="/">
						<Image src={logo} alt="Voiceloft Logo" width={200} height={60} priority />
					</Link>
					<button>Schedule a call</button>
				</nav>
			</div>
		</header>
	);
};
