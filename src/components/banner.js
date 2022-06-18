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
			</div>
		</>
	);
};
export default Banner;
