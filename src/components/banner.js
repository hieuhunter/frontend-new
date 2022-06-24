import React from 'react';
const Banner = () => {
	return (
		<>
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
					<form>
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
							<div className="input-field second-wrap">
								<input id="search" type="text" placeholder="Enter Keywords" />
							</div>
							<div className="input-field third-wrap">
								<button className="btn-search" type="button">Search</button>
							</div>
						</div>
					</form>
				</div>
			</div>

		</>
	);
};
export default Banner;
