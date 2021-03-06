import classNames from 'classnames';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { setCookie } from 'utils/cookies';
import http from 'utils/http';
import * as yup from 'yup';

const Register = () => {
	const [key, setKey] = useState('home');
	/* 	const { data } = useSWR(`/auth/signup`, {
		revalidateOnFocus: false
	}); */
	const router = useRouter();
	const formik = useFormik({
		initialValues: {
			first_name: '',
			last_name: '',
			user_name: '',
			password: '',
			email: ''
		},
		validationSchema: yup.object({
			first_name: yup
				.string()
				.min(2, 'First Name must have at least 2 characters')
				.max(16, 'First Name must be more than 16 characters')
				.required('First Name required'),
			last_name: yup
				.string()
				.min(2, 'Last Name must have at least 2 characters')
				.max(16, 'Last Name must be more than 16 characters')
				.required('Last Name required')
				.nullable(),
			user_name: yup
				.string()
				.min(6, 'Username must have at least 6 characters')
				.max(66, 'Username must be more than 66 characters')
				.matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'Username invalid')
				.required('Username required')
				.nullable(),
			password: yup.string().required('Password required').nullable(),
			email: yup
				.string()
				.matches(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					'Email invalid'
				)
				.required('Email required')
		}),
		onSubmit: (values, { setSubmitting, setErrors }) => {
			http
				.post({
					url: `/auth/signup`,
					data: {
						first_name: values.first_name,
						last_name: values.last_name,
						user_name: values.user_name,
						password: values.password,
						email: values.email
					}
				})
				.then((response) => {
					router.push('/login');
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
				{/* 
				<Tab eventKey="home" title="Login" className='signin-active '>

					<form className="form-signin" action method="formik" name="form">
						<label htmlFor="fullname">Full name</label><input className="form-styling" type="text" name="username" placeholder="" />
						<label htmlFor="dlno">Driving License Number</label> <input className="form-styling" type="text" name="username" placeholder="" />
						<label htmlFor="password">Password</label> <input className="form-styling" type="text" name="password" placeholder="" />
						<input type="checkbox" id="checkbox" /> <label htmlFor="checkbox"><span className="ui" />Keep me signed in</label>
						<div className="btn-animate"> <CustomLink href="#!" className="btn-signin">Login to your account</CustomLink> </div>

					</form>

					<div className="forgot"> <CustomLink href="#">Forgot your password?</CustomLink> </div>
				</Tab> */}
				<h3 className='signin-active signin-active1' eventkey='home'>
					Register
				</h3>
				<div title='Register'>
					<form className='form-signin' onSubmit={formik.handleSubmit}>
						<label htmlFor='first_name'>First Name</label>
						{/*<input className="form-styling" type="text" name="email" placeholder="" /> */}
						<input
							type='text'
							className={classNames('form-styling', {
								'is-invalid': formik.touched.first_name && formik.errors.first_name
							})}
							placeholder='First name'
							id='first_name'
							name='first_name'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.first_name}
						/>
						{formik.touched.first_name && formik.errors.first_name && (
							<div id='invalid-feedback'>{formik.errors.first_name}</div>
						)}
						<label htmlFor='last_name'>Last Name</label>
						{/* <input className="form-styling" type="text" name="email" placeholder="" /> */}
						<input
							type='text'
							className={classNames('form-styling', {
								'is-invalid': formik.touched.last_name && formik.errors.last_name
							})}
							placeholder='Last name'
							id='last_name'
							name='last_name'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.last_name}
						/>
						{formik.touched.last_name && formik.errors.last_name && (
							<div id='invalid-feedback'>{formik.errors.last_name}</div>
						)}
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
						<label htmlFor='email'>Email</label>
						{/* 	<input className="form-styling" type="text" name="confirmpassword" placeholder="" /> */}
						<input
							type='text'
							className={classNames('form-styling', {
								'is-invalid': formik.touched.email && formik.errors.email
							})}
							placeholder='Email'
							id='email'
							name='email'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email && <div id='invalid-feedback'>{formik.errors.email}</div>}
						<button
							className='btn-signup'
							type='submit'
							disabled={formik.isSubmitting}
						>
							{formik.isSubmitting ? 'Signuping' : 'Register'}
							{/* REGISTER */}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Register;
