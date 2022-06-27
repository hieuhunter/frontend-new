import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Banner = () => {
	const router = useRouter();
	const [search, setSearch] = useState(router.query?.q || '');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const onSearchSubmit = (e) => {
		e.preventDefault();
		try {
			router.push(`/tim-kiem?q=${search}`);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChangeSearch = (event) => {
		setSearch(event.target.value);
	};

	return (

		<div className='flash-news-banner'>
			<div className='container'>
				<div className='d-lg-flex align-items-center justify-content-between'>
					<div className='d-flex align-items-center'>
						<span className='badge badge-dark mr-3'>Flash news</span>
						<p className='mb-0'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
					</div>
					<div className='d-flex'>
						<span className='mr-3 text-danger'>Wed, March 4, 2020</span>
						<span className='text-danger'>30°C,London</span>
					</div>
				</div>
			</div>
			<div className='s132'>
				<form onSubmit={onSearchSubmit} >
					<div className="inner-form">
						{/* <div className="input-field first-wrap">
						<div className="input-select">
							<select data-trigger name="choices-single-defaul">
								<option placeholder>Category</option>
								<option>Subject A</option>
								<option>Subject B</option>
								<option>Subject C</option>
							</select>
						</div>
					</div> */}
						<div className="input-field second-wrap" >
							<input
								value={search}
								onChange={handleChangeSearch} id="search" type="text" placeholder="Enter Search" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Banner;
