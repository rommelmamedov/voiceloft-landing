import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

export const Layout = ({ className, children }) => {
	return (
		<div className={className}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};
