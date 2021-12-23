import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className="main-navbar">
                    <Link to="/" className='link'><h4 className='heading'>Home</h4></Link>
                    <Link to="/calculator" className='link'><h4 className='heading'>Calculator</h4></Link>
                </div>
            </div>
        )
    }
}

export default Navbar;
