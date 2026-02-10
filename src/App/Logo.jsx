import { Link } from "react-router-dom";
import logo from '../../img/argentBankLogo.png'

function Logo() {

  return (
    <>
      <Link to="/">
        <img className="logo-image" src={logo} alt="ArgentBank logo"></img>
      </Link>
    </>
  )
}

export default Logo