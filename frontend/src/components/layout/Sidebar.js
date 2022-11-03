import React from 'react'
import AuthUser from '../AuthUser'
import { Bars3Icon, ArrowRightOnRectangleIcon, HomeIcon, PhoneIcon, ChevronLeftIcon} from '@heroicons/react/20/solid'


const Sidebar = ({mini, setMini}) => {
    const {token,logout} = AuthUser()
  return (
    <div className='flex flex-col h-screen bg-gray-900 w-64 text-white'>
      <div className='flex bg-gray-700 my-2'>
        {mini?<Bars3Icon className='h-10 w-10 ml-auto mx-3'/>:<ChevronLeftIcon className='h-10 w-10 ml-auto mt-2 mx-3'/>}   
      </div>
      <div className='flex-grow space-y-5 mt-10'>
        <div className='flex scale-95 rounded-lg bg-gray-800 cursor-pointer p-2 items-center hover:bg-gray-700'>
          <HomeIcon className='flex-grow h-10 w-10'/>
          <h2 className='flex-grow text-xl'>Dashboard</h2>
        </div>
        <div className='h-10 w-10'><PhoneIcon/></div>
        <div className='h-10 w-10'><Bars3Icon/></div>
      </div>
      <div className='flex text-white bg-red-600 py-3 rounded-lg scale-95 my-1 cursor-pointer hover:bg-red-500 text-center justify-center active:scale-90' onClick={()=>logout()}>
        <div className='h-7 w-7'><ArrowRightOnRectangleIcon/></div>
        <h2 className='text-xl ml-5 my-auto'>Logout</h2>
      </div>
    </div>
  )
}

export default Sidebar