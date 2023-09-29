import {Map} from "../../components/Map/Map";
import s from './Delivery.module.css'
import {useJsApiLoader} from "@react-google-maps/api";
import {Loader} from "../../components/Loader/Loader";
import {Autocomplete} from "../../components/Autocomplete";
import {useCallback, useEffect, useState} from "react";
import {getBrowserLocation} from "../../utils/geo";
import {FloatButton, message} from "antd";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)
const defaultCenter = {
    lat: 42.874260,
    lng: 74.620142
};

const libraries = ['places']
const MODES = {
    MOVE: 0,
    SET_MARKER: 1
}
export const Delivery = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [mode, setMode] = useState(MODES.MOVE)
    const [center, setCenter] = useState(defaultCenter);
    const [markers, setMarkers] = useState([])

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
    })

    const onPlaceSelect = useCallback(
        (coordinates) => {
            setCenter(coordinates)
        },
        [],
    );

    const toggleMode = useCallback(() => {
        switch (mode) {
            case MODES.MOVE:
                setMode(MODES.SET_MARKER);
                break;
            case MODES.SET_MARKER:
                setMode(MODES.MOVE)
                break;
            default:
                setMode(MODES.MOVE)
        }
        console.log(mode)
    }, [mode]);

    const onMarkerAdd = useCallback((coordinates) => {
        setMarkers([...markers, coordinates])

    }, [markers])

    const clear = useCallback(() => {
        setMarkers([])
    })

    useEffect(() => {
        getBrowserLocation().then((curLoc) => {
            setCenter(curLoc)
        }).catch((defaultLocation) => {
            setCenter(defaultLocation)
        })
    }, []);


    const offer = {
        "toWhere": markers,
        "cost": 5000
    }

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    };
    const sendOffer = async (offer) => {
        try {
            if (offer.toWhere.length === 0) {

                alert('Поставьте маркер в место доставки');
            } else {
                await axios.post(`${process.env.REACT_APP_MAIN_URL}/offers`, offer)
            }
        } catch (error) {
            console.error(error)
        }
    }
    return <div className={s.wrapper}>
        <div className={s.addressSearchContainer}>
            <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect}/>
            <button className={s.modeToggle} onClick={toggleMode}>Установить маркер</button>
            <button className={s.modeToggle} onClick={clear}>Убрать маркер</button>
        </div>
        {isLoaded ? <Map center={center} mode={mode} markers={markers} onMarkerAdd={onMarkerAdd}/> : <Loader/>}

        <FloatButton className={s.makeOrder} onClick={() => {
            sendOffer(offer)
        }}/>
    </div>
}