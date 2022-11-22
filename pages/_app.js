import { Jost } from '@next/font/google';

import '@styles/globals.css';
import '@styles/reset.css';

const jost = Jost({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps }) => (
	<>
		<style jsx global>{`
			html,
			body {
				font-family: ${jost.style.fontFamily};
			}
		`}</style>
		<Component {...pageProps} />
	</>
);

export default MyApp;
