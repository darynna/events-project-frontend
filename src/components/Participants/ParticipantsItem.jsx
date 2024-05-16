export const ParticipantsItem = ({ participant }) => {
        const { name, email } = participant;
    return (
       <div>
            <p>{name}</p>
            <p>{email}</p>
       </div>
    )
}