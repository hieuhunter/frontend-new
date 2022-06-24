import React from 'react';
import pageNumber from 'utils/pageNumber.js';
import Banner from '../components/banner.js';
import Content from '../components/content.js';
import Footer from '../components/Footer.js';
import Layout from '../components/Layout.js';
import NavOne from '../components/Navone';
import http from '../utils/http.js';

const HomePage = ({ posts, posts01 }) => {
	return (
		<Layout>
			<NavOne />
			<Banner />
			<Content posts={posts} posts01={posts01} />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const [resPost1, resPost2] = await Promise.all([
			http.get({
				url: `/posts?category=the-gioi`,
				params: {
					page: pageNumber(query.page),
					limit: 3
				}
			}),
			http.get({
				url: `/posts?category=kinh-te`,
				params: {
					page: pageNumber(query.page),
					limit: 2
				}
			})
		]);
		return {
			props: {
				posts: resPost1.data,
				posts01: resPost2.data
			}
		};
	} catch (err) {
		return {
			notFound: true
		};
	}
}

export default HomePage;
