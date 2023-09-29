import {Marker as GoogleMapMarker} from "@react-google-maps/api";
import MarkerImg from '../../assets/marker.svg'

export const Marker =({position})=>{
    return <GoogleMapMarker position={position} icon={MarkerImg}/>
}