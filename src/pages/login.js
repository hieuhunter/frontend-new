
import Login from 'components/Auth/Login';
import React from 'react';
import Banner from 'components/banner';
import Footer from 'components/Footer';
import Layout from 'components/Layout';
import NavOne from 'components/Navone';

const Logintk = () => {
    return (
        <Layout>
            <NavOne />
            <Banner />
            <Login />
            <Footer />
        </Layout>
    );
};

export default Logintk;
