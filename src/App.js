import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Views
import Home from './views/Home';
import Buses from './views/Buses';
import ContactUs from './views/ContactUs';
//Servicios



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/unidades" element={<Buses />} />
        <Route path="/contactanos" element={<ContactUs />} />

      </Routes>
    </Router>
  );
}

export default App;
