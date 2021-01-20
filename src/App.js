import "./App.css";
import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import * as cafeData from "./data/cafes.json";

function App() {
  return (
    <MapContainer
      center={[-27.46977, 153.025131]}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cafeData.data.map((cafe) => (
        <Marker key={cafe.id} position={[cafe.location[0], cafe.location[1]]}>
          <Popup>
            <h2>{cafe.name}</h2>
            <p>Rating: {cafe.rating}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
