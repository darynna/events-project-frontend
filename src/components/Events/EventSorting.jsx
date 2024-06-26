import React, { useState } from "react";
import { SortWrap } from "./Events.styled";

const EventSorting = ({ onSort }) => {
  const [sortBy, setSortBy] = useState(""); // State to store sorting option

  // Function to handle sorting option change
  const handleSortChange = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
    onSort(selectedSortBy);
  };

  return (
    <SortWrap>
      <label className="lable">Sort by:</label>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">Select</option>
        <option value="title">Title</option>
        <option value="date">Date</option>
        <option value="organizer">Organizer</option>
      </select>
    </SortWrap>
  );
};

export default EventSorting;
