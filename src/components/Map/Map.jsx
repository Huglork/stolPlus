import React, {useCallback} from "react";
import './Map.css'
import {GoogleMap} from "@react-google-maps/api";
import {Marker} from '../Marker/Marker'
import {useRef} from "react";
import {defaultTheme} from "./Theme"
import {CurrentLocationMarker} from "../CurrentLocationMarker";

const containerStyle = {
    width: '100%',
    height: '100%'
};
const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    styles: defaultTheme,

}

export const Map = ({center, mode,markers,onMarkerAdd}) => {

    const mapRef = useRef(undefined);
    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    const MODES = {
        MOVE: 0,
        SET_MARKER: 1
    }
    const onClick = useCallback((loc) => {
            if (mode === MODES.SET_MARKER)
            {
                const lat = loc.latLng.lat();
                const lng = loc.latLng.lng();
                console.log({lat, lng})
                onMarkerAdd({lat, lng})
            }
        },[mode]);

    return <div className="map__container">
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={onClick}
            options={defaultOptions}
        >
            <CurrentLocationMarker position={center}/>
            {markers.map((pos)=>{
                return <Marker position={pos}/>;
            })}
        </GoogleMap>
    </div>
}