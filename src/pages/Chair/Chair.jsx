import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {BasketBtn} from "../../components/BasketBtn/BasketBtn";
import {Link} from "react-router-dom";
import s from './Chair.module.css'
import arrow from '../../assets/arrow.svg'
const MAIN_URL = 'http://localhost:8080'




export const Chair = () => {
    const [data, setData] = useState(null)
    const {id} = useParams();


    const getData = async () => {
        const {data} = await axios.get(`${MAIN_URL}/chairs/${id}`)
        setData(data)

    }
    useEffect(() => {
        getData();
    }, []);


    return (
        <div className={s.item}>
            <div className="container">
                <div className={s.item__wrapper}>
                    <div className={s.item__img}>
                        <img src={data?.img} alt={data?.title}/>
                    </div>
                    <div className={s.item__info}>
                        <h2 className={s.item__title}>{data?.title}</h2>
                        <p className={s.item__desc}>{data?.desc}</p>
                        <div className={s.item__infoBtns}>
                            <BasketBtn/>
                            <Link className={s.backBtn} to={"/chairsList"}>Назад<img src={arrow} alt="back"/></Link>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
