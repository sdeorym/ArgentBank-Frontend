import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { loginThunk, userDataThunk, keepToken } from "./signInSlice"
import Head from '../../SignIn/Head.jsx';
import Form from '../../SignIn/Form.jsx';
import './SignIn.css'

function SignIn() {
  const [check, setCheck] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLoginSubmit = (formData) => {dispatch(loginThunk(formData))}
  const token = useSelector(state => state.user.token)
  const showCheckBox = true;
  useEffect(() => {
    if (token != null) {
      navigate('/user', {replace: true})
      dispatch(userDataThunk(token))
      localStorage.setItem('token', token);
      dispatch(keepToken(token));  
    }
  }, [token])

  const formLabels = [
    {
      "id": "username",
      "type":"email",
      "label": "Username",
      "disabled": false,
      "className": "",
      "required": true,
      "fieldValue": "nameField" 
    },
    {
      "id": "password",
      "type":"password",
      "label": "Password",
      "disabled": false,
      "className": "",
      "required": true,
      "fieldValue": "passwordField"
    }
  ]

  return (
    <section className="display-area">
      <div className="signinBox">
        <div className="signInHead">
          <FontAwesomeIcon icon={faCircleUser} className="sign-in-out-icon" />        
          <Head title="Sign In" />
        </div>
        <Form onSubmit={handleLoginSubmit} formLabels = {formLabels} showCheckBox = {showCheckBox} section="Sign In" check={check} setCheck={setCheck} />        
      </div>      
    </section>
  )
}

export default SignIn