import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Auth = () => {
    const [key, setKey] = useState('home');
    return (
        <div className="container-1 frame">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 links"
            >
                <Tab eventKey="home" title="Login" className='signin-active '>
                    <form className="form-signin" action method="post" name="form">
                        <label htmlFor="fullname">Full name</label><input className="form-styling" type="text" name="username" placeholder="" />
                        <label htmlFor="dlno">Driving License Number</label> <input className="form-styling" type="text" name="username" placeholder="" />
                        <label htmlFor="password">Password</label> <input className="form-styling" type="text" name="password" placeholder="" />
                        <input type="checkbox" id="checkbox" /> <label htmlFor="checkbox"><span className="ui" />Keep me signed in</label>
                        <div className="btn-animate"> <a className="btn-signin">Login to your account</a> </div>

                    </form>
                    <div className="forgot"> <a href="#">Forgot your password?</a> </div>
                </Tab>
                <Tab eventKey="profile" title="Resgiter">
                    <form className="form-signin" action method="post" name="form">
                        <label htmlFor="fullname">Full name</label>
                        <input className="form-styling" type="text" name="email" placeholder="" />
                        <label htmlFor="email">Email</label>
                        <input className="form-styling" type="text" name="email" placeholder="" />
                        <label htmlFor="dlno">Enter DL Number</label>
                        <input className="form-styling" type="text" name="dlno" placeholder="" />
                        <label htmlFor="password">Create password</label>
                        <input className="form-styling" type="text" name="confirmpassword" placeholder="" />
                        <a ng-click="checked = !checked" className="btn-signup">REGISTER</a>

                    </form>

                </Tab>
            </Tabs>
        </div>
    );
}
export default Auth;