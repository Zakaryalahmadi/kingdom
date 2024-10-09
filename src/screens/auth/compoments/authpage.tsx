import * as React from 'react';

import './style.scss'
import logo from  '../assets/logo.png';
import illustration from  '../assets/illustration.png';
import google from '../assets/google-logo.png'
import { Link } from 'react-router-dom';

const Auth: React.FunctionComponent = () => {

 
  return <div className='authPage'>
    <div className='logo'>
        <img src={logo} alt="" />
    </div>

    <div className='login-content'>
        <h1 className='welcome'>Content de te voir !</h1>
        <div className='login-google'>
            <img src={google} alt="" />
            <Link to={'/choice'} className='connect-btn'>Se connecter</Link>
        </div>
    </div>

    <div className='illustration'>
        {/* <img src={illustration} alt="" /> */}
    </div>
  </div>;
};

export default Auth;
