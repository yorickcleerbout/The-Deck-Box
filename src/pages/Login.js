import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from "react-router-dom";

// Importing Components
import Navbar from '../components/Navbar';

const Login = () => {
    const navigate = useNavigate();

    const { login, authErrorMessages } = useContext(AuthContext);

    const [email, setEmail] = useState(''); // input field value cannot be null
    const [password, setPassword] = useState(''); // input field value cannot be null

    const handleButtonClick = async () => {

        let success = await login(email, password);

        // User registered successfully
        if (success) navigate("/dashboard");

    };

    return (
        <>
            <section className="hero">
                <Navbar />

                <div className="auth-container">
                    <div className="image"></div>
                    <div className="auth-form">
                        <h1 className='auth-title'>Sign In</h1>
                        <form action="/login" onSubmit={e => e.preventDefault()}>

                            {authErrorMessages?.map((errorLine, idx) => (
                                <p id="error-message" className="error">
                                    {errorLine.includes('auth/wrong-password') ? 'The given email and/or password is not correct!' : ''}
                                    {errorLine.includes('auth/user-not-found') ? 'There is no account found with given email!' : ''}
                                </p>
                            ))}

                            <input id="email-field" className={authErrorMessages ? 'error-field' : ''} type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                            <input id="password-field" className={authErrorMessages ? 'error-field' : ''} type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                            <button className="submit-btn" onClick={handleButtonClick}>SIGN IN</button>
                            <span className="subtext">Don't have an account? <a href="/register">Sign Up!</a></span>
                        </form>
                    </div>
                </div>

            </section>
        </>
    )
};

export default Login;