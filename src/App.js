import React from 'react';
import HomeScreen from './screens/HomeScreen';
import LandingScreen from './screens/LandingScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />}/>
          <Route path='/home' element={<HomeScreen />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
