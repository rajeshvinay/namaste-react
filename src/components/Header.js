import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () =>{
    const [btnStatus,setStatus] = useState('Login')
    const status = useOnlineStatus();
    return (
        <div className='flex justify-between shadow-lg bg-pink-100 '> 
            <div className='logo-container'>
                <img className='w-56' src={LOGO_URL}></img>
            </div>
            <div className='flex items-center'>
                <ul className='flex m-4 p-4'>
                    <li className=' px-4'>
                      Online status - {status?'✅':'🔴'}
                    </li>
                    <li  className=' px-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className=' px-4'>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className=' px-4'>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className=' px-4'>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className=' px-4'>Cart</li>
                    <button className='log-btn' onClick={()=> btnStatus === 'Login'?setStatus('Logout'):setStatus('Login')}> {btnStatus } </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;