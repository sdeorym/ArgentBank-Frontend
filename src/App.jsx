import { useSelector, useDispatch } from "react-redux"
import { userDataThunk, keepToken } from "./pages/SignIn/signInSlice.js"
import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './general/Navbar';
import Footer from './general/Footer';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import EditUser from './pages/EditUser/EditUser';
import './App.css'

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token');
  useEffect(() => {
      if (token != null) {
        dispatch(userDataThunk(token));  
      }
    }, [token])
  const userName = useSelector(state => state.user.profile?.userName)

  return (
    <>        
      <Navbar name={userName}/> 
      <Outlet />
      <Footer />
    </>
  )
}

export default App
