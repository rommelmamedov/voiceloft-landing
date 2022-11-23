import { Jost } from '@next/font/google';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';

import { FB_PIXEL_ID, pageView } from '@libs/facebook-pixel';

import '@styles/globals.css';
import '@styles/reset.css';

const jost = Jost({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps }) => {
	const router = useRouter();

	useEffect(() => {
		// NOTE: This pageView only triggers the first time (it's important for Pixel to have real information)
		pageView();

		router.events.on('routeChangeComplete', pageView);
		return () => {
			router.events.off('routeChangeComplete', pageView);
		};
	}, [router.events]);

	return (
		<>
			<style jsx global>{`
				html,
				body {
					font-family: ${jost.style.fontFamily};
				}
			`}</style>
			{/* Global Site Code Pixel - Facebook Pixel */}
			<Script
				id="fb-pixel"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${FB_PIXEL_ID});
          `,
				}}
			/>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
