import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@components/Button';

const handleClick = () => window.open('https://calendly.com/voiceloft/', '_blank');

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<nav>
					<Link href="/">
						<Image className="voiceloft" src="/imgs/logo.svg" alt="Voiceloft Logo" width={200} height={60} priority />
					</Link>
					<Button content="Schedule a call" onClick={handleClick} />
				</nav>
			</div>
		</header>
	);
};
