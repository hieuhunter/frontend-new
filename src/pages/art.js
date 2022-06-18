import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Art from '../components/Art';

const ArtNews = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Art />
			<Footer />
		</Layout>
	);
};

export default ArtNews;
