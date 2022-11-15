import { BellAlertIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'


const Topbar = ({mini, setMini}) => {
  return (
    <div className='flex sticky h-14 items-center top-0 z-50 w-full shadow-lg'>
      <div className='flex-grow'>
        {mini&&<h2 className='pl-5 font-bold font-mono text-xl'>IRHAM Module</h2>}
      </div>
      <div className='flex space-x-5 px-5'>
        <div className='relative cursor-pointer opacity-85 hover:scale-105 hover:opacity-100 active:scale-95'>
          <BellAlertIcon className='h-8'/>
          <h2 className='absolute -top-1 -right-1 bg-red-500 rounded-full text-xs px-1'>5</h2>
        </div>
        <div className='relative cursor-pointer opacity-85 hover:scale-105 hover:opacity-100'>
          <UserCircleIcon className='h-8'/>
        </div>
      </div>
    </div>
  )
}

export default Topbar