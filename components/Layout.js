import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { SEO } from '@components/SEO';

export const Layout = ({ children, ...otherProps }) => (
	<div className="layout">
		<SEO {...otherProps} />
		<Header />
		<main>{children}</main>
		<Footer />
	</div>
);
