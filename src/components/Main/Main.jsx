import './Main.css'
import './media.scss'
import Img from '../../assets/chairBG.png'
import {AboutCard} from "../AboutCard/AboutCard";
import about_1 from '../../assets/about_1.png'
import about_2 from '../../assets/about_2.png'
import about_3 from '../../assets/about_3.png'
import about_4 from '../../assets/about_4.png'
import {ArmchairsList} from "../../pages/ArmchairsList/ArmchairsList";
import {ChairsList} from "../../pages/ChairsList/ChairsList";
import {TablesList} from "../../pages/TablesList/TablesList";
import {useState} from "react";

export const Main = () => {

    const [showMode, setShowMode] = useState(1)
    const handlerClick = (props) => {
        setShowMode(props)
    }

    let content = <ChairsList/>;

    if(showMode === 1){
        content = <TablesList/>
    }
    if(showMode === 2){
        content = <ChairsList/>
    }
    if(showMode === 3){
        content = <ArmchairsList/>
    }
    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    <div className="main__text">
                        <h2 className="main__title">Идеи, товары и услуги.
                            Все для красивого дома</h2>
                        <p className="main__desc">У нас есть и готовые модели, и возможность сделать мебель на заказ по
                            вашему собственному дизайну.</p>

                    </div>
                    <div className="main__img">
                        <img src={Img} alt="chair"/>
                    </div>
                </div>
            </div>
            <section className="categories">
                <div className="container">
                    <div className="categories__inner">
                        <h3 className="categories__title">Популярные категории</h3>
                        <ul className="categories__list">
                            <li className="categories__list-item">
                                <button onClick={()=>handlerClick(1)}>Столы</button>
                            </li>
                            <li className="categories__list-item">
                                <button onClick={()=>handlerClick(2)}>Стулья</button>
                            </li>
                            <li className="categories__list-item">
                                <button onClick={()=>handlerClick(3)}>Кресла</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {content}
            </section>
            <section className="about">
                <div className="container">
                    <div className="about__inner">
                        <h3 className="about__title">стол плюс</h3>
                        <p className="about__desc">«Стол Плюс» — больше, чем мебельный магазин в Бишкеке. Это семейное
                            дело
                            с 20-летней историей, 30 проверенными фабриками-партнёрами, большим каталогом мебели и
                            собственным производством. У нас сплоченная команда профессионалов, преданных своей работе и
                            заинтересованных в результате.</p>

                        <ul className="about__list">
                            <li className="about__list-item">
                                <AboutCard img={about_1} desc={"Большой выбор мебели"}/>
                            </li>
                            <li className="about__list-item">
                                <AboutCard img={about_2} desc={"Гарантия качества"}/>
                            </li>
                            <li className="about__list-item">
                                <AboutCard img={about_3} desc={"Индивидуальный подход"}/>
                            </li>
                            <li className="about__list-item">
                                <AboutCard img={about_4} desc={"Выгодные цены"}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </main>
    )
}