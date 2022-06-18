import React from 'react';
import Banner from '../components/banner.js';
import Content from '../components/content.js';
import Footer from '../components/Footer.js';
import Layout from '../components/Layout.js';
import NavOne from '../components/Navone';

const HomePage = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Content />
			<Footer />
		</Layout>
	);
};

export default HomePage;
