import styled from 'styled-components'


export const PasswordManagerMainContainer= styled.div`
 
  min-height: 100vh;

  background-color: #9ba9eb;
  padding: 30px;

 
`
export const PasswordManagerContainer=styled.div`
  display: flex;
  flex-direction: column;
`


export const PasswordManagerLogo = styled.img`
 width:15%;
 @media screen and (max-width:576px){
     width: 20%;
 }
`



export const PasswordFormContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
 padding: 20px;
 border-radius: 5px;
 background-color:#5763a5 ;
 @media screen and (max-width:576px){
     flex-direction: column;
     justify-content: center;
     
 }

`
export const PasswordForm= styled.form`
display: flex;
flex-direction: column;
   background-color: #454f84;
   padding: 20px;
    border-radius: 10px;
  width: 40%;
  margin-right: 5%;
  @media screen and (max-width:576px){
     order: 1;
     width: 80%;
 }
`

export const Heading = styled.h1`
color: #ffffff;
font-size: 20px;
font-weight: bold;

`

export const InputElementContainer= styled.div`
  display: flex;
  flex-direction: row;
  
  background-color: #ffffff;
  margin-bottom: 10px;
  border-radius: 4px;


`

export const Logo = styled.img`
  height: 22px;
  width: 22px;
  border-right: 2px solid #94a3b8;
  padding: 5px;
`
export const Input = styled.input`
 background-color: transparent;

  font-size: 10px;
  font-weight: bold;
  border: none;
  outline: none;
  width: 100%;

`
export const AddButton= styled.button`
  align-self: flex-end;
  background-color: #0b69ff;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  border: none;
  outline: none;
  padding: 5px;
  text-align: center;
  border-radius:5px ;
  cursor: pointer;
`

export const PasswordImage= styled.img`
  width: 30%;
  background-size: auto;
  @media screen and (max-width:576px){
     order: 0;
     width: 80%;
     margin-bottom: 10px;
 }
`