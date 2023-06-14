
import {PasswordItemcontainer,PasswordImage,PasswordContentContainer,Letter,DataContainer,Website,UserName,Password,DeleteImageButton} from './styled'

const PasswordItem =(props)=>{
    const {eachUser,onDeleteUserId,show}=props 
    const {id,website,username,password,value}= eachUser 

    const firstLetter = website.slice(0,1)

    const onDeleteUser=()=>{
        onDeleteUserId(id)
    }
  
    return(
        <PasswordItemcontainer>
               <PasswordContentContainer>
                <Letter value={value}>{firstLetter}</Letter>
                <DataContainer>
                    <Website>{website}</Website>
                    <UserName>{username}</UserName>
                    {!show?<PasswordImage src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png" alt="stars"/>:<Password>{password}</Password>}
                    
                </DataContainer>
               </PasswordContentContainer>
               <DeleteImageButton src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png" alt="delete" onClick={onDeleteUser}/>
               
               
        </PasswordItemcontainer>
    )

}

export default PasswordItem