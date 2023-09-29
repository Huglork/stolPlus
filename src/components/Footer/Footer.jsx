import Logo from '../../assets/footer-logo.png'
import './Footer.css'
import './media.scss'
import {Link} from "react-router-dom";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__info">
                        <Link to={"/"}><img src={Logo} alt="logo"/></Link>

                        <h4 className="footer__title">StolPlus - Компания по производствуи продажи мебели</h4>
                        <p className="footer__desc">Информация на сайте исключительно для ознакомления</p>
                    </div>
                    <div className="footer__links">
                        <ul className="footer__links-list">
                            <li className="footer__list-title">
                                Каталог
                            </li>
                            <li className="footer__list-link">
                                <Link to={"/tablesList"}>Столы</Link>
                            </li>
                            <li className="footer__list-link">
                                <Link to={"/chairsList"}>Стулья</Link>
                            </li>
                            <li className="footer__list-link">
                                <Link to={"/armchairsList"}>Кресла</Link>
                            </li>
                        </ul>
                        <ul className="footer__links-list">
                            <li className="footer__list-title">
                                Помощь
                            </li>
                            <li className="footer__list-link">
                                <Link to={"/payment"}>Способы оплаты</Link>
                            </li>
                            <li className="footer__list-link">
                                <Link to={"/delivery"}>Доставка</Link>
                            </li>
                            <li className="footer__list-link">
                                <Link to={"/guaranties"}>Гарантии и возврат</Link>
                            </li>
                        </ul>
                        <ul className="footer__links-list">
                            <li className="footer__list-title">
                                Контакты
                            </li>
                            <li className="footer__list-item">
                                г.Бишкек, Проспект Чуй, 115/3
                            </li>
                            <li className="footer__list-item">
                                +996 708 83 33 38
                            </li>
                            <li className="footer__list-item">
                                stolplus@mail.ru
                            </li>
                            <li className="footer__list-item">
                                Время работы: 10:00-21:00
                            </li>
                        </ul>
                    </div>
                </div>
                </div>

        </footer>
    )
}