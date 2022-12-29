import React from 'react';
import useFetchStadiums from './useFetchStadiums';
import NFLStadiumMap from './NFLStadiumMap';


const Home = () => {

  const stadiums = useFetchStadiums();

  return (
    <div className="p-3">
      <NFLStadiumMap stadiums={stadiums}/>
    </div>
  )
}

export default Home;