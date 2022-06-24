
import React from 'react';

const Test = () => {
	return (
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
	);
};
export default Test;





