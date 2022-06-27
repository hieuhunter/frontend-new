import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Search from 'components/Search';

const Searchtk = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Search />
			<Footer />
		</Layout>
	);
};

export async function getServerSideProps({ query }) {
	try {
		return {
			props: {
				query: query
			}
		};
	} catch (error) {
		return {
			notFound: true
		};
	}
}

export default Searchtk;
