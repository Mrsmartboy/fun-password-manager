import styled from 'styled-components'

export const PasswordMainContainer= styled.div`
 background-color:#5763a5 ;
 padding: 20px;
 display: flex;
 flex-direction: column;
 margin-top: 30px;
 border-radius: 5px;
`
export const PasswordContainer= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`

export const PasswordCountContainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const PasswordHead= styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
  @media screen and (max-width:576px){
     margin-right: 2px;
 }
`

export const PasswordPara=styled.p`
   border: 1px solid  #b6c3ca;
   border-radius: 80%;
   padding: 8px;
   color: #ffffff;
font-size: 12px;
`

export const HrLine= styled.hr`
  color: #7683cb;
  width: 100%;

`

export const InputElementContainer= styled.div`
  display: flex;
  flex-direction: row;
  
  background-color: #ffffff;

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

export const ShowPasswordcontainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`
export const InputBox= styled.input`
  border: none;
  border-radius: 5px;
  background-color: white;
  width: 15px;
  height: 15px;
  cursor: pointer;
  outline: none;

`

export const Label = styled.label`
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`

export const UserListContainer = styled.ul`
  list-style-type:none ;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`

export const NoPasswordContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoPasswordImage= styled.img`
   width: 50%;

`

export const NoPasswordHead= styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;

`