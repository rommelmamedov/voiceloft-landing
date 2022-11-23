import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};
export default Document;
