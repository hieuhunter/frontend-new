import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/Navone';
import Banner from '../components/banner';
import Society from 'components/Society';
import pageNumber from 'utils/pageNumber';
import http from 'utils/http';


const XaHoi = ({ posts }) => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Society posts={posts} />
			<Footer />
		</Layout>
	);
};

export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts?category=xa-hoi`,
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
export default XaHoi;
