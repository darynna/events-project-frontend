import styled from 'styled-components';

export const ItemWrap = styled.div`
width: 600px;
padding: 20px;
border: 3px solid #3b7aad;
border-radius: 20px;
background-color: #c8e3fa;

@media screen and (max-width: 668px) {
    width: 300px;
}

.title{
    font-size: 32px;
    font-weight: 800;
   color: #184061;
   margin-bottom: 10px;
}
.descr{
    font-size: 20px;  
    color: #3b7aad;
    margin-bottom: 20px;
}
.second-wrap{
    display: flex;
    justify-content: space-between;
     color: #3b7aad;
     font-weight: 600;
     margin-top: 10px;
}

.links{
       color: #184061;
       text-decoration: underline;
}
`

export const ListWrap = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
`


export const SortWrap = styled.div`
display: flex;
    justify-content: center;
    align-items: stretch;
        margin-bottom: 10px;
        margin-top: 10px;
        gap: 6px;
.lable{
    font-size: 18px;
    font-weight: 800;
   color: #184061;

}
`