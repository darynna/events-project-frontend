import { EventItem } from "./EventItem"

export const EventList = ({events}) => {
    return (
        <ul>
            {
                events.map((event) => {
                    return (
                        <EventItem key={event._id} event={event}/>
                    )
                })
            }
        </ul>
    )
}