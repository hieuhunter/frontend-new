import React from 'react';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPlayBtn, BsInstagram } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
const NavOne = () => {
	return (
		<>
			<header id='header'>
				<div className='container'>
					<nav className='navbar navbar-expand-lg navbar-light'>
						<div className='navbar-top'>
							<div className='d-flex justify-content-between align-items-center'>
								<ul className='navbar-top-left-menu'>
									<li className='nav-item nav01'>
										<a href='pages/index-inner.html' className='nav-link'>
											Advertise
										</a>
									</li>
									<li className='nav-item nav01'>
										<a href='pages/aboutus.html' className='nav-link'>
											About
										</a>
									</li>
									<li className='nav-item nav01'>
										<a href='#' className='nav-link'>
											Events
										</a>
									</li>
									<li className='nav-item nav01'>
										<a href='#' className='nav-link'>
											Write for Us
										</a>
									</li>
									<li className='nav-item nav01'>
										<a href='#' className='nav-link'>
											In the Press
										</a>
									</li>
								</ul>
								<ul className='navbar-top-right-menu'>
									<li className='nav-item nav01'>
										<a href='#' className='nav-link'>
											<i className='mdi mdi-magnify' />
										</a>
									</li>
									<li className='nav-item nav01'>
										<a href='/auth/auth' className='nav-link'>
											Login
										</a>
									</li>
									<li className='nav-item nav01'>
										<a href='/auth/auth' className='nav-link'>
											Sign in
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='navbar-bottom'>
							<div className='d-flex justify-content-between align-items-center'>
								<div>
									<a className='navbar-brand' href='#'>
										<img src='assets/images/logo.svg' alt='' />
									</a>
								</div>
								<div>
									<button
										className='navbar-toggler'
										type='button'
										data-target='#navbarSupportedContent'
										aria-controls='navbarSupportedContent'
										aria-expanded='false'
										aria-label='Toggle navigation'
									>
										<span className='navbar-toggler-icon' />
									</button>
									<div className='navbar-collapse justify-content-center collapse' id='navbarSupportedContent'>
										<ul className='navbar-nav d-lg-flex justify-content-between align-items-center'>
											<li>
												<button className='navbar-close'>
													<i className='mdi mdi-close' />
												</button>
											</li>
											<li className='nav-item active nav01'>
												<Link href='/'>
													<a className='nav-link'>Home</a>
												</Link>
											</li>
											<Dropdown className='nav-item nav01'>
												<Dropdown.Toggle variant="success" id="dropdown-basic" className='nav-link'>
													MAGAZINE
												</Dropdown.Toggle>

												<Dropdown.Menu>
													<Dropdown.Item href="/magazine">Action</Dropdown.Item>
													<Dropdown.Item href="/magazine">Another action</Dropdown.Item>
													<Dropdown.Item href="/magazine">Something else</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<Dropdown className='nav-item nav01'>
												<Dropdown.Toggle variant="success" id="dropdown-basic" className='nav-link'>
													Business
												</Dropdown.Toggle>

												<Dropdown.Menu>
													<Dropdown.Item href="/business">Action</Dropdown.Item>
													<Dropdown.Item href="/business">Another action</Dropdown.Item>
													<Dropdown.Item href="/business">Something else</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<Dropdown className='nav-item nav01'>
												<Dropdown.Toggle variant="success" id="dropdown-basic" className='nav-link'>
													Sports
												</Dropdown.Toggle>

												<Dropdown.Menu>
													<Dropdown.Item href="/sports">Action</Dropdown.Item>
													<Dropdown.Item href="/sports">Another action</Dropdown.Item>
													<Dropdown.Item href="/sports">Something else</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<li className='nav-item nav01'>
												<Link href='/art'>
													<a className='nav-link'>Art</a>
												</Link>
											</li>
											<li className='nav-item nav01'>
												<Link href='/politics'>
													<a className='nav-link'>POLITICS</a>
												</Link>
											</li>
											<li className='nav-item nav01'>
												<Link href='/travel'>
													<a className='nav-link'>Travel</a>
												</Link>
											</li>
											<li className='nav-item nav01'>
												<Link href='/contactus'>
													<a className='nav-link'>Contact</a>
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<ul className='social-media'>
									<li>
										<a href='#'>
											<RiFacebookFill />
										</a>
									</li>
									<li>
										<a href='#'>
											<BsInstagram />
										</a>
									</li>
									<li>
										<a href='#'>
											<BsPlayBtn />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};
export default NavOne;
