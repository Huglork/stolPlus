import {Marker} from "@react-google-maps/api";
import marker from '../../assets/person.svg'
import s from './CurrentLocationMarker.module.css'
export const CurrentLocationMarker =({position})=>{
    return <Marker position={position} icon={marker} label={{text:'Вы здесь', fontSize:'18px', color:'#8CC004'}}/>
}