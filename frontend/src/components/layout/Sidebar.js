import React from 'react'
import AuthUser from '../AuthUser'
import { Bars3Icon, ArrowRightOnRectangleIcon, HomeIcon, PhoneIcon, ChevronLeftIcon, TableCellsIcon, WrenchScrewdriverIcon} from '@heroicons/react/20/solid'
import routes from '../../routing/auth'
import { useNavigate } from 'react-router-dom'


const Sidebar = ({mini, setMini}) => {
  const {token,logout} = AuthUser()
  const navigate = useNavigate()

  return (
    <div className={mini?'sidebarMini':'sidebarOpen'}>
      <div className='flex my-2'>
        {mini?<Bars3Icon className='h-10 w-10 ml-auto mx-3 cursor-pointer' onClick={()=>setMini(!mini)}/>:<div className='flex flex-grow ml-auto items-center'><div className='pl-5 font-bold font-mono'>IRHAM Module</div><ChevronLeftIcon className='h-10 w-10 ml-auto mx-3 cursor-pointer' onClick={()=>setMini(!mini)}/></div>}   
      </div>
      <div className='flex-grow space-y-3 mt-5'>
        {routes.map(route=>(
        <div onClick={()=>navigate(route.path)} className={route.path===window.location.pathname?'sidebarBtnActive':'sidebarBtn'}>
          {route.icon}
          <h2 className={mini?'w-1 text-xl opacity-0':'sidebarText'}>{route.name}</h2>
        </div>
        ))}
        
      </div>
      <div className='flex text-white bg-red-600 py-3 rounded-lg scale-95 my-1 cursor-pointer hover:bg-red-500 text-center justify-center active:scale-90' onClick={()=>logout()}>
        <div className='h-7 w-7'><ArrowRightOnRectangleIcon/></div>
        <h2 className={mini?'w-1 text-xl opacity-0':'text-xl ml-5 my-auto transition-opacity duration-1000 delay-200 ease-out opacity-100'}>Logout</h2>
      </div>
    </div>
  )
}

export default Sidebar