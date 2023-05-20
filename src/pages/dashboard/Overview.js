import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

// Import Pages
import Login from '../Login';



// Import Components
import Sidebar from '../../components/Sidebar';

const Overview = (props) => {
    const { profile, logout } = useContext(AuthContext);

    if (!profile) {
        return <Login />;
    } else {

        return (
            <>

                <Sidebar />

                <div className='main-content'>

                    Overview?

                </div>


                {/* <h1>Logged in as: {profile.displayName}</h1>
                <button onClick={logout}>Logout</button>
                <Overview /> */}

            </>
        )
    };
}


export default Overview;