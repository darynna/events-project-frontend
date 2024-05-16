import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectEvents } from "../../redux/Events/eventsSelectors";
import { ParticipantsList } from "./ParticipantsList";

export const ParticipantsContent = () => {
    const events = useSelector(selectEvents);
    const { eventId } = useParams();
    const event = events.find((event) => event._id === eventId);
    const participants = event.participants;
    
    return (
        <>
            {
                participants ? <ParticipantsList participants={participants} />
                    : <div>Loading...</div>
            }
        </>
    )
}