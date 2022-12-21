import NavBar from './NavBar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import About from './About';

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/> 
      </Routes>
  </BrowserRouter>
  );
}

export default App;
