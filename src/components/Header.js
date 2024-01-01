import { useContext, useState } from 'react';
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () =>{
    const itemsData = useSelector(state=>(state.cart.items))
    console.log(itemsData)
    const [btnStatus,setStatus] = useState('Login')
    const userData = useContext(UserContext);
    const {setUserName} = useContext(UserContext)
    const status = useOnlineStatus();
    const userLog = () =>{
        btnStatus === 'Login'?setStatus('Logout'):setStatus('Login')
        // logEeventClicked(btnStatus === 'Logout'?'Default User':'Rajesh Vinay')
        //setUserName(btnStatus === 'Logout'?'Default User':'Rajesh Vinay')
    }
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
                    <li className=' px-4 font-bold text-xl'>
                        <Link to='/cart'>Cart {itemsData?.length?itemsData?.length:0}</Link>
                    </li>  
                    <button className='log-btn' onClick={userLog}> {btnStatus } </button>
                    {/* <li className='font-bold pl-3'>{userData.name}</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;