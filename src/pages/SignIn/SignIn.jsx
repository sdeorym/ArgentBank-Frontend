import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { loginThunk, userDataThunk } from "./signInSlice"
import Head from '../../SignIn/Head.jsx';
import Form from '../../SignIn/Form.jsx';
import './SignIn.css'

function SignIn() {
  const dispatch = useDispatch()
  const handleLoginSubmit = (formData) => {dispatch(loginThunk(formData))}
  const token = useSelector(state => state.user.token)

  useEffect(() => {
    if (token != null) {
      console.log("Entra en el if del useEffect", token)
      dispatch(userDataThunk(token))
    }
  }, [token])

  return (
    <section className="display-area">
      <div className="signinBox">
        <div className="signInHead">
          <FontAwesomeIcon icon={faCircleUser} className="sign-in-out-icon" />        
          <Head />
        </div>
        <Form onSubmit={handleLoginSubmit}/>        
      </div>      
    </section>
  )
}

export default SignIn