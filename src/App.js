import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

const HomeScreen = lazy((() => import('./screens/HomeScreen')))
const LandingScreen = lazy((() => import('./screens/LandingScreen')))
const MovieScreen = lazy((() => import('./screens/MovieScreen')))
const ProfileScreen = lazy((() => import('./screens/ProfileScreen')))

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    })
    return unsubscribe
  }, [dispatch])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LandingScreen />
        ) : (
          <Suspense fallback={"loading..."}>
            <Routes>
              <Route path='/' element={<HomeScreen />}/>
              <Route path='/profile' element={<ProfileScreen />}/>
              <Route path='/movie' element={<MovieScreen />}/>
            </Routes>
          </Suspense>
        )}
      </Router>
    </div>
  );
}

export default App;
