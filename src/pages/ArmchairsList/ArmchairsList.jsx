import React, {useEffect, useState} from "react";
import axios from "axios";
import './ArmchairsList.css'
import {Link} from "react-router-dom";

const MAIN_URL = "http://localhost:8080"

export const ArmchairsList = () => {
    const [armChairs, setArmChairs] = useState([])

    const getData = async () => {
        try {
            const {data} = await axios.get(`${MAIN_URL}/armchairs`)
            setArmChairs(data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="armchairs">
            <h2 className="armchairs__title">Кресла</h2>
            <div className="container">
                <div className="armchairs__wrapper">
                    {
                        armChairs.map((chairData) => (
                            <ArmchairItem key={chairData.id} chairData={chairData}/>
                        ))
                    }
                </div>
            </div>
        </div>


    )
}

const ArmchairItem = ({chairData}) => {
    const {id, title, price, img, material} = chairData;
    return (
        <div className="armchair__card">
            <div className="container">
                <Link to={`/armchairs/${id}`}>

                    <ul className="armchairs__list">
                        <li className="armchair__item">
                            <div className="armchair__img">
                                <img src={img} alt="img"/>
                            </div>

                        </li>
                    </ul>
                </Link>
            </div>

            <div className="armchair__info">
                <h3 className="armchair__title">Кресло {title}</h3>
                <p className="armchair__color">{material}</p>
                <p className="armchair__price">{price} руб</p>
            </div>
        </div>

    );
};