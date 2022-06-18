import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charset='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				{/* <titles>World Time</titles> */}
				<link rel='shortcut icon' href='assets/images/favicon.png' />
				<link rel='stylesheets' href='./assets/vendors/mdi/css/materialdesignicons.min.css' />
				<link rel='stylesheets' href='assets/vendors/aos/dist/aos.css/aos.css' />
				<link rel='stylesheets' href='assets/css/style.css' />
				
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
