import React from 'react';

const About = () => {

  return (
    <div className="d-flex flex-column align-items-center justify-content-center m-5">
      <h2>About me!</h2>
      <p>This app, believe it or not, was mostly built using the new AI ChatGPT! To create the app, I first</p>
    </div>
  )
}

export default About;



// Yes, it is possible to create a map using react-leaflet that has Markers and Popups showing each NFL stadium with the corresponding team that plays there, and then create a Carousel using react-bootstrap where the slides are each of those stadiums and the Markers and Popups on the map are highlighted depending on which slide is highlighted within the Carousel.

// Here is some sample code that demonstrates how this could be done:

// Copy code
// import React, { useState } from 'react';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import { Carousel } from 'react-bootstrap';

// const NFLStadiumMap = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const nflStadiums = [
//     {
//       name: 'Lambeau Field',
//       team: 'Green Bay Packers',
//       lat: 44.501389,
//       lng: -88.061944
//     },
//     {
//       name: 'MetLife Stadium',
//       team: 'New York Giants',
//       lat: 40.813611,
//       lng: -74.074444
//     },
//     {
//       name: 'AT&T Stadium',
//       team: 'Dallas Cowboys',
//       lat: 32.747778,
//       lng: -97.092778
//     }
//   ];

//   return (
//     <div>
//       <Map center={[39.099722, -94.578333]} zoom={4}>
//         {nflStadiums.map((stadium, index) => (
//           <Marker
//             position={[stadium.lat, stadium.lng]}
//             key={stadium.name}
//             onClick={() => setActiveSlide(index)}
//             opacity={index === activeSlide ? 1 : 0.5}
//           >
//             <Popup>{stadium.name}</Popup>
//           </Marker>
//         ))}
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//       </Map>
//       <Carousel activeIndex={activeSlide} onSelect={setActiveSlide}>
//         {nflStadiums.map((stadium) => (
//           <Carousel.Item key={stadium.name}>
//             <img
//               className="d-block w-100"
//               src={`${stadium.name}.jpg`}
//               alt={stadium.name}
//             />
//             <Carousel.Caption>
//               <h3>{stadium.name}</h3>
//               <p>{stadium.team}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default NFLStadiumMap;
// In this example, we use react-leaflet to create a Map component with Markers for each NFL stadium. We also include a Popup for each Marker that displays the name of the stadium. We use the activeSlide state variable to keep track
