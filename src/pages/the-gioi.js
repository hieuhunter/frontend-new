import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import World from 'components/world';
import http from 'utils/http';
import pageNumber from 'utils/pageNumber';

const TheGioi = ({ posts }) => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<World posts={posts} />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts?category=the-gioi`,
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

export default TheGioi;
