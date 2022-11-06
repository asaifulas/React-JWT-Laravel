import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import Topbar from '../components/layout/Topbar'
import routes from '../routing/auth'
import Home from './auth/home'

const Main = () => {
  const [mini, setMini] = useState(true)
  return (
    <div className='flex'>
      <div className='flex-shrink'><Sidebar {...{mini, setMini}}/></div>
      <div className='flex flex-col flex-grow'>
        <div><Topbar {...{mini, setMini}}/></div>
        <div className='bg-gray-50 h-[calc(100vh-56px)] overflow-auto p-5 flex flex-col'>
          <div className='flex-grow'>
            <Routes>
              {
                routes.map(route => (
                  <Route key={route.key} path={route.path} element={route.component} />
                ))
              }
              <Route key='other' path='*' element={<Home/>} />
            </Routes>
          </div>
          <div className='bg-gray-50 pt-5 flex'>
            <div className='hidden sm:flex sm:flex-grow'>Avialite</div>
            <div>made for Avialite</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main