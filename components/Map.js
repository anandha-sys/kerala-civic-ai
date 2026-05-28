"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {

  return (
    <MapContainer
      center={[8.8932, 76.6141]}
      zoom={8}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "20px"
      }}
    >

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[8.8932, 76.6141]}>
        <Popup>
          Kerala Civic AI Complaint
        </Popup>
      </Marker>

    </MapContainer>
  );
}
