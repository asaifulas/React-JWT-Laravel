import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import Topbar from '../components/layout/Topbar'
import routes from '../routing/auth'
import Nofound from './auth/nofound'
import 'react-toastify/dist/ReactToastify.css';
import DialogBox from '../components/DialogBox'
import { AuthContext } from '../contexts/AuthContext'

const Main = () => {
  const [mini, setMini] = useState(true)
  const {expired} = useContext(AuthContext);
  useEffect(()=>{
    console.log(expired)
  },[expired])
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
              <Route key='other' path='*' element={<Nofound/>} />
            </Routes>
          </div>
          <div className='bg-gray-50 pt-5 flex'>
            <div className='hidden sm:flex sm:flex-grow cursor-pointer' onClick={()=>window.open('http://avialite.com', '_blank').focus()}>Avialite</div>
            <div>made for Avialite</div>
          </div>
        </div>
      </div>
      {/* <DialogBox/> */}
    </div>
  )
}

export default Main