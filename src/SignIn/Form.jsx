import { Link } from "react-router-dom";
import { useState } from "react";
import TextField from './TextField.jsx';
import CheckBox from './CheckBox.jsx';
import Button from '../general/Button.jsx';

function Form({onSubmit}) {
  const [formData, setFormData] = useState({nameField: '', exquisitField: ''});

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const formInfo = [
    {
      "id": "username",
      "type":"text",
      "label": "Username",
      "onChange": (e) => setFormData({...formData, nameField: e.target.value})
    },
    {
      "id": "password",
      "type":"password",
      "label": "Password",
      "onChange": (e) => setFormData({...formData, exquisitField: e.target.value})
    }
  ]

  return (
    <>  
      <div className="signInForm">
        <form onSubmit={handleSubmit}>
          {formInfo.map((info) =>
            <div key={info.id} className="formLabels">
              <TextField id={info.id} type={info.type} label={info.label} onChange={info.onChange} />
            </div>
          )}
          <CheckBox />
          <Button content="Sign In" classname="signInButton" buttonType="send" />
        </form>      
      </div>
    </>
  )
}

export default Form