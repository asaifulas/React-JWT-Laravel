import React from 'react'
import axios from 'axios'
import AuthUser from '../../components/AuthUser'

const Home = () => {
  const {http} = AuthUser()
  
  return (
    <div>Home</div>
  )
}

export default Home