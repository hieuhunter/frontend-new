import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Economic from 'components/Economic';
import http from 'utils/http';
import pageNumber from 'utils/pageNumber';

const Kinhte = ({ posts }) => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Economic posts={posts} />
			<Footer />
		</Layout>
	);
};

export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts?category=kinh-te`,
			params: {
				page: pageNumber(query.page),
				limit: 8
			}
		});
		return {
			props: {
				posts: resPost.data
			}
		};
	} catch (err) {
		console.log(err);
		return {
			notFound: true
		};
	}
}

export default Kinhte;
