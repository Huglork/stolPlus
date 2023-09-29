import React, {useEffect, useState} from "react";
import axios from "axios";
import './ChairsList.css'
import {Link} from "react-router-dom";

const MAIN_URL = "http://localhost:8080"

export const ChairsList = () => {
    const [chairs, setChairs] = useState([])

    const getData = async () => {
        try {
            const {data} = await axios.get(`${MAIN_URL}/chairs`)
            setChairs(data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="chairs">
            <h2 className="chairs__title">Стулья</h2>
            <div className="container">
                <div className="chairs__wrapper">
                    {
                        chairs.map((chairData) => (
                            <ChairItem key={chairData.id} chairData={chairData}/>
                        ))
                    }
                </div>
            </div>
        </div>


    )
}

const ChairItem = ({chairData}) => {
    const {id, title, price, img, color} = chairData;
    return (
        <div className="chair__card">
            <div className="container">
            <Link to={`/chairs/${id}`}>

                    <ul className="chairs__list">
                        <li className="chair__item">
                            <div className="chair__img">
                                <img src={img} alt="img"/>
                            </div>

                        </li>
                    </ul>
            </Link>
                </div>

            <div className="chair__info">
                <h3 className="chair__title">Cтул {title}</h3>
                <p className="chair__color">{color}</p>
                <p className="chair__price">{price} руб</p>
            </div>
        </div>

);
};