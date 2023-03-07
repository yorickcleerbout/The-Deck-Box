// Importing Components
import Navbar from '../../components/Navbar';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <Navbar />
            <div className="content">
                <div className="intro">
                    <h1 className="title">The Deck Box</h1>
                    <h3 className="description">
                        The best Magic The Gathering players are organized,
                        The Deck Box provides a service where you can create a collection,
                        create a deck and even share them with your friend!
                        <br /><br />
                        Join our community today, its totally free!
                    </h3>
                    <a href="/register"><button className="sign-up">SIGN UP</button></a>
                </div>
                <div className="image">
                    <img src={require('../../assets/images/cards.png')} alt="Cards" />
                </div>
            </div>

            <a href="#getting-started" className="scroll-down-link scroll-down-arrow" data-iconfont="ETmodules" data-icon></a>
        </section>

    )
};

export default Hero;