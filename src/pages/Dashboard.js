import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

// Import Pages
import Login from './Login';

const Dashboard = () => {
    const { profile, logout } = useContext(AuthContext);

    if (!profile) {
        return <Login />;
    } else {

        return (
            <>
                <h1>Logged in as: {profile.displayName}</h1>
                <button onClick={logout}>Logout</button>
            </>
        )
    };
}


export default Dashboard;