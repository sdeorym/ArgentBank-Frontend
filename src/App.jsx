import { Outlet } from "react-router-dom";
import Navbar from './App/Navbar';
import Footer from './App/Footer';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import './App.css'

function App() {

  return (
    <>
        <Navbar name="Cuchimilitangas" />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
