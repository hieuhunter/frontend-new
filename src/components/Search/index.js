import React from 'react';
import Image from 'next/image'
import Pagination from 'components/Pagination';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Search = () => {
	const { query } = useRouter();
	const q = query?.q || '';

	const { data: listSearch, error } = useSWR(
		`/search?page=0&limit=8&q=${q}`,
		{
			revalidateOnFocus: false
		}
	);

	return (
		<>
			<div className='content-wrapper'>
				<div className='container'>
					<div className='col-sm-12'>
						<div className='card' data-aos='fade-up'>
							<div className='card-body'>
								<div className='row'>
									<div className='col-sm-12'>
										<h1 className='font-weight-600 mb-4'>MAGAZINE</h1>
									</div>
								</div>
								<div className='row'>
									<div className='col-lg-8'>
										{!listSearch ? (
											<>Loading...</>
										) : !listSearch.data.length ? (
											<>Không tìm thấy kết quả</>
										) : (
											listSearch.data.map((post, index) => (
												<div className='row' key={index}>
													<div className='col-sm-4 grid-margin'>
														<div className='rotate-img img-fluid'>
															<Image src='/assets/images/magazine/Magzine_7.jpg' width={195} height={145} alt='banner' />
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
										)}
										{/* 	<div className='row'>
											<div className='col-sm-4 grid-margin'>
												<div className='rotate-img img-fluid'>
													<Image src='/assets/images/magazine/Magzine_8.jpg' width={195} height={145} alt='banner' />
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
												<div className='rotate-img img-fluid'>
													<Image src='/assets/images/magazine/Magzine_9.jpg' width={195} height={145} alt='banner' />
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
												<div className='rotate-img img-fluid'>
													<Image src='/assets/images/magazine/Magzine_10.jpg' width={195} height={145} alt='banner' />
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
												<div className='rotate-img img-fluid'>
													<Image src='/assets/images/magazine/Magzine_11.jpg' width={195} height={145} alt='banner' />
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
												<div className='rotate-img img-fluid'>
													<Image src='/assets/images/magazine/Magzine_12.jpg' width={195} height={145} alt='banner' />
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
									<div className='col-lg-4'>
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
															<div className='rotate-img img-fluid'>
																<Image src='/assets/images/magazine/Magzine_1.jpg' width={80} height={60} alt='banner' />
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
															<div className='rotate-img img-fluid'>
																<Image src='/assets/images/magazine/Magzine_2.jpg' width={80} height={60} alt='banner' />
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
															<div className='rotate-img img-fluid'>
																<Image src='/assets/images/magazine/Magzine_3.jpg' width={80} height={60} alt='banner' />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='trending'>
											<h2 className='mb-4 text-primary font-weight-600'>Trending</h2>
											<div className='mb-4'>
												<div className='rotate-img img-fluid'>
													<Image src='/assets/images/magazine/Magzine_4.jpg' alt='banner' width={310} height={117} />
												</div>
												<h3 className='mt-3 font-weight-600'>Virus Kills Member Of Advising Iran’s Supreme</h3>
												<p className='fs-13 text-muted mb-0'>
													<span className='mr-2'>Photo </span>10 Minutes ago
												</p>
											</div>
											<div className='mb-4'>
												<div className='rotate-img img-fluid'>
													<Image src='/assets/images/magazine/Magzine_5.jpg' width={310} height={117} alt='banner' />
												</div>
												<h3 className='mt-3 font-weight-600'>Virus Kills Member Of Advising Iran’s Supreme</h3>
												<p className='fs-13 text-muted mb-0'>
													<span className='mr-2'>Photo </span>10 Minutes ago
												</p>
											</div>
											<div className='mb-4'>
												<div className='rotate-img img-fluid'>
													<Image src='/assets/images/magazine/Magzine_6.jpg' width={310} height={117} alt='banner' />
												</div>
												<h3 className='mt-3 font-weight-600'>Virus Kills Member Of Advising Iran’s Supreme</h3>
												<p className='fs-13 text-muted mb-0'>
													<span className='mr-2'>Photo </span>10 Minutes ago
												</p>
											</div>
										</div>
									</div>
									<Pagination total={listSearch?.pagination?.total} limit={5} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Search;
