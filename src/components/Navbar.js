import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            <nav class="wrapper">
                <div className="logo">
                    <Link to="/">
                        <img src={require('../assets/images/logo-long.png')} alt="TheDeckBox" />
                    </Link>
                </div>
                <div className={isActive ? 'navbar show' : 'navbar'}>
                    <div className="close-nav"><button onClick={toggleClass} >×</button></div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="/#getting-started">Getting Started</a></li>
                            <li><a href="/#about-us">About Us</a></li>
                            <li className="login"><Link to="/login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="menu-bar">
                    <button onClick={toggleClass} ><i></i></button>
                </div>
            </nav>

            <Outlet />
        </>

    )
};

export default Navbar;