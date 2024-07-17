import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './InteractiveMaps.css';

const InteractiveMap = () => {
  return (
    <div className="interactive-map">
      <h3>Interactive Map</h3>
      <p className="subtitle">Your sales performance is 30% better compared to last month</p>
      <div className="search-bar">
        <input type="text" placeholder="Find High Demand Area" />
        <button type="button">Find</button>
      </div>
      <div className="map-container">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default InteractiveMap;
