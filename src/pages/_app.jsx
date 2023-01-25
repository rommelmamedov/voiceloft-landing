import { Jost } from '@next/font/google';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { FB_PIXEL_ID, pageView as fbPageView } from '@libs/facebook-pixel';
import { GA_TRACKING_ID, pageView as gtagPageView } from '@libs/gtag';

import '@styles/main.css';

const jost = Jost({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps }) => {
	const router = useRouter();

	useEffect(() => {
		// NOTE: This pageView only triggers the first time (it's important for Pixel to have real information)
		fbPageView();

		const handleRouteChange = url => {
			gtagPageView(url);
			fbPageView();
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		router.events.on('hashChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
			router.events.off('hashChangeComplete', handleRouteChange);
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
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
          `,
				}}
			/>
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
			<Toaster position="top-right" toastOptions={{ duration: 3500 }} />
		</>
	);
};

export default MyApp;
