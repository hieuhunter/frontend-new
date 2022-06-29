import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Sporting from 'components/Sporting';
import http from 'utils/http';
import pageNumber from 'utils/pageNumber';

const TheThao = ({ posts }) => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Sporting posts={posts} />
			<Footer />
		</Layout>
	);
};

export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts?category=the-thao`,
			params: {
				page: pageNumber(query.page),
				limit: 6
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

export default TheThao;
