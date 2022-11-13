import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AuthUser = () => {
  const navigate = useNavigate()

  const getToken = ()=>{
    const tokenString = sessionStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    return userToken
  }
  
  const getUser = ()=>{
    const userString = sessionStorage.getItem('user')
    const user_detail = JSON.parse(userString)
    return user_detail
  }

  const [token, setToken] = useState(getToken())
  const [user, setUser] = useState(getUser());
  
  const saveToken = (user, token)=>{
    sessionStorage.setItem('token', JSON.stringify(token))
    sessionStorage.setItem('user', JSON.stringify(user))

    setToken(token)
    setUser(user)
    navigate('/home')
  }

  const logout = ()=>{
    sessionStorage.clear()
    navigate('/login')
  }


  const http = axios.create({
      baseURL:"http://localhost:8000/api",
      headers:{
          "Content-type":"application/json"         
      }
  })
  const httpsec = axios.create({
      baseURL:"http://localhost:8000/api",
      headers:{
          "Content-type":"application/json",
          "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjY4MzAxMTIzLCJleHAiOjE2NjgzMDQ3MjMsIm5iZiI6MTY2ODMwMTEyMywianRpIjoiZUZuUFFKYjhXc0ZxU2FWWCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.AmxPDhmqnDfDBLNTvX8ZEzFNtC9TJNAUaCH4q3SJN8E"        
      }
  })

  return {
    setToken:saveToken,
    token,
    user,
    getToken,
    http,
    httpsec,
    logout
  }
}

export default AuthUser