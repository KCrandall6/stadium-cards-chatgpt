import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function NFLMap({ stadiums }) {
  return (
    <MapContainer 
      center={[40, -98]} 
      zoom={4}
      style={{ height: '50vh', width: '50wh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {stadiums.map(stadium => (
        <Marker key={stadium.team} position={[stadium.lat, stadium.lng]}>
          <Popup>
            <div>
              <h3>{stadium.name}</h3>
              <p>{stadium.team}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default NFLMap;
