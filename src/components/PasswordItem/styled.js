import styled from 'styled-components'


const List=[ '#0b69ff',

 '#7683cb',
 '#f59e0b',
  '#10b981',
  '#f97316',
  '#14b8a6',
  '#b91c1c',
   '#0ea5e9'

  ]

export const PasswordItemcontainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #9ba9eb ;
  border-radius: 5px;
  min-width: 150px;
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;

`

export const PasswordContentContainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Letter= styled.p`
   border-radius:100% ;
  padding: 10px;
   font-weight: bold;
  background-color: ${props=>List[props.value]};
  margin-right: 5px;
  padding-top: 5px;
  padding-bottom: 8px;
  color: #ffffff;
 

`

export const DataContainer= styled.div`
  display: flex;
  flex-direction: column;

`

export const Website= styled.p`
   color: white;
   font-size: 13px;
   font-weight: bold;
   margin-bottom: 0px;
   
`

export const UserName= styled.p`
   color: white;
   font-size: 13px;
   font-weight: bold;
   margin-top: 0px;
   margin-bottom: 0px;
   
`

export const Password= styled.p`
   color: white;
   font-size: 13px;
   font-weight: bold;
   margin-top: 0px;
   
`



export const DeleteImageButton= styled.img`
  height: 22px;
  width: 22px;
  cursor: pointer;
`

export const PasswordImage = styled.img`
    width: 62px;
    height: 8%;
    margin-top: 4px;
    font-size: 12px;
`

