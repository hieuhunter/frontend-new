import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Politics from '../components/Politics';

const PoliticsNews = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Politics />
			<Footer />
		</Layout>
	);
};

export default PoliticsNews;
