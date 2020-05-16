import styled from '@emotion/styled';



export const Campo = styled.div`
display: flex;
margin-bottom: 1rem;
align-items: center;
/* position: relative; */
`;


export const Label = styled.label`
flex: 0 0 100px;
`;

export const Select = styled.select`
display: block;
width: 100%;
padding: 0.5rem;
border: 1px solid #e1e1e1;
border-radius: 5px;
-webkit-appearance: none;
`;

export const InputRadio = styled.input`
margin: 0 1rem;
`;

export const Boton = styled.button`
display: block;
background-color: #00838f;
font-size: 16px;
width: 100%;
padding: 0.5rem;
color: #fff;
text-transform: uppercase;
font-weight: bold;
border: none;
border-radius: 5px;


transition: background-color 0.3s ease;
margin-top: 2rem;
/* margin-left: 25%; */
/* margin-right: 50%; */
&:hover{
     cursor: pointer;
     background-color: #26c6da;
}
`;


export const Error = styled.div`
     color: white;
     padding: 0.5rem;
     width: 100%;
     text-align: center;
     font-weight: bold;
     background-color: #ff9696;
    border: 1px solid red;
    border-radius: 5px;
    margin-bottom: 2rem;
`;