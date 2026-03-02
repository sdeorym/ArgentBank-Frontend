import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { loginThunk, userDataThunk } from "./signInSlice"
import Head from '../../SignIn/Head.jsx';
import Form from '../../SignIn/Form.jsx';
import './SignIn.css'

function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLoginSubmit = (formData) => {dispatch(loginThunk(formData))}
  const token = useSelector(state => state.user.token)

  useEffect(() => {
    if (token != null) {
      navigate('/user', {replace: true})
      dispatch(userDataThunk(token))      
    }
  }, [token])

  const formLabels = [
    {
      "id": "username",
      "type":"text"
    },
    {
      "id": "password",
      "type":"password"
    }
  ]

  return (
    <section className="display-area">
      <div className="signinBox">
        <div className="signInHead">
          <FontAwesomeIcon icon={faCircleUser} className="sign-in-out-icon" />        
          <Head />
        </div>
        <Form onSubmit={handleLoginSubmit} formLabels = {formLabels} />        
      </div>      
    </section>
  )
}

export default SignIn