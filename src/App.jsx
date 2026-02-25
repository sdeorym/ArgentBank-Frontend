import { Outlet } from "react-router-dom";
import Navbar from './general/Navbar';
import Footer from './general/Footer';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import './App.css'

function App() {
  return (
    <>        
      <Navbar name="Cuchimilitangas" /> {/* Este nombre lo importamos de la API */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
