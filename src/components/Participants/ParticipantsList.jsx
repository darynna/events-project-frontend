import { nanoid } from "@reduxjs/toolkit"
import { ParticipantsItem } from "./ParticipantsItem";

export const ParticipantsList = ({ participants }) => {
    return (
        <ul>
                {
                    participants.map((participant) => {
                     return  <li key={nanoid()}> <ParticipantsItem participant={participant} /></li>
                    })
               }
        </ul>
    )
}