import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home'
function App() {
  return (
    <div className="App">
      {/* Agrega la Navbar */}
      <Navbar />
      <Home />
      <Contact />

      
    </div>
  );
}

export default App;