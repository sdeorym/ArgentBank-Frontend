import { useSelector } from "react-redux"
import Logo from './Logo.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import UserLogo from './UserLogo.jsx';

function Navbar({name}) {
  const logability = localStorage.getItem('token');
  return (
    <>
      <div className="navigation-bar">
        <Logo />
        <div className="logInIcons">
          { (name != null) ? 
            (<><UserLogo name={name}/>
                <Logout /></>):
            <><Login /></>}               
        </div>
      </div>
    </>
  )
}

export default Navbar