import { ParticipantsItemStyled } from "./Participants.styled";

export const ParticipantsItem = ({ participant }) => {
        const { name, email } = participant;
    return (
       <ParticipantsItemStyled>
            <p className="name">{name}</p>
            <p className="email">{email}</p>
       </ParticipantsItemStyled>
    )
}