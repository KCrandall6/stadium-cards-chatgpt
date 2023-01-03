import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Carousel } from 'react-bootstrap';

const NFLStadiumMap = ( {stadiums} ) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <MapContainer 
        center={[39.099722, -94.578333]} 
        zoom={4}
        style={{ height: '40vh', width: '50wh' }}>
        {stadiums.map((stadium, index) => (
          <Marker
            position={[stadium.lat, stadium.lng]}
            key={stadium.team}
            onClick={() => setActiveSlide(index)}
            opacity={index === activeSlide ? 1 : 0.5}
          >
            <Popup>
              <h3>{stadium.team}</h3>
              {stadium.name}
              </Popup>
          </Marker>
        ))}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <Carousel variant="dark" activeIndex={activeSlide} onSelect={setActiveSlide}>
        {stadiums.map((stadium) => (
          <Carousel.Item key={stadium.team}>
            <img
              className="d-block mx-auto img-fluid pb-5 mb-5"
              src={stadium.logo}
              alt={stadium.name}
            />
            <Carousel.Caption>
              <h1>{stadium.team}</h1>
              <p>{stadium.name}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default NFLStadiumMap;
