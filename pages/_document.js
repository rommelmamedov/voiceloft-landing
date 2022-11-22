import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};
export default Document;
