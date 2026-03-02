import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Logout() {
    const dispatch = useDispatch()
    const handleLogoutSubmit = () => {dispatch({type: "user/logout", payload : null})}

  return (
    <>
      <span>
        <Link className="signInLink" to="/">
          <FontAwesomeIcon icon={faRightFromBracket} className="sign-in-out-icon" />
          <span className="signInText" onClick={handleLogoutSubmit}>Sign out</span>
        </Link>
      </span>
    </>
  )
}

export default Logout