import React from 'react';
import logo from '../../images/logo2.png';
import './head.css'
const header = () => {
    return (
        <div className='logo'>
            < img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/reviw">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                
            </nav>
        </div>
    );
};

export default header;