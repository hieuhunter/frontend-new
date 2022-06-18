import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import '../styles/aos.css';
import '../styles/nav.css';
import '../styles/auth.css';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import fetcher from '../utils/fetcher';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charset='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />

			</Head>
			<SWRConfig
				value={{
					fetcher: fetcher,
					onError: (error, key) => {
						console.log(error, key);
						return error.response;
					},
					shouldRetryOnError: false
				}}
			>
				<Component {...pageProps} />
			</SWRConfig>
		</>
	);
}

export default MyApp;
