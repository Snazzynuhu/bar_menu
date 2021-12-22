import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './components.style.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <nav className='navbar'>
           <header>
                <Link to='/' className='link-logo'><h3 className='logo'>SnazzyBar</h3></Link>
            <ul>
                <li>
                    <Link to='/' className='link'>home</Link>
                </li>
                <li>
                    <Link to='/about' className='link'>about</Link>
                </li>
                <li>
                    <Link to='/training' className='link'>training</Link>
                </li>
            </ul>
            <button className='menu' onClick={()=> setShowNav(!showNav)}><FaBars /></button>
           </header>
           <div className={`${showNav ? 'list-container show' : 'list-container'}`}>
               <ul>
                <li>
                    <Link to='/' className='list-link'>home</Link>
                </li>
                <li>
                    <Link to='/about' className='list-link'>about</Link>
                </li>
                <li>
                    <Link to='/training' className='list-link'>training</Link>
                </li>
            </ul>
           </div>
        </nav>
    )
}

export default Navbar
