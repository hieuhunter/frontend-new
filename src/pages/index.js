import React from 'react';
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
export async function getServerSideProps({ }) {
	try {
		const [resPost1,resPost2] = await Promise.all([
			http.get({
				url: `/posts?category=the-gioi`,
				params: {
					page_size: 3,
				}
			}),
			http.get({
				url: `/posts?category=kinh-te`,
				params: {
					page_size: 3,
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
