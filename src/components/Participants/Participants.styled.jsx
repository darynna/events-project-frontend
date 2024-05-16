import styled from 'styled-components';

export const ParticipantsMainContent = styled.div`
padding: 10px;
.link{
     text-decoration: underline;
    font-weight: 700;
    color: #184061;
}
`

export const ParticipantsItemStyled = styled.div`
width: 200px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;

    .name{
         font-weight: 700;
   color: #184061;
   margin-bottom: 4px;
    }
    .email{
         color: #184061;
    }
`

export const ParticipantsListStyled = styled.ul`
display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`


export const ParticipantsSearch = styled.div`
width: 175px;
margin: 10px auto;

.input{
    width: 175px;
    padding: 10px;
    border: 1px solid #184061;
    border-radius: 8px;
}
`