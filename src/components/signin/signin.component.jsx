import React from 'react';

import FormInput from '../form-input/form-input.component';
import LabButton from '../lab-button/lab-button.component';
import './signin.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'',password:''});
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({[name] : value});
    }

    render() {
        return(
            <div className='signin'>
                <h2 className='signin-headline'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        label='Email'
                        onChange={this.handleChange}
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label='Password'
                        onChange={this.handleChange}
                        required 
                    />
                    <div className='button-container'>
                        <LabButton type='submit' value='submit'>
                            Login
                        </LabButton>
                        <LabButton value='google' onClick={signInWithGoogle} extraStyles='purple'>
                            Login with Google
                        </LabButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn