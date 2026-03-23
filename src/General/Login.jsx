import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Login() {

  return (
    <>
      <span>
        <Link className="signInLink" to="/sign-in">
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-out-icon" />
          <span className="signInText">Sign in</span>
        </Link>
      </span>
    </>
  )
}

export default Login