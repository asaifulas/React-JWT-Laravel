import React, { useState } from 'react'

const Setting = () => {
  const c = [1,2,3]
  const [id, setId] = useState([])
  const [current, setCurrent] = useState('X')
  const [x, setX] = useState(0)
  const [o, setO] = useState(0)

  let butId = 0

  const answer =  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  let checker = (arr, target) => target.every(v => arr.includes(v));

  const win = (data, win)=>{window.setTimeout(function(){
    alert(win);
    data.map(id=>{
      document.getElementById(id).innerHTML = ''
      document.getElementById(id).disabled = false
    })
    setX(0)
    setO(0)
    setCurrent('X')
    }, 50);}

  const changeButton = (data)=>{
    document.getElementById(data).innerHTML = current
    console.log(id);
    document.getElementById(data).disabled = true
    setId([...id, data])
    if(current === 'X'){
      setCurrent('O')
      setX(x+data)
      answer.map(ans=>{
        if(checker()
      })
      answer.includes(x+data)&&win([...id, data], 'X Win')    
    }
    else{
      setCurrent('X')
      setO(o+data)
      answer.includes(o+data)&&win([...id, data], 'O Win')     
    }
  }
  return (
    <>
    <style>{`button{height:100px; width:100px; border:1px solid black;}
    .row{display: flex}`}</style>
    <div className='bg-white rounded-md shadow-md p-5'>
      <h2 className='text-lg font-semibold'>Setting</h2>
      <div>
          {c.map((row, index)=>{        
            return <div className='row' key={index*2}>{c.map((col)=>{
              return <div key={index*3+col}className={`cursor-pointer text-center`}>
                <button id={index*3+col} onClick={()=>changeButton(index*3+col)}>{index*3+col}</button>
              </div>
            })}</div>
          })}
          
      </div>
    </div>
    </>

  )
}

export default Setting