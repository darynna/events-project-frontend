import { NavLink } from "react-router-dom";
import { ItemWrap } from "./Events.styled";
import { formatDate } from "utilities/convertDateFunction";
export const EventItem = ({ event }) => {
    const { _id, title, description, date, organizer } = event;
    return (
        <ItemWrap>
            <div>
                <p className="title">{title}</p>
            <p className="descr">{description}</p>
            </div>
            <div className="second-wrap">
                   <p>Date: {formatDate(date)}</p>
            <p>Organizer: {organizer}</p>
            </div>
            <div className="second-wrap">
                 <NavLink className="links" to={`/registration/${_id}`}>Register</NavLink>
              <NavLink className="links" to={`/participants/${_id}`}>View Participants</NavLink>
            </div>
        </ItemWrap>
    )
}