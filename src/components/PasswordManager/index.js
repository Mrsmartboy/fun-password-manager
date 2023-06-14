
import YourPasswords from '../YourPasswords'
import {PasswordManagerMainContainer,PasswordManagerLogo,PasswordManagerContainer,PasswordFormContainer,PasswordForm,Heading,InputElementContainer,Logo,Input,AddButton,PasswordImage} from './styled'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
const PasswordManager=()=>{
    const [website,setWebsite]= useState('')
    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')
    const [usersList,setUsersList]= useState([])
    const [searchValue,setSearchValue]= useState('')
    const [show,setShow]=useState(false)

 
    const onSubmitForm=(event)=>{
          event.preventDefault()

          if(website&&username&&password){

            const colorsList = [
                'blue',
                'violet',
                'orange',
                'green',
                'purple',
                'lightGreen',
                'brown',
                'skyBlue',
              ]
          
              const randomColorValue = Math.ceil(Math.random() * colorsList.length - 1)
        const newUser={
            id:uuidv4(),
            website,
            username,
            password,
            value:randomColorValue,
        }
   
        setUsersList([...usersList,newUser])
        setUsername('')
        setWebsite('')
        setPassword('')
    }else{
        alert("Pls enter valid details")
    }


    }

    const onChangeWebsite=(event)=>{
        setWebsite(event.target.value)
    }

    const onChangeUserName=(event)=>{
        setUsername(event.target.value)
    }

    const onChangePassword=(event)=>{
        setPassword(event.target.value)
    }
   
    const onDeleteUserId=(id)=>{
        const updatedList = usersList.filter(eachUser=>(
            eachUser.id!==id
        ))
        setUsersList(updatedList)
      
    }

    const onChangeSearch=event=>{
        setSearchValue(event.target.value)
    }

    const filteredData=usersList.filter(eachUser=>(
        eachUser.website.toLowerCase().includes(searchValue.toLowerCase())
    ))

    const onShowPassword=()=>{
           setShow(!show)
    }

    return(
       <PasswordManagerMainContainer>
        <PasswordManagerLogo src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" alt="app logo"/>
        <PasswordManagerContainer>
        <PasswordFormContainer>
            <PasswordForm onSubmit={onSubmitForm}>
            <Heading>Add New Password</Heading>
            <InputElementContainer>
                <Logo src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" alt="website"/>
                <Input type="text" placeholder="Enter Website" onChange={onChangeWebsite} value={website}/>
            </InputElementContainer>
            <InputElementContainer>
                <Logo src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png" alt="username"/>
                <Input type="text" placeholder="Enter Username" onChange={onChangeUserName} value={username}/>
            </InputElementContainer>
            <InputElementContainer>
                <Logo src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" alt="password"/>
                <Input type="password" placeholder="Enter Password" onChange={onChangePassword} value={password}/>
            </InputElementContainer>
             <AddButton type="submit">Add</AddButton>
            </PasswordForm>
            <PasswordImage src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png" alt="password manager"/>
        </PasswordFormContainer>
        <YourPasswords usersList={filteredData} onDeleteUserId={onDeleteUserId} onChangeSearch={onChangeSearch} onShowPassword={onShowPassword} show={show}/>
        </PasswordManagerContainer>
       </PasswordManagerMainContainer>
    )

}

export default PasswordManager