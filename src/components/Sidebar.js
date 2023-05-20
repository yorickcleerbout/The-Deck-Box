import { useState } from 'react';
import { useEffect } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";


// IMPORT ICONS
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';


const Sidebar = () => {

    // Contexts
    const { profile, logout } = useContext(AuthContext);

    // States
    const [isActive, setActive] = useState(true);
    const [imageURL, setImageURL] = useState();


    const toggleNav = () => {
        setActive(!isActive);
    };


    useEffect(() => {
        const getProfilePic = async () => {
            const storage = getStorage();
            const reference = ref(storage, `profile_pictures/${profile.photoName}`);

            let profilePic = await getDownloadURL(reference);
            setImageURL(profilePic);

        }

        getProfilePic();
    });



    return (
        <>
            <div className={isActive ? 'sidebar active' : 'sidebar'} >
                <div className='top'>
                    <div className='logo'>
                        <img src={require('../assets/images/logo.png')} />
                        <span>The Deck Box</span>
                    </div>
                    <MenuIcon onClick={toggleNav} className='menu-btn' />
                </div>
                <div className='user'>
                    <img src={imageURL} className='user-img' />
                    <div>
                        <p className='bold'>{profile.displayName}</p>
                    </div>
                </div>
                <ul>
                    <li>
                        <a href="/dashboard">
                            <AppsIcon className='sidebar-icon' />
                            <span className='nav-item'>Overview</span>
                        </a>
                        <span className='tooltip'>Overview</span>
                    </li>
                    <li>
                        <a href="/cards">
                            <ViewCarouselIcon className='sidebar-icon' />
                            <span className='nav-item'>Cards</span>
                        </a>
                        <span className='tooltip'>Cards</span>
                    </li>
                    <li>
                        <a href="/decks">
                            <FolderCopyIcon className='sidebar-icon' />
                            <span className='nav-item'>Decks</span>
                        </a>
                        <span className='tooltip'>Decks</span>
                    </li>
                    <li>
                        <a href="shared">
                            <ShareIcon className='sidebar-icon' />
                            <span className='nav-item'>Shared</span>
                        </a>
                        <span className='tooltip'>Shared</span>
                    </li>

                    <li>
                        <a href="/settings">
                            <SettingsIcon className='sidebar-icon' />
                            <span className='nav-item'>Settings</span>
                        </a>
                        <span className='tooltip'>Settings</span>
                    </li>
                    <li>
                        <a href="#" onClick={logout}>
                            <LogoutIcon className='sidebar-icon' />
                            <span className='nav-item'>Logout</span>
                        </a>
                        <span className='tooltip'>Logout</span>
                    </li>

                </ul>
            </div>
        </>
    );
};

export default Sidebar;