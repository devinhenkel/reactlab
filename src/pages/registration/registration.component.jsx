import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import './registration.styles.scss';

const Registration = () => (
    <div className='registration'>
        <SignIn />
        <SignUp />
    </div>
);

export default Registration