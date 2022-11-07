import React, { useState } from 'react'
import AuthUser from '../../components/AuthUser';

const Devices = () => {
  const {http, token} = AuthUser();
  const [output, setOutput] =useState()
  http.get('/devices', { headers: { Authorization: `Bearer ${token}` } }).then((res)=>setOutput(res.data.message))
  return (
    <div>
      Devices {output}
    </div>
  )
}

export default Devices