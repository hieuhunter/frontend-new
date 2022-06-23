import CustomLink from 'components/CustomLink';
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import useSWR from 'swr';
import * as yup from 'yup';
const Login = () => {
	const [key, setKey] = useState('home');
	const { data } = useSWR(`/auth/signin`, {
		revalidateOnFocus: false
	});

	console.log('data', data);

	const initialValues = {
		user_name: '',
		password: ''
	};
	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.min(6, 'Họ và tên ít nhất phải có 6 ký tự')
			.max(16, 'Họ và tên phải có nhiều nhất 16 ký tự')
			.required('Họ và tên là bắt buộc'),
		email: yup
			.string()
			.matches(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Email invalid'
			)
			.required('Email là bắt buộc'),
		phone_number: yup
			.string()
			.min(10, 'Số điện thoại ít nhất phải có 10 ký tự')
			.matches(/^[0-9 +]+$/, 'Sdt invalid')
			.nullable(),
		content: yup
			.string()
			.min(6, 'Nội dung ít nhất phải có 6 ký tự')
			.max(66, 'Nội dung phải có nhiều nhất 16 ký tự')
			.required('Nội dung là bắt buộc')
			.nullable()
	});
	const onSubmit = async (values) => {
		const user = {
			user_name: values.user_name,
			password: values.password
		};
		console.log(user);
		const res = await http.post({
			url: `/advise`,
			data: user
		});
	};
	return (
		<div className='container-1 frame'>
			<div id='controlled-tab-example' activeKey={key} onSelect={(k) => setKey(k)} className='mb-3 links'>
				<h3 className='signin-active signin-active1' eventKey='home'>
					Login
				</h3>
				<div title='Login'>
					<form className='form-signin'>
						<label htmlFor='fullname'>Full name</label>
						<input className='form-styling' type='text' name='username' placeholder='' />
						<label htmlFor='dlno'>Driving License Number</label>
						<input className='form-styling' type='text' name='username' placeholder='' />
						<label htmlFor='password'>Password</label>
						<input className='form-styling' type='text' name='password' placeholder='' />
						<input type='checkbox' id='checkbox' />
						<label htmlFor='checkbox'>
							<span className='ui' />
							Keep me signed in
						</label>
						<div className='btn-animate'>
							{' '}
							<CustomLink href='#!' className='btn-signin'>
								Login to your account
							</CustomLink>{' '}
						</div>
					</form>

					<div className='forgot'>
						{' '}
						<CustomLink href='#'>Forgot your password?</CustomLink>{' '}
					</div>
				</div>
				{/*       <Tab eventKey="profile" title="Resgiter">

                    <form className="form-signin" action method="post" name="form">
                        <label htmlFor="fullname">Full name</label>
                        <input className="form-styling" type="text" name="email" placeholder="" />
                        <label htmlFor="email">Email</label>
                        <input className="form-styling" type="text" name="email" placeholder="" />
                        <label htmlFor="dlno">Enter DL Number</label>
                        <input className="form-styling" type="text" name="dlno" placeholder="" />
                        <label htmlFor="password">Create password</label>
                        <input className="form-styling" type="text" name="confirmpassword" placeholder="" />
                        <CustomLink href="" ng-click="checked = !checked" className="btn-signup">REGISTER</CustomLink>

                    </form>

                </Tab> */}
			</div>
		</div>
	);
};
export default Login;
