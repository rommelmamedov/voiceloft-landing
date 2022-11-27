import classNames from 'classnames';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { SEO } from '@components/SEO';

export const Layout = ({ children, className, ...otherProps }) => (
	<div className={classNames('layout', className)}>
		<SEO {...otherProps} />
		<Header />
		<main>{children}</main>
		<Footer />
	</div>
);
