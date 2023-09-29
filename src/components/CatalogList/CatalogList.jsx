import React from 'react';
import { Dropdown, Space } from 'antd';
import './CatalogList.css'
import {Link} from "react-router-dom";

const items = [
    {
        key: '1',
        label: (
           <Link to={"/chairsList"}>Стулья</Link>
        ),
    },
    {
        key: '2',
        label: (
                <Link to={"/tablesList"}>Столы</Link>
        ),


    },
    {
        key: '3',
        label: (
                <Link to={"/armchairsList"}>Кресла</Link>
        ),

    },

];
const CatalogList = () => (
    <Dropdown
        menu={{
            items,
        }}
    >
        <a className="catalog__link" onClick={(e) => e.preventDefault()}>
            <Space>
                Каталог
            </Space>
        </a>
    </Dropdown>
);
export default CatalogList;