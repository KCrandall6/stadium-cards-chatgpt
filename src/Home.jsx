import React from 'react';
import NFLMap from './NFLMap';
import useFetchStadiums from './useFetchStadiums';


const Home = () => {

  const stadiums = useFetchStadiums();

  return (
    <div className="p-3">
      <NFLMap stadiums={stadiums}/>
    </div>
  )
}

export default Home;