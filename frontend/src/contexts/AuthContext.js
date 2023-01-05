import { createContext, useState } from "react";
import React from 'react'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [expired, setExpired] = useState(false)
  return (
    <AuthContext.Provider value={{expired, setExpired}}>{props.children}</AuthContext.Provider>
  )
}

export default AuthContextProvider