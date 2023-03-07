import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from "react-router-dom";

// Importing Components
import Navbar from '../components/Navbar';

const Register = () => {
    const navigate = useNavigate();

    const { register, authErrorMessages } = useContext(AuthContext);

    const [displayName, setDisplayName] = useState(''); // input field value cannot be null
    const [email, setEmail] = useState(''); // input field value cannot be null
    const [password, setPassword] = useState(''); // input field value cannot be null

    const handleButtonClick = async () => {

        let success = await register(email, password, displayName);

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
                        <h1 className='auth-title'>Sign Up</h1>
                        <form action="/register" onSubmit={e => e.preventDefault()}>

                            {authErrorMessages?.map((errorLine, idx) => (
                                <p id="error-message" className="error">{errorLine.includes('auth/email-already-in-use') ? 'An account with the given email already exists!' : ''}</p>
                            ))}

                            <input type='text' name='displayName' value={displayName} placeholder="Username" required onChange={(e) => setDisplayName(e.target.value)} />
                            <input type='text' id="email-field" className={authErrorMessages ? 'error-field' : ''} name='email' placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' name='password' placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className="submit-btn" onClick={handleButtonClick}>SIGN UP</button>
                            <span className="subtext">Already have an account? <a href="/login">Sign In!</a></span>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
};

export default Register;

