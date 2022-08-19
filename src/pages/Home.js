import Nav from '../components/Nav'
import {useState} from 'react';

const Home = () => {

    const [showModal, setShowModal] = useState(false)

    const authToken = true;

    const handleClick = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(false)
        setIsSignUp(true)
    }

    return (
        <div className='overlay'>
            <Nav minimal={false} authToken={authToken}/>

            <div className="home">
                <h1>Swipe Right</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>

            </div>
        </div>
    );
}

export default Home;