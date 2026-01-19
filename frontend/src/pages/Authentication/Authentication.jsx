import React, { useContext, useState } from 'react';
import './Authentication.css';
import { AuthContext } from '../../AuthContext';
import loadingImage from '../../assets/loading.gif'; 

const Authentication = () => {
    const [authState, setAuthState] = useState('Sign In');
    const [loading, setLoading] = useState(false);
    const { handleSignIn, handleSignup, details, setDetails } = useContext(AuthContext);

    const handleClick = () => {
        setAuthState((prevAuthState) => (prevAuthState === 'Sign In' ? 'Sign Up' : 'Sign In'));
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await handleSignup();
        setDetails({ username: '', email: '', password: '' });
        setLoading(false);
    };

    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await handleSignIn();
        setDetails({ ...details, email:'', password: '' });
        setLoading(false);
    };

    return (
        <div className='fullscreen'>
            {loading && 
                <div className='login-spinner'>
                    <img src={loadingImage} alt="Loading..." />
                </div>
            }
            <div className={`container ${authState === 'Sign Up' ? 'right-panel-active' : ''}`} id="container" style={{ display: loading ? 'none' : 'flex' }}>
                <div className={`form-container-auth sign-up-container ${authState === 'Sign Up' ? 'active' : ''}`}>
                    <form onSubmit={handleSignUpSubmit}>
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" value={details.username} onChange={e => setDetails({ ...details, username: e.target.value })} />
                        <input type="email" placeholder="Email" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} />
                        <input type="password" placeholder="Password" value={details.password} onChange={e => setDetails({ ...details, password: e.target.value })} />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
                <div className={`form-container-auth sign-in-container ${authState === 'Sign In' ? 'active' : ''}`}>
                    <form onSubmit={handleSignInSubmit}>
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} />
                        <input type="password" placeholder="Password" value={details.password} onChange={e => setDetails({ ...details, password: e.target.value })} />
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className={`overlay-panel ${authState === 'Sign Up' ? 'overlay-left' : 'overlay-right'}`}>
                            <h1>{authState === 'Sign Up' ? 'Welcome Back!' : 'Hello, Friend!'}</h1>
                            <p>{authState === 'Sign Up' ? 'To keep connected with us please login with your personal info' : 'Enter your personal details and start your journey with us'}</p>
                            <button className="ghost" onClick={handleClick}>
                                {authState === 'Sign Up' ? 'Sign In' : 'Sign Up'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;
