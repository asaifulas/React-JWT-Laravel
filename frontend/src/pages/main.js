import React from 'react'
import AuthUser from '../components/AuthUser'

const Main = () => {
  const {token,logout} = AuthUser()
  // const logoutUser = ()=>{
  //   logout();
  // }
  return (
    <div>
      <button className='text-white bg-red-600 px-5 py-2 hover:bg-red-500' 
      onClick={()=>logout()}>Logout</button>
    </div>
  )
}

export default Main