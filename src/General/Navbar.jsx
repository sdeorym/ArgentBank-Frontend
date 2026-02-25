import Logo from './Logo.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import UserLogo from './UserLogo.jsx';

function Navbar({name}) {

  return (
    <>
      <div className="navigation-bar">
        <Logo />
        <div className="logInIcons">
          <UserLogo name={name}/>
          <Logout />
          <Login />
        </div>
      </div>
    </>
  )
}

export default Navbar