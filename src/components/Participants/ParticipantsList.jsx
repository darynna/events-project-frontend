import { nanoid } from "@reduxjs/toolkit"
import { ParticipantsItem } from "./ParticipantsItem";

export const ParticipantsList = ({ participants }) => {
    const id = nanoid();
    return (
        <ul>
                {
                    participants.map((participant) => {
                     return  <li key={id}> <ParticipantsItem participant={participant} /></li>
                    })
               }
        </ul>
    )
}