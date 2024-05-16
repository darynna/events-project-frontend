import React, { useState } from "react";

const ParticipantSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState(""); 

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default ParticipantSearch;
