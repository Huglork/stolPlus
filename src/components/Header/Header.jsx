import './Header.css'
import {Link} from "react-router-dom";
import React from "react";
import Logo from '../../assets/logo.svg'
import basket from '../../assets/shopping-bag.svg'
import CatalogList from "../CatalogList/CatalogList";

export const Header = () => {
    return (
        <div className='content'>
           <header className="header">
               <div className="container">
                   <nav className="nav">
                       <input type="checkbox" id="nav-check"></input>
                       <div className="nav-header">
                           <Link to={"/"}><img src={Logo} alt=""/></Link>
                       </div>
                       <div className="nav-btn">
                           <label htmlFor="nav-check">
                               <span></span>
                               <span></span>
                               <span></span>
                           </label>
                       </div>

                       <ul className="nav-list">
                           <li className="nav__item">
                               <Link to={"/catalog"}><CatalogList/></Link>
                           </li>
                           <li className="nav__item">
                               <Link to={"/delivery"}>Доставка</Link>
                           </li>
                           <li className="nav__item">
                               <Link to={"/payment"}>Способ оплаты</Link>
                           </li>
                           <li className="nav__item">
                               <Link to={"/contacts"}>Контакты</Link>
                           </li>
                           <li className="nav__item">
                               <Link to={"/guaranties"}>Гарантии и возврат</Link>
                           </li>
                           <li className="nav__item">
                               <Link to={"/terms"}>Политика конфиденциальности</Link>
                           </li>
                           <li className="nav__item"> <img src={basket} alt="basket"/></li>
                       </ul>

                   </nav>
               </div>

           </header>

        </div>

    )
}