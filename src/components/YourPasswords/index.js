import {PasswordContainer,PasswordMainContainer,PasswordCountContainer,PasswordHead,PasswordPara,
InputElementContainer,Logo,Input,HrLine,ShowPasswordcontainer,InputBox,Label,UserListContainer,NoPasswordContainer,NoPasswordHead,NoPasswordImage} from './styled'
import PasswordItem from '../PasswordItem'

// import { useState } from 'react'
const YourPasswords=(props)=>{
    const {usersList,onDeleteUserId,onChangeSearch,onShowPassword,show}= props 
    return(
        <PasswordMainContainer>
            <PasswordContainer>
                <PasswordCountContainer>
                    <PasswordHead>Your Passwords</PasswordHead>
                    <PasswordPara>{usersList.length}</PasswordPara>
                </PasswordCountContainer>
                <InputElementContainer>
                <Logo src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt="Search"/>
                <Input type="text" placeholder="Search" onChange={onChangeSearch}/>

            </InputElementContainer>
            </PasswordContainer>
            <HrLine/>
            <ShowPasswordcontainer>
                <InputBox type="checkbox" id="password" onClick={onShowPassword} value={show}/>
                <Label htmlFor='password'>Show Password</Label>
            </ShowPasswordcontainer>
            {usersList.length>0?<UserListContainer>
                {usersList.map(eachUser=>(
                    <PasswordItem key={eachUser.id } eachUser={eachUser} onDeleteUserId={onDeleteUserId} show={show}/>
                ))}
            </UserListContainer>:<NoPasswordContainer>
                  <NoPasswordImage src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt="no password"/>
                  <NoPasswordHead>No Passwords</NoPasswordHead>
                </NoPasswordContainer>}
            
        </PasswordMainContainer>
    )

}

export default YourPasswords