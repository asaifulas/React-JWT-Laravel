import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const Profile = () => {
  const {expired, setExpired} = useContext(AuthContext)
  return (
    <div>Profile</div>
  )
}

export default Profile