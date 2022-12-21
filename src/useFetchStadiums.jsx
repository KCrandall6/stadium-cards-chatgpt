import { useState, useEffect } from 'react'

function useFetchStadiums() {
  const [stadiums, setStadiums] = useState([]);

  useEffect(() => {
    fetch('stadiumData.json')
    .then((res) => res.json())
    .then((res) => setStadiums(res.stadiums))
  }, [])
  
  return stadiums;
}

export default useFetchStadiums