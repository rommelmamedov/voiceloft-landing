import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@components/Button';

import logo from '@images/logo.svg';

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<nav>
					<Link href="/">
						<Image src={logo} alt="Voiceloft Logo" width={200} height={60} priority />
					</Link>
					<Button content="Schedule a call" />
				</nav>
			</div>
		</header>
	);
};
