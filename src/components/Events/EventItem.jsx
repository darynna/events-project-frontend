import { NavLink } from "react-router-dom";
export const EventItem = ({ event }) => {
    const { _id, title, description, date, organizer } = event;
    return (
        <div>
            <div>
                <p>{title}</p>
            <p>{description}</p>
            </div>
            <div>
                   <p>{date}</p>
            <p>{organizer}</p>
            </div>
            <div>
                 <NavLink to={`/registration/${_id}`}>Register</NavLink>
              <NavLink to={`/participants/${_id}`}>View Participants</NavLink>
            </div>
        </div>
    )
}