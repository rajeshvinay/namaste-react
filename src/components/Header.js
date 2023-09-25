import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () =>{
    const [btnStatus,setStatus] = useState('Login')
    const status = useOnlineStatus();
    return (
        <div className='header '>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                      Online status - {status?'✅':'🔴'}
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className='log-btn' onClick={()=> btnStatus === 'Login'?setStatus('Logout'):setStatus('Login')}> {btnStatus } </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;