import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Contactus from '../components/Contactus';

const ContactusNews = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Contactus />
			<Footer />
		</Layout>
	);
};

export default ContactusNews;
