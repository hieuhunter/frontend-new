import React, { useCallback, useEffect, useState } from 'react';
import CustomLink from './CustomLink';
import Image from 'next/image';
import { BsPlayBtn, BsInstagram } from 'react-icons/bs';
import { RiFacebookFill } from 'react-icons/ri';
import http from '../utils/http';
import useUser from 'hooks/useUser';
import { getCookie, removeCookie } from 'utils/cookies';
import { useRouter } from 'next/router';

const NavOne = () => {
	const { user } = useUser();
	const router = useRouter();
	const [categories, setCategories] = useState([]);

	

	const onLogoutClick = () => {
		http.post({
			url: `/auth/signout`,
			token: getCookie('token')
		});
		removeCookie('token');
		router.push('/login');

	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await http.get({
					url: `/categories`
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
					<li className='nav-item nav01' key={index}>
						<CustomLink href={`/${item.slug}`} className='nav-link'>
							{item.name}
						</CustomLink>
					</li>
				);
			})
		);
	};

	return (
		<header id='header'>
			<div className='container'>
				<nav className='navbar navbar-expand-lg navbar-light'>
					<div className='navbar-top'>
						<div className='d-flex justify-content-between align-items-center'>
							<ul className='navbar-top-left-menu'>
								<li className='nav-item nav01'>
									<CustomLink href='#' className='nav-link'>
										Advertise
									</CustomLink>
								</li>
								<li className='nav-item nav01'>
									<CustomLink href='#' className='nav-link'>
										About
									</CustomLink>
								</li>
								<li className='nav-item nav01'>
									<CustomLink href='#' className='nav-link'>
										Events
									</CustomLink>
								</li>
								<li className='nav-item nav01'>
									<CustomLink href='#' className='nav-link'>
										Write for Us
									</CustomLink>
								</li>
								<li className='nav-item nav01'>
									<CustomLink href='#' className='nav-link'>
										In the Press
									</CustomLink>
								</li>
							</ul>
							<ul className='navbar-top-right-menu'>
								<li className='nav-item nav01'>
									<CustomLink href='#' className='nav-link'>
										<i className='mdi mdi-magnify' />
									</CustomLink>
								</li>
								{
									!user ? (
										<>
											<li className='nav-item nav01'>
												<CustomLink href='/login' className='nav-link'>
													Login
												</CustomLink>
											</li>
											<li className='nav-item nav01'>
												<CustomLink href='/register' className='nav-link'>
													Register
												</CustomLink>
											</li>
										</>
									) : (
										<>
											<li className='nav-item nav01'>
												<CustomLink href='/' className='nav-link'>
													{user?.user_name}
												</CustomLink>
											</li>
											<li className='nav-item nav01'>
												<a href='#' type="button" onClick={onLogoutClick} className='nav-link'>
													Logout
												</a>
											</li>
										</>
									)
								}
							</ul>
						</div>
					</div>
					<div className='navbar-bottom'>
						<div className='d-flex justify-content-between align-items-center'>
							<div>
								<CustomLink className='navbar-brand' href='/'>
									<Image src='/assets/images/logo.svg' width={192} height={20} alt='' />
								</CustomLink>
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
											<CustomLink href='/' className='nav-link'>
												Home
											</CustomLink>
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
												<CustomLink href='/politics'>
													<CustomLink className='nav-link'>Van hoa</CustomLink>
												</CustomLink>
											</li>
											<li className='nav-item nav01'>
												<CustomLink href='/travel'>
													<CustomLink className='nav-link'>The thao</CustomLink>
												</CustomLink>
											</li>
										 */}
										<li className='nav-item nav01'>
											<CustomLink href='/contactus' className='nav-link'>
												Contact
											</CustomLink>
										</li>
									</ul>
								</div>
							</div>
							<ul className='social-media'>
								<li>
									<CustomLink href='#'>
										<RiFacebookFill />
									</CustomLink>
								</li>
								<li>
									<CustomLink href='#'>
										<BsInstagram />
									</CustomLink>
								</li>
								<li>
									<CustomLink href='#'>
										<BsPlayBtn />
									</CustomLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};
export default NavOne;
