import React, { useEffect, useState } from 'react'
import AuthUser from '../../components/AuthUser';

const Devices = () => {
  const {http, token} = AuthUser();
  const [output, setOutput] =useState([])
  useEffect(() => {
    http.get('/devices', { headers: { Authorization: `Bearer ${token}` } }).then((res)=>setOutput(res.data.devices))
  }, []);

  return (
    <div className='bg-white rounded-md p-5 shadow-md'>
      <h2 className='text-xl font-bold border-b-2'>Devices</h2>
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
    </div>
  )
}

export default Devices