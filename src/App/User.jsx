import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function User({name}) {

// In time, "Name" will be replaced by {Name}

  return (
    <>
      <span>
        <Link className="signInLink" to="/user">
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-out-icon" />
          <span className="signInText">{name}</span>
        </Link>
      </span>
    </>
  )
}

export default User