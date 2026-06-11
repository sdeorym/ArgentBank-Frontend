import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Logout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogoutSubmit = () => {
      navigate('/', {replace: true})
      dispatch({type: "user/logout", payload : null})
      localStorage.removeItem("token");
    }

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