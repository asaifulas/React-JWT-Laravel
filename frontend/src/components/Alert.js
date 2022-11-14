import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { BellAlertIcon } from '@heroicons/react/24/outline'

// const Alert = ({showAlert, setShowAlert, color, hlMsg, msg}) => {
const Alert = ({alert, setAlert, color, hlMsg, msg}) => {
  return (
    <div>
        <Transition appear show={true} as={Fragment}>
        <Dialog as="div" className="relative z-60" onClose={()=>setAlert(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex absolute bottom-2 right-2 p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={"text-white px-6 py-4 border-0 rounded relative mb-4 bg-" + color + "-500"}>
                <span className="text-xl inline-block mr-5 align-middle">
                     <BellAlertIcon className='h-7 font-bold'/>
                 </span>
                 <span className="inline-block align-middle mr-8">
                     <b className="capitalize">{hlMsg}!</b> {msg}
                 </span>
                 <button
                className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                onClick={() => setAlert(false)}
            >
                <span>×</span>
            </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Alert