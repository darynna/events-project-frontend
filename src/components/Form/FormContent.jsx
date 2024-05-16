import { NavLink } from "react-router-dom"
import { FormElement } from "./Form"
export const FormContent = () => {
    return (
        <>
            <NavLink to={`/`}>Back to all events</NavLink>
             <p>Event Registration</p>
        <FormElement/>
        </>
    )
}