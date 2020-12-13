import { faMoneyBill, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = ({ numItems, total }) => {
    return (
        <header className="d-flex justify-content-between align-items-center">
            <div className="logo"><Link to="/"><h1>MkStore</h1></Link></div>
            <div className="info"> 
             <Link to="/card-page"><FontAwesomeIcon icon={faShoppingCart} /> {numItems}</Link> 
             <FontAwesomeIcon className="ml-2" icon={faMoneyBill} /> {total}</div>
        </header>
    )
}

export default Header;