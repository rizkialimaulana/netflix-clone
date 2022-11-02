import React from 'react';
import HomeScreen from './screens/HomeScreen';
import LandingScreen from './screens/LandingScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  const user = null
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Routes>
            <Route path='/' element={<HomeScreen />}/>
            <Route path='/login' element={<LoginScreen />}/>
            <Route path='/register' element={<RegisterScreen />}/>
          </Routes>
        ) : (
          <Routes>
            <Route path='/' element={<HomeScreen />}/>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
