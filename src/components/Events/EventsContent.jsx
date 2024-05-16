import { useSelector } from "react-redux"
import { EventList } from "./EventList"
import { selectEvents } from "../../redux/Events/eventsSelectors"
import EventSorting from "./EventSorting";
import { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

export const EventContent = () => {
      const events = useSelector(selectEvents);
  const [sortedEvents, setSortedEvents] = useState(events); // State to store sorted events
   const [itemsToShow, setItemsToShow] = useState(10); 

  // Function to handle sorting events
  const handleSort = (sortBy) => {
    let sortedEventsCopy = [...events]; 
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

  const fetchData = () => {
        setItemsToShow(itemsToShow + 10);
  };
  
    return (
        <>
        <EventSorting onSort={handleSort} />
            {
                events ?  <InfiniteScroll
                dataLength={itemsToShow}
                next={fetchData}
                hasMore={itemsToShow < sortedEvents.length} 
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                refreshFunction={fetchData}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                }
            >
                <EventList events={sortedEvents.slice(0, itemsToShow)} />
            </InfiniteScroll> : <div>Loading...</div>
        }
        
        </>
    )
}