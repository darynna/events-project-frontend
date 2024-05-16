import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { selectEvents } from "../../redux/Events/eventsSelectors";
import { ParticipantsList } from "./ParticipantsList";
import { useState } from "react";
import ParticipantSearch from "./ParticipantSearch";
import RegistrationsChart from "./Chart";

export const ParticipantsContent = () => {
    const events = useSelector(selectEvents);
    const { eventId } = useParams();
    const event = events.find((event) => event._id === eventId);
    const participants = event.participants;
    const [filteredParticipants, setFilteredParticipants] = useState(participants);

    const handleSearch = (searchTerm) => {
        const filtered = participants.filter(participant => {
            return participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   participant.email.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredParticipants(filtered);
    };
    
    return (
        <>
             <NavLink to={`/`}>Back to all events</NavLink>
            <ParticipantSearch onSearch={handleSearch} />
            {
                participants ? <ParticipantsList participants={filteredParticipants} />
                    : <div>Loading...</div>
            }
            <RegistrationsChart event={event} />
        </>
    )
}