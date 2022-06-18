import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Advertise from '../components/Advertise';

const AdvertiseNews = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Advertise />
			<Footer />
		</Layout>
	);
};

export default AdvertiseNews;
