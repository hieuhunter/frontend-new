import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Business from '../components/Business';

const Businessnews = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Business />
			<Footer />
		</Layout>
	);
};

export default Businessnews;
