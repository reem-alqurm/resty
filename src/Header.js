import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
const Header = ()=>{
    return(
        <header>
        <h1>RESTy</h1>
        <nav>
        <Link activeClassName="selected" to="/">Home</Link>
        <Link activeClassName="selected" to="/history">History</Link>
        <Link activeClassName="selected" to="/help">Help</Link>
      </nav>
      </header>
    )
}
export default Header;