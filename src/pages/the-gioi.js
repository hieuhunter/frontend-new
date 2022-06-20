import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Magazine from '../components/magazine';
import Banner from '../components/banner';

const TheGioi = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Magazine />
			<Footer />
		</Layout>
	);
};

export default TheGioi;
