import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {BasketBtn} from "../../components/BasketBtn/BasketBtn";
import {Link} from "react-router-dom";
import './Chair.css'
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
        <div className="item">
            <div className="container">
                <div className="item__wrapper">
                    <div className="item__img">
                        <img src={data?.img} alt={data?.title}/>
                    </div>
                    <div className="item__info">
                        <h2 className="item__title">{data?.title}</h2>
                        <p className="item__desc">{data?.desc}</p>
                        <BasketBtn/>
                        <Link className="back-btn" to={"/chairsList"}>Назад<img src={arrow} alt="back"/></Link>
                    </div>
                </div>

            </div>

        </div>
    )
}
