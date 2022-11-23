import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@components/Button';

import logo from '@images/logo.svg';

import styles from '@styles/components/Header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<nav className={styles.wrapper}>
					<Link href="/">
						<Image src={logo} alt="Voiceloft Logo" width={200} height={60} priority />
					</Link>
					<Button content="Schedule a call" />
				</nav>
			</div>
		</header>
	);
};
