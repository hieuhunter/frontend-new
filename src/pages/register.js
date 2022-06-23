import Register from 'components/Auth/Register';
import Banner from 'components/banner';
import Footer from 'components/Footer';
import Layout from 'components/Layout';
import NavOne from 'components/Navone';
import React from 'react';

const Registers = () => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Register />
			<Footer />
		</Layout>
	);
};

export default Registers;
