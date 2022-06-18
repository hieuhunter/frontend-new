import React from 'react';
import Banner from '../../components/banner';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Auth from '../../components/Auth/Auth';
import NavOne from '../../components/Navone';

const AuthTK = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Auth />
			<Footer />
		</Layout>
	);
};

export default AuthTK;
