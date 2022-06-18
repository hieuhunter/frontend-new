import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Aboutus from '../components/Aboutus';

const AboutusNews = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Aboutus />
			<Footer />
		</Layout>
	);
};

export default AboutusNews;
