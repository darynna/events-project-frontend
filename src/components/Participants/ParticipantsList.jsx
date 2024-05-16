import { nanoid } from "@reduxjs/toolkit"
import { ParticipantsItem } from "./ParticipantsItem";
import { ParticipantsListStyled } from "./Participants.styled";

export const ParticipantsList = ({ participants }) => {
    return (
        <ParticipantsListStyled>
                {
                    participants.map((participant) => {
                     return  <li key={nanoid()}> <ParticipantsItem participant={participant} /></li>
                    })
               }
        </ParticipantsListStyled>
    )
}