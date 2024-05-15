import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiGetEvents } from "../redux/Events/eventsSlice";
import { Route, Routes } from "react-router-dom";
import { EventsPage } from "Pages/Events";
import { FormPage } from "Pages/Form";
import { ParticipantsPage } from "Pages/Participants";

export const App = () => {
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetEvents());
  }, [dispatch]);

  return (
   <Routes>
      <Route path="/" element={<EventsPage />} />
      <Route path="/registration/:eventId" element={<FormPage />} />
      <Route path="/participants/:eventId" element={<ParticipantsPage/>}/>
    </Routes>
  );
};
