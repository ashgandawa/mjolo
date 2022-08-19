import whiteLogo from '../img/logo-white.png';
import colorLogo from '../img/logo.png'

const Nav = ({minimal, authToken}) => {
    
    return (
        <nav>

            <div className="logo-container">
                <img className="logo" src ={minimal ? colorLogo : whiteLogo}/>
            </div>
            
            {authToken && !minimal &&<button className='nav-button'>Log In</button>}
        </nav>
    );
}

export default Nav;