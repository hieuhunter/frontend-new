import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPlayBtn, BsInstagram } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import http from '../utils/http';
const NavOne = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {

		const fetchData = async () => {
			try {
				const { data } = await http.get({
					url: `http://127.0.0.1:8000/api/categories`
				});
				setCategories(data.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	const categoriesRecursive = (data = []) => {
		return (
			data.length &&
			data.map((item, index) => {
				return (
					<li className='nav-item nav01' key={index} >
						<Link href={`/${item.slug}`}>
							<a className='nav-link'>{item.name}</a>
						</Link>
					</li>
				);
			})
		);
	};
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
											{categories && categoriesRecursive(categories)}
											{/* <Dropdown className='nav-item nav01'>
												<Dropdown.Toggle variant="success" id="dropdown-basic" className='nav-link'>
													Thế giới
												</Dropdown.Toggle>

												<Dropdown.Menu>
													<Dropdown.Item href="/magazine">Action</Dropdown.Item>
													<Dropdown.Item href="/magazine">Another action</Dropdown.Item>
													<Dropdown.Item href="/magazine">Something else</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<Dropdown className='nav-item nav01'>
												<Dropdown.Toggle variant="success" id="dropdown-basic" className='nav-link'>
													Kinh te
												</Dropdown.Toggle>

												<Dropdown.Menu>
													<Dropdown.Item href="/business">Action</Dropdown.Item>
													<Dropdown.Item href="/business">Another action</Dropdown.Item>
													<Dropdown.Item href="/business">Something else</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<Dropdown className='nav-item nav01'>
												<Dropdown.Toggle variant="success" id="dropdown-basic" className='nav-link'>
													Xa hoi
												</Dropdown.Toggle>

												<Dropdown.Menu>
													<Dropdown.Item href="/sports">Action</Dropdown.Item>
													<Dropdown.Item href="/sports">Another action</Dropdown.Item>
													<Dropdown.Item href="/sports">Something else</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>

											<li className='nav-item nav01'>
												<Link href='/politics'>
													<a className='nav-link'>Van hoa</a>
												</Link>
											</li>
											<li className='nav-item nav01'>
												<Link href='/travel'>
													<a className='nav-link'>The thao</a>
												</Link>
											</li>
										 */}
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
