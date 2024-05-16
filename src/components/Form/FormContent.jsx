import { NavLink } from "react-router-dom"
import { FormElement } from "./Form"
import { FormWrapcontent } from "./Form.styled"
export const FormContent = () => {
    return (
        <FormWrapcontent>
            <NavLink className="link" to={`/`}>Back to all events</NavLink>
             <p className="title">Event Registration</p>
        <FormElement/>
        </FormWrapcontent>
    )
}