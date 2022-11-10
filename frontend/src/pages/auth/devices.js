import React, { useEffect, useState, Fragment } from 'react'
import AuthUser from '../../components/AuthUser';
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid';

const Devices = () => {
  const {http, token} = AuthUser();
  const [output, setOutput] =useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [fail, setFail] = useState(false)

  const [deviceId, setDeviceId] = useState()
  const [deviceName, setDeviceName] = useState()
  const [customer, setCustomer] = useState()

  useEffect(() => {
    http.get('/devices', { headers: { Authorization: `Bearer ${token}` } }).then((res)=>setOutput(res.data.devices))
  }, []);

  const pushData = ()=>{
      http.get('/devices/create', { headers: { Authorization: `Bearer ${token}` }, deviceId:deviceId, deviceName:deviceName, customer:customer }).then((res)=>{
        console.log(res)
        res.status === 200?setIsOpen(false):setFail(true)
      })
    }
  

  return (
    <div className='bg-white rounded-md p-5 shadow-md'>
      <h2 className='text-xl font-bold border-b-2'>Devices</h2>
      <div className='relative h-10 my-2'>
        <div className='right-0 absolute'>
          <button className='rounded-md cursor-pointer hover:bg-green-600 bg-green-700 text-white p-2 w-28' onClick={() => setIsOpen(true)}>Add</button>
        </div>
      </div>
      <div className='pt-2 bg-gray-50 rounded-lg'>
      <table className='min-w-full divide-y divide-gray-200 table-fixed'>
        <thead className='bg-gray-100 dark:bg-gray-700'>
          <tr>
            <th className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase'>No</th>
            <th className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase'>Device ID</th>
            <th className='hidden md:table-cell py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase'>Device Name</th>
            <th className='hidden md:table-cell py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase'>Customer</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
        {output.map((out, index)=>
        (
          <tr key={index} className='hover:bg-gray-100 dark:hover:bg-gray-700'>
            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>{index+1}</td>
            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>{out.deviceId}</td>
            <td className='hidden md:table-cell py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>{out.deviceName}</td>
            <td className='hidden md:table-cell py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>{out.customer}</td>
          </tr>
          )
        )}
          
        </tbody>
      </table>
      </div>

      {/* Dialog box */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
                  <div className='relative'>
                    <XMarkIcon className='h-7 absolute right-2 top-2 opacity-75 hover:opacity-100 text-gray-700 cursor-pointer' onClick={()=>setIsOpen(false)}/>
                  </div>
                  <div className='p-6 pt-10'>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 border-b-2"
                  >
                    Add Device
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className='flex m-5 pt-2'>
                      <h3 className='flex-grow'>Device Id:</h3>
                      <input className='text-md outline-offset-4 px-2 text-lg rounded-md py-1 outline-none bg-gray-100' onChange={(e)=>setDeviceId(e.target.value)} type="text" name="deviceId" placeholder='Device Id' id="deviceId"  />
                    </div>
                    <div className='flex m-5'>
                      <h3 className='flex-grow'>Device Name:</h3>
                      <input className='text-md outline-offset-4 px-2 text-lg rounded-md py-1 outline-none bg-gray-100' onChange={(e)=>setDeviceName(e.target.value)} type="text" name="deviceName" placeholder='Device Name' id="deviceName"  />
                    </div>
                    <div className='flex m-5'>
                      <h3 className='flex-grow'>Customer:</h3>
                      <input className='text-md outline-offset-4 px-2 text-lg rounded-md py-1 outline-none bg-gray-100' onChange={(e)=>setCustomer(e.target.value)} type="text" name="customer" placeholder='Customer' id="customer"  />
                    </div>
                  </div>

                  <div className="pt-5 text-center justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={()=>pushData()}
                    >
                      Add
                    </button>
                  </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Devices