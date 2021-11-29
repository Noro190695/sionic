import React from 'react';
import headerStyle from './header.module.scss';
import CartIcon from '../svg/Cart';
import SearchIcon from '../svg/Search';
import LocationIcon from '../svg/Loaction';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <header className={headerStyle.header}>
           <Link to='/' className={headerStyle.logo}>
               <h2>React</h2>
           </Link>
           <div className={headerStyle.location}>
                <LocationIcon/>
                <span>Александровск-Са...</span>
           </div>
           <form className={headerStyle.search} >
               <input type='text' placeholder='Поиск бренда, товара, категории...'/>
               <button><SearchIcon/></button>
           </form>
           <Link to='/cart' className={headerStyle.cart}>
                <CartIcon />
                <span>10+</span>
           </Link>
        </header>   
    )
}

export default Header;