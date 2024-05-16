import React, { useState } from "react";

const EventSorting = ({ onSort }) => {
  const [sortBy, setSortBy] = useState(""); // State to store sorting option

  // Function to handle sorting option change
  const handleSortChange = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
    onSort(selectedSortBy);
  };

  return (
    <div>
      <label>Sort by:</label>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">Select</option>
        <option value="title">Title</option>
        <option value="date">Date</option>
        <option value="organizer">Organizer</option>
      </select>
    </div>
  );
};

export default EventSorting;
