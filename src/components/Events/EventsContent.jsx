import { useSelector } from "react-redux"
import { EventList } from "./EventList"
import { selectEvents } from "../../redux/Events/eventsSelectors"
import EventSorting from "./EventSorting";
import { useState } from "react";
export const EventContent = () => {
      const events = useSelector(selectEvents);
  const [sortedEvents, setSortedEvents] = useState(events); // State to store sorted events

  // Function to handle sorting events
  const handleSort = (sortBy) => {
    let sortedEventsCopy = [...events]; // Make a copy of events array
    switch (sortBy) {
      case "title":
        sortedEventsCopy.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "date":
        sortedEventsCopy.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "organizer":
        sortedEventsCopy.sort((a, b) => a.organizer.localeCompare(b.organizer));
        break;
      default:
        break;
    }
    setSortedEvents(sortedEventsCopy);
  };
    return (
        <>
        <EventSorting onSort={handleSort} />
            {
                events ? <EventList events={sortedEvents} /> : <div>Loading...</div>
            }
        </>
    )
}