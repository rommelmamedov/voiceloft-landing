import { Nunito } from '@next/font/google';

import { Layout } from '@components/Layout';

import '@styles/globals.css';

const nunito = Nunito({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps }) => (
	<Layout className={nunito.className}>
		<Component {...pageProps} />
	</Layout>
);

export default MyApp;
