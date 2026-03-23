import "../SignIn/SignIn.css"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux"
import { userNameEditThunk } from "../SignIn/signInSlice"
import Head from '../../SignIn/Head.jsx';
import Form from '../../SignIn/Form.jsx';

function EditUser() {
    const navigate = useNavigate()
    const showCheckBox = false;
    const dispatch = useDispatch()
    const token = useSelector(state => state.user.token)
    
    const handleEditUserSubmit = (formData) => {        
        dispatch(userNameEditThunk(formData))
        navigate('/user', {replace: true})        
    }

    const names= [useSelector(state => state.user.profile.userName), useSelector(state => state.user.profile.firstName), useSelector(state => state.user.profile.lastName)]
    const formLabels = [
        {
        "id": "username",
        "type":"text",
        "label": "Current username",
        "disabled": false,
        "placeholder": names[0],
        "required": true,
        "fieldValue": "nameField"
        },
        {
        "id": "First name",
        "type":"text",
        "label": "First name",
        "disabled": true,
        "placeholder": names[1],
        "required": false,
        },
        {
        "id": "Last name",
        "type":"text",
        "label": "New Username",
        "disabled": true,
        "placeholder": names[2],
        "required": false,
        }
    ]
 
    return (
        <section className="display-area">
            <div className="signinBox">
                <div className="signInHead">
                <FontAwesomeIcon icon={faCircleUser} className="sign-in-out-icon" />        
                <Head title="Edit user info" />
                </div>
                <Form onSubmit={handleEditUserSubmit} formLabels = {formLabels} showCheckBox={showCheckBox} section="Edit username" /> 
            </div>      
        </section>
    )
}

export default EditUser