import { EventItem } from "./EventItem"
import { ListWrap } from "./Events.styled"

export const EventList = ({events}) => {
    return (
        <ListWrap>
            {
                events.map((event) => {
                    return (
                        <EventItem key={event._id} event={event}/>
                    )
                })
            }
        </ListWrap>
    )
}