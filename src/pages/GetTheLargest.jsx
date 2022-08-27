import React, { useState } from 'react'

function GetTheLargest() {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);

  const highestNumber = () =>{
    return Math.max(first,second,third);
  }
  return (
    <div className='container-sm'>
      <div className='row py-5'>
        <div className='col-sm'>
          <input 
            value={first}
            onChange={(e)=>{setFirst(e.target.value)}}
            placeholder='input first number'
          />
        </div>
        <div className='col-sm'>
          <input 
            value={second}
            onChange={(e)=>{setSecond(e.target.value)}}
            placeholder='input second number'
          />
        </div>
        <div className='col-sm'>
          <input 
            value={third}
            onChange={(e)=>{setThird(e.target.value)}}
            placeholder='input third number'
          />
        </div>
      </div>
      <h1 className='text-primary'>{highestNumber()}</h1>
    </div>
  )
}

export default GetTheLargest