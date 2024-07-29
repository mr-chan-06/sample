import './nav.css';
import logo from './images/ITACHI.png';
export default function Navbar() {
    
    return (
        <div className='navs'>
            <div className='navitems-l'>
                <img className='logo' src={logo} alt="Logo" />
                <p className='logo-nm'><span className='nms'>5 TAILS</span> MOVIE REVIEW</p>
            </div>
            <div className='navitems-r'>
                <a className='nav-con' href="#"><b>About</b></a>
                <a className='nav-con' href="#"><b>Commerse</b></a>
                <a className='nav-con' href="#"><b>Service</b></a>
                <a className='nav-log' href='#'><b>Signup/Login</b></a>
            </div>
        </div>

    )
}