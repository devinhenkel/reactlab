import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/lab-logo-horizontal.svg';
import { auth } from '../../firebase/firebase.utils';


const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to="/" className='header-logo-container'>
            <Logo className='header-logo' />
        </Link>
        <div className='header-options'>
            <Link className='header-option' to='/shop'>
                Shop
            </Link>
            <Link className='header-option' to='/contact'>
                Contact
            </Link>
            {
                currentUser ? 
                <div className='header-option' onClick={() => auth.signOut()}>Logout</div>
                :
                <Link className='header-option' to='/registration'>Login</Link>


            }
            
        </div>
    </div>
)

export default Header