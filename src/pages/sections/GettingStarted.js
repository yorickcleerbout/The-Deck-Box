import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ShareIcon from '@mui/icons-material/Share';
import QueueIcon from '@mui/icons-material/Queue';

const GettingStarted = () => {
    return (
        <>
            <section id="getting-started" className="getting-started">
                <div className="started-intro">
                    <h2>Getting Started</h2>
                    <hr />
                </div>
                <div className="steps-list">
                    <div className="step-item">
                        <div className="step-icon"><GroupAddIcon fontSize="large" style={{ color: 'white' }} /></div>
                        <h2 className="step-title">Create an Account</h2>
                        <p className="step-info">If you are a new here, create an account! It is totally free!</p>
                    </div>
                    <div className="step-item">
                        <div className="step-icon"><QueueIcon fontSize="large" style={{ color: 'white' }} /></div>
                        <h2 className="step-title">Add your Cards</h2>
                        <p className="step-info">When you are logged in to your account, you can start adding your cards to our database!</p>
                    </div>
                    <div className="step-item">
                        <div className="step-icon"><FolderCopyIcon fontSize="large" style={{ color: 'white' }} /></div>
                        <h2 className="step-title">Build a Collection</h2>
                        <p className="step-info">After successfully adding all your MTG cards, you can start creating a collection / deck for a better overview!</p>
                    </div>
                    <div className="step-item">
                        <div className="step-icon"><ShareIcon fontSize="large" style={{ color: 'white' }} /></div>
                        <h2 className="step-title">Share your Collection</h2>
                        <p className="step-info">When you have created a collection of your cards, or a want to showoff a new deck, you can share them with your friends!</p>
                    </div>
                </div>


            </section>
        </>


    )
};

export default GettingStarted;