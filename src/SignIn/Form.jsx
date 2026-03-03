import { useState } from "react";
import { useSelector } from "react-redux"
import TextField from './TextField.jsx';
import CheckBox from './CheckBox.jsx';
import Button from '../general/Button.jsx';

function Form({onSubmit, formLabels, showCheckBox, section}) {
  const [formData, setFormData] = useState({nameField: '', exquisitField: ''});
  const token = useSelector(state => state.user.token)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const formInfo = [
    {
      "id": formLabels[0].id,
      "type": formLabels[0].type,
      "label": formLabels[0].label,
      "onChange": (e) => setFormData({...formData, nameField: e.target.value})
    },
    {
      "id": formLabels[1].id,
      "type":formLabels[1].type,
      "label": formLabels[1].label,
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
          {showCheckBox && <CheckBox />}
          <Button content={section} classname="signInButton" buttonType="send" />
        </form>      
      </div>
    </>
  )
}

export default Form