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

    const formLabels = [
        {
        "id": "username",
        "type":"text",
        "label": "Current username"
        },
        {
        "id": "newUsername",
        "type":"text",
        "label": "New Username"
        }
    ]
 
    return (
        <section className="display-area">
            <div className="signinBox">
                <div className="signInHead">
                <FontAwesomeIcon icon={faCircleUser} className="sign-in-out-icon" />        
                <Head title="Edit username" />
                </div>
                <Form onSubmit={handleEditUserSubmit} formLabels = {formLabels} showCheckBox={showCheckBox} section="Edit username" /> 
            </div>      
        </section>
    )
}

export default EditUser