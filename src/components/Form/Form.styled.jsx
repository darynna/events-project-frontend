import styled from 'styled-components';
import {Form} from 'formik';

export const FormWrap = styled(Form)`
    width: 400px;
    background-color: white;
    padding: 20px;
    margin: 10px auto 0 auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 668px) {
    width: 300px;
}

    .wrap{
     display: flex;
    flex-direction: column;
    }

    .field{
        border: none;
        border: 1px solid #184061;
        padding: 5px;
        border-radius: 8px;
    }

    .button{
        border: none;
        background-color: #184061;
        color: #deeffc;
            margin: auto;
    padding: 10px 40px;
    border-radius: 15px;

    &:hover{
            background-color: #deeffc;
        color: #184061;
        }
    }

    .lable{
        font-weight: 700px;
    }
    .error{
        font-size: 12px;
        color: red
    }
`

export const FormWrapcontent = styled.div`
padding: 10px;
.title{
     font-size: 24px;
    font-weight: 700;
    color: #184061;
    margin: auto;
    width: 206px
}

.link{
    text-decoration: underline;
    font-weight: 700;
    color: #184061
}
`