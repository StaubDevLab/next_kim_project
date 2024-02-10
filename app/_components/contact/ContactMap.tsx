'use client'
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import L from "leaflet";

export default function ContactMap(props: any) {


    return <MapContainer center={[45.15, 1.539]} zoom={14} scrollWheelZoom={true} className="h-80 lg:h-[500px] w-full lg:flex-1 self-center rounded-lg">
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.152325981833, 1.539780004667]} icon={L.icon({
            iconSize: [50, 50],
iconAnchor: [25, 50],
            className: "mymarker",
            iconUrl: "/img/marker-icon.png",
        })}>
            <Popup>
                <div className={"flex flex-col  justify-start"}>
                    <h3 className="text-lg font-bold text-primary">Centre &laquo; Hollistic &raquo;</h3>
                    <span className={"my-2 py-0"}>1bis avenue de la Bastille</span>
                    <span className={"my-0 py-0"}>19100 Brive-La-Gaillarde</span>
                </div>

            </Popup>
        </Marker>
    </MapContainer>
}