import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Sports from '../components/Sports';

const XaHoi = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Sports />
			<Footer />
		</Layout>
	);
};

export default XaHoi;
