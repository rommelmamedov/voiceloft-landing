import Head from 'next/head';

const appTitle = 'Voiceloft';
const domain = 'https://voiceloft.com';
// TODO:
const url = '';
const thumbnail = '';

export const SEO = ({ title: titleProp, description = 'Speech recognition system' }) => {
	const title = `Voiceloft${titleProp ? ' — ' + titleProp : ''}`;

	return (
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
			{/* Some SEO Tags */}
			<link rel="index" href={domain} />
			<link rel="canonical" href={domain} />
			<meta name="description" content={description} />
			{/* Facebook (Open Graph)  */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:site_name" content={appTitle} />
			<meta property="og:image" content={thumbnail} />
			<meta property="og:url" content={url} />
			<meta property="og:description" content={description} />
			{/* Google  */}
			<meta itemProp="name" content={title} />
			<meta itemProp="image" content={thumbnail} />
			<meta itemProp="description" content={description} />
			{/* Twitter  */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:image" content={thumbnail} />
			<meta name="twitter:url" content={url} />
			<meta name="twitter:description" content={description} />
			{/* Installation credentials for the Website */}
			{/* Add to homescreen for Chrome on Android */}
			<meta name="application-name" content={appTitle} />
			<meta name="theme-color" content="#ffffff" />
			<link rel="manifest" href="/manifest.json" />
			<meta name="mobile-web-app-capable" content="yes" />
			{/* Add to homescreen for Safari on iOS */}
			<meta name="apple-mobile-web-app-title" content={appTitle} />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			{/* Microsoft Windows Tiles */}
			<meta name="msapplication-starturl" content={domain} />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-tap-highlight" content="no" />
			<meta name="msapplication-config" content="/browserconfig.xml" />
			<meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
			{/* Favicons: */}
			<link rel="icon" href="/favicons/favicon.ico" />
			<link rel="icon" href="/favicons/safari-pinned-tab.svg" type="image/svg+xml" />
			<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#231f20" />
			{/* Favicons / Apple */}
			<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
			{/* Favicons / Android */}
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
			<link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
		</Head>
	);
};
