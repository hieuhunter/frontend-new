import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BsPlayBtnFill } from "react-icons/bs";
import Image from 'next/image'
import CustomLink from './CustomLink';

const Content = ({ posts }) => {
	console.log(posts);
	return (
		<>
			<div className='content-wrapper'>
				<div className='container'>
					<div className='row' data-aos='fade-up'>
						{/* <div className='col-xl-8 stretch-card grid-margin'>
							<div className='position-relative'>
								<Image src='/assets/images/dashboard/banner.jpg' alt='banner' className='img-fluid' />
								<div className='banner-content'>
									<div className='badge badge-danger fs-12 font-weight-bold mb-3'>global news</div>
									<h1 className='mb-0'>GLOBAL PANDEMIC</h1>
									<h1 className='mb-2'>Coronavirus Outbreak LIVE Updates: ICSE, CBSE Exams Postponed, 168 Trains</h1>
									<div className='fs-12'>
										<span className='mr-2'>Photo </span>10 Minutes ago
									</div>
								</div>
							</div>
						</div> */}
						<Carousel className='col-xl-8 stretch-card grid-margin'>
							<Carousel.Item className='position-relative'>
								<Image
									layout="responsive"
									width={724}
									height={429}
									className="img-fluid"
									src='/assets/images/dashboard/banner.jpg' alt='banner'
								/>
								<Carousel.Caption className='banner-content'>
									<div className='badge badge-danger fs-12 font-weight-bold mb-3'>global news</div>
									<h1 className='mb-0'>GLOBAL PANDEMIC</h1>
									<h1 className='mb-2'>Coronavirus Outbreak LIVE Updates: ICSE, CBSE Exams Postponed, 168 Trains</h1>
									<div className='fs-12'>
										<span className='mr-2'>Photo </span>10 Minutes ago
									</div>

								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item className='position-relative'>
								<Image
									layout="responsive"
									width={724}
									height={429}
									className="img-fluid"
									src='/assets/images/dashboard/banner.jpg' alt='banner'
								/>
								<Carousel.Caption className='banner-content'>
									<div className='badge badge-danger fs-12 font-weight-bold mb-3'>global news</div>
									<h1 className='mb-0'>GLOBAL PANDEMIC</h1>
									<h1 className='mb-2'>Coronavirus Outbreak LIVE Updates: ICSE, CBSE Exams Postponed, 168 Trains</h1>
									<div className='fs-12'>
										<span className='mr-2'>Photo </span>10 Minutes ago
									</div>

								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item className='position-relative'>
								<Image
									layout="responsive"
									width={724}
									height={429}
									className="img-fluid"
									src='/assets/images/dashboard/banner.jpg' alt='banner'
								/>

								<Carousel.Caption className='banner-content'>
									<div className='badge badge-danger fs-12 font-weight-bold mb-3'>global news</div>
									<h1 className='mb-0'>GLOBAL PANDEMIC</h1>
									<h1 className='mb-2'>Coronavirus Outbreak LIVE Updates: ICSE, CBSE Exams Postponed, 168 Trains</h1>
									<div className='fs-12'>
										<span className='mr-2'>Photo </span>10 Minutes ago
									</div>

								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
						<div className='col-xl-4 stretch-card grid-margin'>
							<div className='card bg-dark text-white'>
								<div className='card-body'>
									<h2>Latest news</h2>

									<div className='d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between'>
										<div className='pr-3'>
											<h5>Virus Kills Member Of Advising Iran’s Supreme</h5>
											<div className='fs-12'>
												<span className='mr-2'>Photo </span>10 Minutes ago
											</div>
										</div>
										<div className='rotate-img'>
											<Image src='/assets/images/dashboard/home_1.jpg' width={200} height={200} alt='thumb' className='img-fluid img-lg' />
										</div>
									</div>
									{/* <div className='d-flex border-bottom-blue pb-4 pt-4 align-items-center justify-content-between'>
										<div className='pr-3'>
											<h5>Virus Kills Member Of Advising Iran’s Supreme</h5>
											<div className='fs-12'>
												<span className='mr-2'>Photo </span>10 Minutes ago
											</div>
										</div>
										<div className='rotate-img'>
											<Image src='/assets/images/dashboard/home_2.jpg' alt='thumb' className='img-fluid img-lg' />
										</div>
									</div> */}
									<div className='d-flex pt-4 align-items-center justify-content-between'>
										<div className='pr-3'>
											<h5>Virus Kills Member Of Advising Irans Supreme</h5>
											<div className='fs-12'>
												<span className='mr-2'>Photo </span>10 Minutes ago
											</div>
										</div>
										<div className='rotate-img'>
											<Image src='/assets/images/dashboard/home_3.jpg' width={200} height={200} alt='thumb' className='img-fluid img-lg' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row' data-aos='fade-up'>
						<div className='col-lg-3 stretch-card grid-margin'>
							<div className='card'>
								<div className='card-body'>
									<h2>Category</h2>
									<ul className='vertical-menu'>
										<li>
											<CustomLink href='#'>Politics</CustomLink>
										</li>
										<li>
											<CustomLink href='#'>International</CustomLink>
										</li>
										<li>
											<CustomLink href='#'>Finance</CustomLink>
										</li>
										<li>
											<CustomLink href='#'>Health care</CustomLink>
										</li>
										<li>
											<CustomLink href='#'>Technology</CustomLink>
										</li>
										<li>
											<CustomLink href='#'>Jobs</CustomLink>
										</li>
										<li>
											<CustomLink href='#'>Media</CustomLink>
										</li>
										<li>
											<CustomLink href='#'>Administration</CustomLink>
										</li>
										<li>
											<CustomLink href='#'>Sports</CustomLink>
										</li>
										<li>
											<CustomLink href='#'>Game</CustomLink>
										</li>
										<li>
											<CustomLink href='#'>Art</CustomLink>
										</li>
										<li>
											<CustomLink href='#'>Kids</CustomLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col-lg-9 stretch-card grid-margin'>
							<div className='card'>
								<div className='card-body'>
									{posts.data.length &&
										posts.data.map((post, index) => (
											<div className='row' key={index}>
												<div className='col-sm-4 grid-margin'>
													<div className='position-relative'>
														<div className='rotate-img'>
															<Image src='/assets/images/dashboard/home_4.jpg' width={228} height={154} alt='thumb' className='img-fluid' />
														</div>
														<div className='badge-positioned'>
															<span className='badge badge-danger font-weight-bold'>Flash news</span>
														</div>
													</div>
												</div>
												<div className='col-sm-8  grid-margin'>
													<h2 className='mb-2 font-weight-600'>
														{post.title}
													</h2>
													<div className='fs-13 mb-2'>
														<span className='mr-2'>Photo </span>10 Minutes ago
													</div>
													<p className='mb-0'>
														{post.excerpt}
													</p>
												</div>
											</div>
										))}
									{/* <div className='row'>
										<div className='col-sm-4 grid-margin'>
											<div className='position-relative'>
												<div className='rotate-img'>
													<Image src='/assets/images/dashboard/home_5.jpg' alt='thumb' className='img-fluid' />
												</div>
												<div className='badge-positioned'>
													<span className='badge badge-danger font-weight-bold'>Flash news</span>
												</div>
											</div>
										</div>
										<div className='col-sm-8  grid-margin'>
											<h2 className='mb-2 font-weight-600'>No charges over 2017 Conservative battle bus cases</h2>
											<div className='fs-13 mb-2'>
												<span className='mr-2'>Photo </span>10 Minutes ago
											</div>
											<p className='mb-0'>
												Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an
											</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-sm-4'>
											<div className='position-relative'>
												<div className='rotate-img'>
													<Image src='/assets/images/dashboard/home_6.jpg' alt='thumb' className='img-fluid' />
												</div>
												<div className='badge-positioned'>
													<span className='badge badge-danger font-weight-bold'>Flash news</span>
												</div>
											</div>
										</div>
										<div className='col-sm-8'>
											<h2 className='mb-2 font-weight-600'>Kaine: Trump Jr. may have committed treason</h2>
											<div className='fs-13 mb-2'>
												<span className='mr-2'>Photo </span>10 Minutes ago
											</div>
											<p className='mb-0'>
												Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an
											</p>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
					<div className='row' data-aos='fade-up'>
						<div className='col-sm-12 grid-margin'>
							<div className='card'>
								<div className='card-body'>
									<div className='row'>
										<div className='col-lg-8'>
											<div className='card-title'>Video</div>
											<div className='row'>
												<div className='col-sm-6 grid-margin'>
													<div className='position-relative'>
														<div className='rotate-img'>
															<Image src='/assets/images/dashboard/home_7.jpg' width={323} height={188} alt='thumb' className='img-fluid' />
														</div>
														<div className='badge-positioned w-90'>
															<div className='d-flex justify-content-between align-items-center'>
																<span className='badge badge-danger font-weight-bold'>Lifestyle</span>
																<div className='video-icon'>
																	<BsPlayBtnFill />
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className='col-sm-6 grid-margin'>
													<div className='position-relative'>
														<div className='rotate-img'>
															<Image src='/assets/images/dashboard/home_8.jpg' width={323} height={188} alt='thumb' className='img-fluid' />
														</div>
														<div className='badge-positioned w-90'>
															<div className='d-flex justify-content-between align-items-center'>
																<span className='badge badge-danger font-weight-bold'>National News</span>
																<div className='video-icon'>
																	<BsPlayBtnFill />
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className='row'>
												<div className='col-sm-6 grid-margin'>
													<div className='position-relative'>
														<div className='rotate-img'>
															<Image src='/assets/images/dashboard/home_9.jpg' width={323} height={188} alt='thumb' className='img-fluid' />
														</div>
														<div className='badge-positioned w-90'>
															<div className='d-flex justify-content-between align-items-center'>
																<span className='badge badge-danger font-weight-bold'>Lifestyle</span>
																<div className='video-icon'>
																	<BsPlayBtnFill />
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className='col-sm-6 grid-margin'>
													<div className='position-relative'>
														<div className='rotate-img'>
															<Image src='/assets/images/dashboard/home_10.jpg' width={323} height={188} alt='thumb' className='img-fluid' />
														</div>
														<div className='badge-positioned w-90'>
															<div className='d-flex justify-content-between align-items-center'>
																<span className='badge badge-danger font-weight-bold'>National News</span>
																<div className='video-icon'>
																	<BsPlayBtnFill />
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='col-lg-4'>
											<div className='d-flex justify-content-between align-items-center'>
												<div className='card-title'>Latest Video</div>
												<p className='mb-3'>See all</p>
											</div>
											<div className='d-flex justify-content-between align-items-center border-bottom pb-2'>
												<div className='div-w-80 mr-3'>
													<div className='rotate-img'>
														<Image src='/assets/images/dashboard/home_11.jpg' width={72} height={57} alt='thumb' className='img-fluid' />
													</div>
												</div>
												<h3 className='font-weight-600 mb-0'>Apple Introduces Apple Watch</h3>
											</div>
											<div className='d-flex justify-content-between align-items-center border-bottom pt-3 pb-2'>
												<div className='div-w-80 mr-3'>
													<div className='rotate-img'>
														<Image src='/assets/images/dashboard/home_12.jpg' width={72} height={57} alt='thumb' className='img-fluid' />
													</div>
												</div>
												<h3 className='font-weight-600 mb-0'>SEO Strategy &amp; Google Search</h3>
											</div>
											<div className='d-flex justify-content-between align-items-center border-bottom pt-3 pb-2'>
												<div className='div-w-80 mr-3'>
													<div className='rotate-img'>
														<Image src='/assets/images/dashboard/home_13.jpg' width={72} height={57} alt='thumb' className='img-fluid' />
													</div>
												</div>
												<h3 className='font-weight-600 mb-0'>Cycling benefit &amp; disadvantag</h3>
											</div>
											<div className='d-flex justify-content-between align-items-center border-bottom pt-3 pb-2'>
												<div className='div-w-80 mr-3'>
													<div className='rotate-img'>
														<Image src='/assets/images/dashboard/home_14.jpg' width={72} height={57} alt='thumb' className='img-fluid' />
													</div>
												</div>
												<h3 className='font-weight-600'>The Major Health Benefits of</h3>
											</div>
											<div className='d-flex justify-content-between align-items-center pt-3'>
												<div className='div-w-80 mr-3'>
													<div className='rotate-img'>
														<Image src='/assets/images/dashboard/home_15.jpg' width={72} height={57} alt='thumb' className='img-fluid' />
													</div>
												</div>
												<h3 className='font-weight-600 mb-0'>Powerful Moments of Peace</h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row' data-aos='fade-up'>
						<div className='col-sm-12'>
							<div className='card'>
								<div className='card-body'>
									<div className='row'>
										<div className='col-xl-6'>
											<div className='card-title'>Sport light</div>
											<div className='row'>
												<div className='col-xl-6 col-lg-8 col-sm-6'>
													<div className='rotate-img'>
														<Image src='/assets/images/dashboard/home_16.jpg' alt='thumb' width={200} height={200} className='img-fluid' />
													</div>
													<h2 className='mt-3 text-primary mb-2'>Newsrooms exercise..</h2>
													<p className='fs-13 mb-1 text-muted'>
														<span className='mr-2'>Photo </span>10 Minutes ago
													</p>
													<p className='my-3 fs-15'>
														Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
														printer took
													</p>
													<CustomLink href='#' className='font-weight-600 fs-16 text-dark'>
														Read more
													</CustomLink>
												</div>
												<div className='col-xl-6 col-lg-4 col-sm-6'>
													<div className='border-bottom pb-3 mb-3'>
														<h3 className='font-weight-600 mb-0'>Social distancing is ..</h3>
														<p className='fs-13 text-muted mb-0'>
															<span className='mr-2'>Photo </span>10 Minutes ago
														</p>
														<p className='mb-0'>Lorem Ipsum has been the industry</p>
													</div>
													<div className='border-bottom pb-3 mb-3'>
														<h3 className='font-weight-600 mb-0'>Panic buying is forcing..</h3>
														<p className='fs-13 text-muted mb-0'>
															<span className='mr-2'>Photo </span>10 Minutes ago
														</p>
														<p className='mb-0'>Lorem Ipsum has been the industry</p>
													</div>
													<div className='border-bottom pb-3 mb-3'>
														<h3 className='font-weight-600 mb-0'>Businesses ask hundreds..</h3>
														<p className='fs-13 text-muted mb-0'>
															<span className='mr-2'>Photo </span>10 Minutes ago
														</p>
														<p className='mb-0'>Lorem Ipsum has been the industry</p>
													</div>
													<div>
														<h3 className='font-weight-600 mb-0'>Tesla California factory..</h3>
														<p className='fs-13 text-muted mb-0'>
															<span className='mr-2'>Photo </span>10 Minutes ago
														</p>
														<p className='mb-0'>Lorem Ipsum has been the industry</p>
													</div>
												</div>
											</div>
										</div>
										<div className='col-xl-6'>
											<div className='row'>
												<div className='col-sm-6'>
													<div className='card-title'>Sport light</div>
													<div className='border-bottom pb-3'>
														<div className='rotate-img'>
															<Image src='/assets/images/dashboard/home_17.jpg' width={233} height={124} alt='thumb' className='img-fluid' />
														</div>
														<p className='fs-16 font-weight-600 mb-0 mt-3'>Kaine: Trump Jr. may have</p>
														<p className='fs-13 text-muted mb-0'>
															<span className='mr-2'>Photo </span>10 Minutes ago
														</p>
													</div>
													<div className='pt-3 pb-3'>
														<div className='rotate-img'>
															<Image src='/assets/images/dashboard/home_18.jpg' width={233} height={124} alt='thumb' className='img-fluid' />
														</div>
														<p className='fs-16 font-weight-600 mb-0 mt-3'>Kaine: Trump Jr. may have</p>
														<p className='fs-13 text-muted mb-0'>
															<span className='mr-2'>Photo </span>10 Minutes ago
														</p>
													</div>
												</div>
												<div className='col-sm-6'>
													<div className='card-title'>Celebrity news</div>
													<div className='row'>
														<div className='col-sm-12'>
															<div className='border-bottom pb-3'>
																<div className='row'>
																	<div className='col-sm-5 pr-2'>
																		<div className='rotate-img'>
																			<Image
																				width={86} height={69}
																				src='/assets/images/dashboard/home_19.jpg'
																				alt='thumb'
																				className='img-fluid w-100'
																			/>
																		</div>
																	</div>
																	<div className='col-sm-7 pl-2'>
																		<p className='fs-16 font-weight-600 mb-0'>Online shopping ..</p>
																		<p className='fs-13 text-muted mb-0'>
																			<span className='mr-2'>Photo </span>10 Minutes ago
																		</p>
																		<p className='mb-0 fs-13'>Lorem Ipsum has been</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className='row'>
														<div className='col-sm-12'>
															<div className='border-bottom pb-3 pt-3'>
																<div className='row'>
																	<div className='col-sm-5 pr-2'>
																		<div className='rotate-img'>
																			<Image
																				width={86} height={69}
																				src='/assets/images/dashboard/home_20.jpg'
																				alt='thumb'
																				className='img-fluid w-100'
																			/>
																		</div>
																	</div>
																	<div className='col-sm-7 pl-2'>
																		<p className='fs-16 font-weight-600 mb-0'>Online shopping ..</p>
																		<p className='fs-13 text-muted mb-0'>
																			<span className='mr-2'>Photo </span>10 Minutes ago
																		</p>
																		<p className='mb-0 fs-13'>Lorem Ipsum has been</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className='row'>
														<div className='col-sm-12'>
															<div className='border-bottom pb-3 pt-3'>
																<div className='row'>
																	<div className='col-sm-5 pr-2'>
																		<div className='rotate-img'>
																			<Image
																				width={86} height={69}
																				src='/assets/images/dashboard/home_21.jpg'
																				alt='thumb'
																				className='img-fluid w-100'
																			/>
																		</div>
																	</div>
																	<div className='col-sm-7 pl-2'>
																		<p className='fs-16 font-weight-600 mb-0'>Online shopping ..</p>
																		<p className='fs-13 text-muted mb-0'>
																			<span className='mr-2'>Photo </span>10 Minutes ago
																		</p>
																		<p className='mb-0 fs-13'>Lorem Ipsum has been</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className='row'>
														<div className='col-sm-12'>
															<div className='pt-3'>
																<div className='row'>
																	<div className='col-sm-5 pr-2'>
																		<div className='rotate-img'>
																			<Image
																				width={86} height={69}
																				src='/assets/images/dashboard/home_22.jpg'
																				alt='thumb'
																				className='img-fluid w-100'
																			/>
																		</div>
																	</div>
																	<div className='col-sm-7 pl-2'>
																		<p className='fs-16 font-weight-600 mb-0'>Online shopping ..</p>
																		<p className='fs-13 text-muted mb-0'>
																			<span className='mr-2'>Photo </span>10 Minutes ago
																		</p>
																		<p className='mb-0 fs-13'>Lorem Ipsum has been</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Content;
