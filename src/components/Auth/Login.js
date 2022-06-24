import classNames from 'classnames';
import CustomLink from 'components/CustomLink';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { setCookie } from 'utils/cookies';
import http from 'utils/http';
import * as yup from 'yup';
const Login = () => {
	const [key, setKey] = useState('home');
	const router = useRouter();
	const formik = useFormik({
		initialValues: {
			user_name: '',
			password: ''
		},
		validationSchema: yup.object({
			user_name: yup
				.string()
				.min(6, 'Username must have at least 6 characters')
				.max(66, 'Username must be more than 66 characters')
				.matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'Username invalid')
				.required('Username required')
				.nullable(),
			password: yup.string().required('Password required').nullable()
		}),

		onSubmit: (values, { setSubmitting, setErrors }) => {
			http
				.post({
					url: `/auth/signin`,
					data: {
						user_name: values.user_name,
						password: values.password
					}
				})
				.then((response) => {
					setCookie('token', response.data.data.token);
					router.push('/');
				})
				.catch((error) => {
					if (error.response?.status === 400) {
						setErrors(error.response?.data?.errors);
					}
				})
				.finally(() => {
					setSubmitting(false);
				});
		}
	});
	return (
		<div className='container-1 frame'>
			<div id='controlled-tab-example' activekey={key} onSelect={(k) => setKey(k)} className='mb-3 links'>
				<h3 className='signin-active signin-active1' eventkey='home'>
					Login
				</h3>
				<div title='Login'>
					<form className='form-signin' onSubmit={formik.handleSubmit}>
						<label htmlFor='last_name'>User Name</label>
						{/* <input className="form-styling" type="text" name="dlno" placeholder="" /> */}
						<input
							type='text'
							className={classNames('form-styling', {
								'is-invalid': formik.touched.user_name && formik.errors.user_name
							})}
							placeholder='User name'
							id='last_name'
							name='user_name'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.user_name}
						/>
						{formik.touched.user_name && formik.errors.user_name && (
							<div id='invalid-feedback'>{formik.errors.user_name}</div>
						)}
						<label htmlFor='password'>Password</label>
						{/* 	<input className="form-styling" type="text" name="confirmpassword" placeholder="" /> */}
						<input
							type='password'
							className={classNames('form-styling', {
								'is-invalid': formik.touched.password && formik.errors.password
							})}
							placeholder='Password'
							id='password'
							name='password'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
						{formik.touched.password && formik.errors.password && (
							<div id='invalid-feedback'>{formik.errors.password}</div>
						)}
						<input type='checkbox' id='checkbox' />
						<label htmlFor='checkbox'>
							<span className='ui' />
							Keep me signed in
						</label>
						<div>
							{' '}
							<button
								className='btn-signup'
								type='submit'
								disabled={formik.isSubmitting}
							>
								{formik.isSubmitting ? 'Signning' : 'Login to your account'}
								{/* REGISTER */}
							</button>
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
