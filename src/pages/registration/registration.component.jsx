import React from 'react';

import SignIn from '../../components/signin/signin.component';
import './registration.styles.scss';

const Registration = () => (
    <div className='registration'>
        <h1 className='registration-title page-title'>Sign in</h1>
        <SignIn />
    </div>
);

export default Registration