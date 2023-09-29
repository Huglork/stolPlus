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
                        <ul className="nav__list">
                            <li className="logo">
                                <Link to={'/'}><img src={Logo} alt="logo"/></Link>
                            </li>
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

                            <li><img src={basket} alt=""/></li>
                        </ul>
                    </nav>
                </div>

            </header>

        </div>

    )
}