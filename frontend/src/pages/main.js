import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Topbar from '../components/layout/Topbar'

const Main = () => {

  return (
    <div className='flex'>
      <div className='flex-shrink'><Sidebar/></div>
      <div>
        <div><Topbar/></div>
        <div>content</div>
        <div>footer</div>
      </div>
    </div>
  )
}

export default Main