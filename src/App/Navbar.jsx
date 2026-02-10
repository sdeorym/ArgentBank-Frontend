import Logo from './Logo.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import User from './User.jsx';

function Navbar({name}) {

  return (
    <>
      <div className="navigation-bar">
        <Logo />
        <div className="logInIcons">
          <User name={name}/>
          <Logout />
          <Login />
        </div>
      </div>
    </>
  )
}

export default Navbar