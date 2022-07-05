import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
 
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
import Calculates from './pages/Calculates';
import UrunApi from './pages/UrunApi';
import VideoApps from './components/VideoApps';

import UrunsApp from './pages/UrunsApp';
import Grocery from './pages/Grocery';
import Form from './pages/Form';
import UserRef from './pages/UseRef';
 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='urunler' element={<UrunApi />} />
        <Route path='calculate' element={<Calculates />} />
        <Route path='youtube' element={<VideoApps />} />
        <Route path='useref' element={<UserRef />} />
        <Route path='denemeurun' element={<UrunsApp />} />
        <Route path='grocery' element={<Grocery />} />
        <Route path='form' element={<Form />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;