import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './TablesList.css'
const MAIN_URL = "http://localhost:8080"
export const TablesList = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const {data} = await axios.get(`${MAIN_URL}/tables`);
            setData(data)

        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="tables">
            <h2 className="tables__title">Столы</h2>
            <div className="container">
                <div className="table__wrapper">
                    {
                        data.map((tableData) => (
                            <TableItem key={tableData.id} tableData={tableData}/>
                        ))
                    }
                </div>
            </div>
        </div>


    )
}

const TableItem = ({tableData}) => {
    const {id, title, price, img, material} = tableData;
    return (
        <div className="table__card">
            <div className="container">
                <Link to={`/tables/${id}`}>

                    <ul className="table__list">
                        <li className="table__item">
                            <div className="table__img">
                                <img src={img} alt="img"/>
                            </div>
                        </li>
                    </ul>
                </Link>
            </div>

            <div className="table__info">
                <h3 className="table__title">Стол {title}</h3>
                <p className="table__color">{material}</p>
                <p className="table__price">{price} руб</p>
            </div>
        </div>

    );
}