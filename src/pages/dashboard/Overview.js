import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FirebaseContext } from '../../providers//FirebaseProvider';
import { getDoc, doc } from "firebase/firestore";
// Import Pages
import Login from '../Login';

// Import Components
import Sidebar from '../../components/Sidebar';

const Overview = (props) => {
    const { profile } = useContext(AuthContext);
    const { myFS } = useContext(FirebaseContext);

    const [cards, setCards] = useState(0);
    const [decks, setDecks] = useState(0);
    const [shared, setShared] = useState(0);

    if (profile) {

        async function getData() {

            let userDocRef = doc(myFS, 'users', profile.uid);

            const snap = await getDoc(userDocRef);

            setCards(snap.data().cards.length);
            setDecks(snap.data().decks.length);
            setShared(snap.data().shared.length);

        }
        getData();
    }


    if (!profile) {
        return <Login />;
    } else {

        return (
            <>
                <Sidebar />
                <div className='main-content'>
                    <h1 className='title'>Overview</h1>
                    <h3 className='description'>This page displays the amount of cards and decks you own, aswell as the amount of decks you have shared.</h3>
                    <div className='overview'>
                        <a href='/cards'>
                            <div className='info-card cards'>
                                <p>{cards}<br />Cards</p>
                            </div>
                        </a>
                        <a href='/decks'>
                            <div className='info-card decks'>
                                <p>{decks}<br />Decks</p>
                            </div>
                        </a>
                        <a href='/shared'>
                            <div className='info-card shared'>
                                <p>{shared}<br />Shared</p>
                            </div>
                        </a>
                    </div>



                </div>

            </>
        )
    };
}


export default Overview;