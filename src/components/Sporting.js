import React from 'react';
import Image from 'next/image'
import Pagination from './Pagination';
import Othernews from './Othernews';
const Sporting = ({ posts }) => {
	console.log(posts)
	return (
		<>
			<div className='content-wrapper'>
				<div className='container'>
					<div className='col-sm-12'>
						<div className='card' data-aos='fade-up'>
							<div className='card-body'>
								<div className='row'>
									<div className='col-sm-12'>
										<h1 className='font-weight-600 mb-4'>TRAVEL</h1>
									</div>
								</div>
								<div className='row'>
									<div className='col-lg-8'>
										{posts.data.length &&
											posts.data.map((post, index) => (
												<div className='row' key={index}>
													<div className='col-sm-4 grid-margin'>
														<div className='rotate-img'>
															<Image src='/assets/images/travel/Travel_7.png' width={200} height={200} alt='banner' className='img-fluid' />
														</div>
													</div>
													<div className='col-sm-8 grid-margin'>
														<h2 className='font-weight-600 mb-2'>{post.title}</h2>
														<p className='fs-13 text-muted mb-0'>
															<span className='mr-2'>Photo </span>10 Minutes ago
														</p>
														<p className='fs-15'>
															{post.excerpt}
														</p>
													</div>
												</div>
											))
										}
										{/* 	<div className='row'>
											<div className='col-sm-4 grid-margin'>
												<div className='rotate-img'>
													<Image src='/assets/images/travel/Travel_8.png' width={200} height={200} alt='banner' className='img-fluid' />
												</div>
											</div>
											<div className='col-sm-8 grid-margin'>
												<h2 className='font-weight-600 mb-2'>No charges over 2017 battle bus cases</h2>
												<p className='fs-13 text-muted mb-0'>
													<span className='mr-2'>Photo </span>10 Minutes ago
												</p>
												<p className='fs-15'>
													Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
													printer took a galley of type and scrambled it to make a type specimen book.
												</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-4 grid-margin'>
												<div className='rotate-img'>
													<Image src='/assets/images/travel/Travel_9.png' width={200} height={200} alt='banner' className='img-fluid' />
												</div>
											</div>
											<div className='col-sm-8 grid-margin'>
												<h2 className='font-weight-600 mb-2'>Kaine: Trump Jr. may have committed treason</h2>
												<p className='fs-13 text-muted mb-0'>
													<span className='mr-2'>Photo </span>10 Minutes ago
												</p>
												<p className='fs-15'>
													Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
													printer took a galley of type and scrambled it to make a type specimen book.
												</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-4 grid-margin'>
												<div className='rotate-img'>
													<Image src='/assets/images/travel/Travel_10.png' width={200} height={200} alt='banner' className='img-fluid' />
												</div>
											</div>
											<div className='col-sm-8 grid-margin'>
												<h2 className='font-weight-600 mb-2'>South Korea’s Moon Jae-in sworn in vowing to address</h2>
												<p className='fs-13 text-muted mb-0'>
													<span className='mr-2'>Photo </span>10 Minutes ago
												</p>
												<p className='fs-15'>
													Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
													printer took a galley of type and scrambled it to make a type specimen book.
												</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-4 grid-margin'>
												<div className='rotate-img'>
													<Image src='/assets/images/travel/Travel_11.png' width={200} height={200} alt='banner' className='img-fluid' />
												</div>
											</div>
											<div className='col-sm-8 grid-margin'>
												<h2 className='font-weight-600 mb-2'>No charges over 2017 battle bus cases</h2>
												<p className='fs-13 text-muted mb-0'>
													<span className='mr-2'>Photo </span>10 Minutes ago
												</p>
												<p className='fs-15'>
													Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
													printer took a galley of type and scrambled it to make a type specimen book.
												</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-4 grid-margin'>
												<div className='rotate-img'>
													<Image src='/assets/images/travel/Travel_12.png' width={200} height={200} alt='banner' className='img-fluid' />
												</div>
											</div>
											<div className='col-sm-8 grid-margin'>
												<h2 className='font-weight-600 mb-2'>Kaine: Trump Jr. may have committed treason</h2>
												<p className='fs-13 text-muted mb-0'>
													<span className='mr-2'>Photo </span>10 Minutes ago
												</p>
												<p className='fs-15'>
													Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
													printer took a galley of type and scrambled it to make a type specimen book.
												</p>
											</div>
										</div> */}
									</div>
									<Othernews />
									{/* <div className='col-lg-4'>
										<h2 className='mb-4 text-primary font-weight-600'>Latest news</h2>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='border-bottom pb-4 pt-4'>
													<div className='row'>
														<div className='col-sm-8'>
															<h5 className='font-weight-600 mb-1'>Ways to stay social online while in self..</h5>
															<p className='fs-13 text-muted mb-0'>
																<span className='mr-2'>Photo </span>10 Minutes ago
															</p>
														</div>
														<div className='col-sm-4'>
															<div className='rotate-img'>
																<Image src='/assets/images/travel/Travel_1.png' width={200} height={200} alt='banner' className='img-fluid' />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='border-bottom pb-4 pt-4'>
													<div className='row'>
														<div className='col-sm-8'>
															<h5 className='font-weight-600 mb-1'>Premier League players join charity..</h5>
															<p className='fs-13 text-muted mb-0'>
																<span className='mr-2'>Photo </span>10 Minutes ago
															</p>
														</div>
														<div className='col-sm-4'>
															<div className='rotate-img'>
																<Image src='/assets/images/travel/Travel_2.png' width={200} height={200} alt='banner' className='img-fluid' />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='pt-4'>
													<div className='row'>
														<div className='col-sm-8'>
															<h5 className='font-weight-600 mb-1'>UK Athletics board changed stance on..</h5>
															<p className='fs-13 text-muted mb-0'>
																<span className='mr-2'>Photo </span>10 Minutes ago
															</p>
														</div>
														<div className='col-sm-4'>
															<div className='rotate-img'>
																<Image src='/assets/images/travel/Travel_3.png' width={200} height={200} alt='banner' className='img-fluid' />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='trending'>
											<h2 className='mb-4 text-primary font-weight-600'>Trending</h2>
											<div className='mb-4'>
												<div className='rotate-img'>
													<Image src='/assets/images/travel/Travel_4.png' width={200} height={200} alt='banner' className='img-fluid' />
												</div>
												<h3 className='mt-3 font-weight-600'>Virus Kills Member Of Advising Iran’s Supreme</h3>
												<p className='fs-13 text-muted mb-0'>
													<span className='mr-2'>Photo </span>10 Minutes ago
												</p>
											</div>
											<div className='mb-4'>
												<div className='rotate-img'>
													<Image src='/assets/images/travel/Travel_5.png' width={200} height={200} alt='banner' className='img-fluid' />
												</div>
												<h3 className='mt-3 font-weight-600'>Virus Kills Member Of Advising Iran’s Supreme</h3>
												<p className='fs-13 text-muted mb-0'>
													<span className='mr-2'>Photo </span>10 Minutes ago
												</p>
											</div>
											<div className='mb-4'>
												<div className='rotate-img'>
													<Image src='/assets/images/travel/Travel_6.png' width={200} height={200} alt='banner' className='img-fluid' />
												</div>
												<h3 className='mt-3 font-weight-600'>Virus Kills Member Of Advising Iran’s Supreme</h3>
												<p className='fs-13 text-muted mb-0'>
													<span className='mr-2'>Photo </span>10 Minutes ago
												</p>
											</div>
										</div>
									</div> */}
									<Pagination total={posts?.pagination?.total} limit={6} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Sporting;
