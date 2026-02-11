import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Head from '../../SignIn/Head.jsx';
import Form from '../../SignIn/Form.jsx';
import './SignIn.css'

function SignIn() {

  return (
    <section className="display-area">
      <div className="signinBox">
        <div className="signInHead">
          <FontAwesomeIcon icon={faCircleUser} className="sign-in-out-icon" />        
          <Head />
        </div>
        <Form />        
      </div>      
    </section>
  )
}

export default SignIn