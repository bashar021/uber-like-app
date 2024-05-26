import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// Fix for marker icon issue with Webpack
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export default function Map() {
   

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;
    const userCoordinates = [30.3165, 78.0322];
    return (
        <>
            <div style={{ height: '100vh', width: '100%',zIndex:'1' }}>
                <MapContainer center={userCoordinates} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={userCoordinates}>
                        <Popup>
                            User Location
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </>
    )
}
