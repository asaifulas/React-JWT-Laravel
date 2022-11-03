import React, { useState } from 'react'
import AuthUser from '../components/AuthUser'

const Login = () => {
    const http = AuthUser()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submit = ()=>{
        http.post('/login', {email:email, password:password}).then(res=>console.log(res.data))
    }
  return (
    <div className='flex h-screen'>
        <div className='flex flex-col m-auto h-[400px] w-[400px] shadow-md p-5 bg-slate-100'>
            <div className='justify-center text-center'>
                <h2 className='font-bold text-2xl font-serif pb-5 p-10'>Login</h2>
            </div>
            <div className='flex-grow'>
                <div className='flex m-5'>
                    <h3 className='flex-grow'>Email:</h3>
                    <input className='text-md px-2 text-lg rounded-md' type="text" name="email" placeholder='Email' id="email" onChange={e=>setEmail(e.target.value)} />
                </div>
                <div className='flex m-5'>
                    <h3 className='flex-grow'>Password:</h3>
                    <input className='text-md px-2 text-lg rounded-md' type="password" name="email" placeholder='Password' id="password" onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div className='text-center'>
                    <button className='text-white bg-cyan-900 rounded-md px-5 py-1 hover:bg-cyan-800 hover:scale-105 cursor-pointer' onClick={()=>submit()}>Enter</button>
                </div>
            </div>
            <div className='flex text-xs'>
                <div className='flex flex-grow'>
                    <h4 className='text-gray-700 hover:text-black hover:scale-105 cursor-pointer'>Forget Password</h4>
                </div>
                <div className='text-gray-700 hover:text-black hover:scale-105 cursor-pointer'>Register</div>
            </div>
        </div>
    </div>
  )
}

export default Login