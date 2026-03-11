import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import TextField from './TextField.jsx';
import CheckBox from './CheckBox.jsx';
import Button from '../general/Button.jsx';

function Form({onSubmit, setCheck, check, formLabels, showCheckBox, section}) {
  const [formData, setFormData] = useState({nameField: '', passwordField: ''});
  const token = useSelector(state => state.user.token);

  // Una vez comprobemos el estado del check para ver si está dada la casilla, hacemos un useEffect para que localStorage = token.
  //localStorage.setItem(token);


  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <>  
      <div className="signInForm">
        <form onSubmit={handleSubmit}>
          {formLabels.map((info) =>
            <div key={info.id} className="formLabels">
              {<TextField id={info.id} type={info.type} label={info.label} onChange={(e) => setFormData({...formData, [info.fieldValue]: e.target.value})} classname={info.onChange} placeholder={info.placeholder} required={info.required} disabled={info.disabled} />}
            </div>
          )}
          {showCheckBox && <CheckBox check={check} setCheck={setCheck} />}
          <Button content={section} classname="signInButton" buttonType="send" />
        </form>      
      </div>
    </>
  )
}

export default Form