import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon, ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

const DialogBox = ({open, setOpen, runout, setRunout, dialogType, dialogMsg}) => {
  return (
    <div>
        <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>setOpen(false)}>
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
                    <XMarkIcon className='h-7 absolute right-2 top-2 opacity-75 hover:opacity-100 text-gray-700 cursor-pointer' onClick={()=>setOpen(false)}/>
                  </div>
                  <div className='p-6 pt-10'>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 items-center justify-center text-center"
                  >
                    {dialogType==='danger'?<ExclamationCircleIcon className='text-red-500 h-44 inline-flex justify-center'/>:dialogType==='warning'?<ExclamationCircleIcon className='text-yellow-500 h-44 inline-flex justify-center'/>:<CheckCircleIcon className='text-green-500 h-44 inline-flex justify-center'/>}
                  </Dialog.Title>
                  <div className="mt-2 text-center text-lg">
                    {dialogMsg}
                  </div>

                  <div className="pt-5 text-center justify-center space-x-44">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={()=>setOpen(false)}
                    >
                      {dialogType==='danger'?'Cancel':'Close'}
                    </button>
                    {dialogType==='danger'?<button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={()=>{setRunout(true);setOpen(false)}}
                    >
                      Delete
                    </button>:dialogType==='warning'&&<button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={()=>{setRunout(true);setOpen(false)}}
                    >
                      Confirm
                    </button>}
                    
                    
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

export default DialogBox