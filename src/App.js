import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import LandingScreen from './screens/LandingScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Routes>
            <Route path='/' element={<LandingScreen />}/>
            <Route path='/login' element={<LoginScreen />}/>
            <Route path='/register' element={<RegisterScreen />}/>
          </Routes>
        ) : (
          <Routes>
            <Route path='/' element={<HomeScreen />}/>
            <Route path='/profile' element={<ProfileScreen />}/>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
