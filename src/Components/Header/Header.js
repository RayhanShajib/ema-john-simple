import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from '../../Login/auth';




const Header = () => {

    const auth = useAuth();


  

    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review Order</a>
                <a href="/inventory">Manage Inventory Here</a>          
                <span style={{color:'yellow'}} href="/inventory"></span>   
               {
                   auth.user ? 
                   <span style={{color:"yellow"}}>
                       <a style={{color:'yellow'}} href="login">{auth.user.name}</a>
                    </span>
                   : <a href="/login">Sing in</a>
               }
            </nav>
        </div>
    );
};

export default Header;