import React, { useState } from "react";
import { ParticipantsSearch } from "./Participants.styled";

const ParticipantSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState(""); 

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <ParticipantsSearch>
            <input className="input"
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </ParticipantsSearch>
    );
};

export default ParticipantSearch;
