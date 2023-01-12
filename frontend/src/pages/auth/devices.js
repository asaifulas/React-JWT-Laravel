import React, { useEffect, useState, Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid';
import DialogBox from '../../components/DialogBox';
import { ToastContainer, toast } from 'react-toastify';
import http from '../../services/httpConfig'
import { AuthContext } from '../../contexts/AuthContext';

const Devices = () => {

  const {expired, setExpired} = useContext(AuthContext)

  const [output, setOutput] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [fail, setFail] = useState(false)
  const [title, setTitle] = useState('Add Device')

  const [deviceId, setDeviceId] = useState()
  const [deviceName, setDeviceName] = useState()
  const [customer, setCustomer] = useState()
  
  const [open, setOpen] = useState(false)
  const [runout, setRunout] = useState(false)
  const [dataId, setDataId] = useState()

  const [addVariable, setAddVariable] = useState(false)
  const [label, setLabel] = useState('')
  const [variable, setVariable] = useState('')
  const [variableList, setVariableList] = useState()
  
  const [tempVariable, setTempVariable] = useState()


  useEffect(() => {
    http.get('/devices').then((res)=>setOutput(res.data.devices))
  }, [isOpen, runout, variableList]);

  const pushData = ()=>{

    if(title==='Add Device'){
        http.post('/devices', {
          deviceId:deviceId, 
          deviceName:deviceName, 
          customer:customer
        }).then((res)=>{
          if(res.status === 200){
            setIsOpen(false)
          toast.success("Add "+res.data.msg+" to devices", {
            position: toast.POSITION.BOTTOM_RIGHT,
          })}
          else {
            sessionStorage.clear()
            setFail(true);}
          
        })
      }
      else {
        http.put('/devices/'+dataId, {
          deviceId:deviceId, 
          deviceName:deviceName, 
          customer:customer
        }).then((res)=>{
          if(res.status === 200){
            setIsOpen(false)
            toast.success("Edit "+res.data.msg+" data", {
              position: toast.POSITION.BOTTOM_RIGHT,
            })
          }
          else if(res.status===401){
            sessionStorage.clear() 
          setFail(true);
          }
        })
      }

    }

   useEffect(()=>{
    if(runout){
      http.delete('/devices/'+dataId).then((res)=>{
      toast.success("Delete data "+res.data.msg, {
      position: toast.POSITION.BOTTOM_RIGHT});
      
    });
      setRunout(false)
    }
   },[runout])
   
   const pushVariable = ()=>{
    const testdata = variableList || [{label: label,name: variable}]
    variableList&&testdata.push({label:label, name:variable})
    setVariableList([...testdata])
    setVariable('')
    setLabel('')
   }

   const openVariable = (data, id)=>{
    setAddVariable(true)
    setVariableList(data)
    setTempVariable(data)
    setDataId(id)
   }

   const saveVariable = ()=>{
    setAddVariable(false)
    if(variableList != tempVariable){
      console.log(variableList);
      http.put('/devices/'+dataId, {
        variable:JSON.stringify(variableList)
      }).then((res)=>{
        if(res.status === 200){
          setIsOpen(false)
          setVariableList()
          toast.success("Variable has been updated", {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        }
        else if(res.status===401){
          sessionStorage.clear() 
        setFail(true);
        }
      })
    }
   }

   const addDevice = ()=>{
    setIsOpen(true)
    setDeviceId('')
    setDeviceName('')
    setCustomer('')
    setTitle('Add Device')

   }

   const editDevice =  (dbid, id, name, cust)=>{
    setIsOpen(true)
    setDataId(dbid)
    setDeviceId(id)
    setDeviceName(name)
    setCustomer(cust)
    setTitle('Edit Device')
   }

   const delVariable = (index)=>{
    const testdata = variableList
    testdata.splice(index, 1)
    setVariableList([...testdata])
   }

  return (
    <div className='bg-white rounded-md p-5 shadow-md'>
      <h2 className='text-xl font-bold border-b-2'>Devices</h2>
      <div className='relative h-10 my-2'>
        <div className='right-0 absolute'>
          <button className='rounded-md cursor-pointer hover:bg-green-600 bg-green-700 text-white p-2 w-28' onClick={()=>addDevice()}>Add</button>
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
            <th className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase'>Action</th>
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
            <td className='flex space-x-2 py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              <h2 className='text-green-600 hover:text-green-500 cursor-pointer text-md hover:scale-95 active:scale-105' onClick={()=>openVariable(JSON.parse(out.variable), out.id)}>Variables</h2>
              <h2 className='text-yellow-600 hover:text-yellow-500 cursor-pointer text-md hover:scale-95 active:scale-105' onClick={()=>editDevice(out.id, out.deviceId, out.deviceName, out.customer)}>Edit</h2>
              <h2 className='text-red-600 hover:text-red-500 cursor-pointer text-md hover:scale-95 active:scale-105' onClick={()=>{setOpen(true);setDataId(out.id)}}>Delete</h2>
            </td>
          </tr>
          )
        )}
          
        </tbody>
      </table>
      </div>

      {/* Dialog box */}
      
      {/* <Alert {...{showAlert, showAlert, color:'red', hlMsg:'Success', msg:'Your data has been deleted'}}/>
      <Alert {...{showAlert, showAlert, color:'green', hlMsg:'Success', msg:'Your data has been deleted'}}/> */}
      <DialogBox {...{open, setOpen, runout, setRunout, dialogType:'danger', dialogMsg:'Confirm delete data?'}}/>
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
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className='flex m-5 pt-2'>
                      <h3 className='flex-grow'>Device Id:</h3>
                      <input className='text-md outline-offset-4 px-2 text-lg rounded-md py-1 outline-none bg-gray-100' value={deviceId} onChange={(e)=>setDeviceId(e.target.value)} type="text" name="deviceId" placeholder='Device Id' id="deviceId"  />
                    </div>
                    <div className='flex m-5'>
                      <h3 className='flex-grow'>Device Name:</h3>
                      <input className='text-md outline-offset-4 px-2 text-lg rounded-md py-1 outline-none bg-gray-100' value={deviceName} onChange={(e)=>setDeviceName(e.target.value)} type="text" name="deviceName" placeholder='Device Name' id="deviceName"  />
                    </div>
                    <div className='flex m-5'>
                      <h3 className='flex-grow'>Customer:</h3>
                      <input className='text-md outline-offset-4 px-2 text-lg rounded-md py-1 outline-none bg-gray-100' value={customer} onChange={(e)=>setCustomer(e.target.value)} type="text" name="customer" placeholder='Customer' id="customer"  />
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
      <Transition appear show={addVariable} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={saveVariable}>
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
                    <XMarkIcon className='h-7 absolute right-2 top-2 opacity-75 hover:opacity-100 text-gray-700 cursor-pointer' onClick={saveVariable}/>
                  </div>
                  <div className='p-6 pt-10'>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 border-b-2"
                  >
                    Variable List
                  </Dialog.Title>
                  <div className="mt-2 items-center">
                    <div className='flex m-5'>
                      <h3 className='flex-grow'>Label:</h3>
                      <input className='text-md outline-offset-4 px-2 text-lg rounded-md py-1 outline-none bg-gray-100' value={label} onChange={(e)=>setLabel(e.target.value)} type="text" name="label" placeholder='Variable 1' id="label"  />
                    </div>
                    <div className='flex m-5'>
                      <h3 className='flex-grow'>Name:</h3>
                      <input className='text-md outline-offset-4 px-2 text-lg rounded-md py-1 outline-none bg-gray-100' value={variable} onChange={(e)=>setVariable(e.target.value)} type="text" name="variable" placeholder='variable1' id="variable"  />
                    </div>  
                  </div>
                  <div className="text-center justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={()=>pushVariable()}
                    >
                      Add New Variable
                    </button>
                  </div>

                  <div className='bg-gray-100 m-5 p-5 h-44 overflow-scroll'>
                    {
                      variableList&&
                      variableList.map((dat, index)=>{
                         return <div key={dat.name} className='flex bg-gray-200 hover:bg-gray-300 cursor-pointer items-center'>
                          <div className='p-2 border-black border-r-2 w-1/2'>{dat.label}</div>
                          <div className='w-1/2 p-2'>{dat.name}</div>
                          
                          <div onClick={()=>delVariable(index)} className='text-red-400 p-2 font-bold hover:text-red-600 hover:scale-105'>X</div>
                        </div>
                    } )

                    }
                    
                  </div>
                  <div className='text-lg font-medium leading-6 text-gray-900 border-b-2'>
                    Json Example
                  </div>
                  <div className='bg-gray-100 m-5 p-5 h-20 overflow-scroll'>
                  &#123;
                    {
                      variableList&&
                      variableList.map((dat, index)=>{
                        if(index<variableList.length-1){
                        return `"${dat.name}":"value", `}
                        else return `"${dat.name}":"value" `
                      })
                    }
                  &#125;
                  </div>
                  
                  
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ToastContainer />
    </div>
  )
}

export default Devices