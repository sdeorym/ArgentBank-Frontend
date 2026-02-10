import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Logout() {

  return (
    <>
      <span>
        <Link className="signInLink" to="/">
          <FontAwesomeIcon icon={faRightFromBracket} className="sign-in-out-icon" />
          <span className="signInText">Sign out</span>
        </Link>
      </span>
    </>
  )
}

export default Logout