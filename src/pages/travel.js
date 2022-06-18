import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Travel from '../components/Travel';

const TravelNews = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Travel />
			<Footer />
		</Layout>
	);
};

export default TravelNews;
