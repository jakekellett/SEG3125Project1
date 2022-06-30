import logo from './images/Logo.png'; // with import
import {Link} from 'react-router-dom';
import {useState} from 'react';

const Navbar = () => {

    return (  
        <nav className ="navbar">
            <Link  to="/" className="title">Top Shelf Stats</Link>
            <img className="logo" alt="Logo" src={logo}/>
            <div className="links">
                <Link to="/teams" className="">Teams</Link>
                <Link to="/" className="">Stats</Link>
                <Link to="/" className="">Sign Up</Link>
                <Link to="/" className="">Sign In</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;