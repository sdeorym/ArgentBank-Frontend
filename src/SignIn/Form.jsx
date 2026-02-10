import { Link } from "react-router-dom";
import TextField from './TextField.jsx';
import CheckBox from './CheckBox.jsx';
import Button from '../General/Button.jsx';

function Form() {
  const formInfo = [
    {
      "id": "username",
      "type":"text",
      "label": "Username"
    },
    {
      "id": "password",
      "type":"password",
      "label": "Password"
    }
  ]

/* <div className="signInForm">
                <form>
          {formInfo.map((info) =>
            <div key={info.id} className="formLabels">
              <TextField id={info.id} type={info.type} label={info.label} />
            </div>
          )}
        </form>
      </div>
        <div>
          
        </div>
        <div>

        </div>
*/

  return (
    <>  
      <div className="signInForm">
        <form>
          {formInfo.map((info) =>
            <div key={info.id} className="formLabels">
              <TextField id={info.id} type={info.type} label={info.label} />
            </div>
          )}
          <CheckBox />
          <Link to="/user">
            <Button content="Sign In" classname="signInButton" />
          </Link>          
        </form>      
      </div>
    </>
  )
}

export default Form