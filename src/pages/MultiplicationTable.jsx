import React, { useState } from 'react'

function MultiplicationTable() {
    const [input, setInput] = useState(null);

    const getMultiplication = () =>{
        if(isNaN(input)){
            return(<h1 className='text-warning'>Please input number</h1>)
        }else{
            let sequence = [];
            for(let i = 0;i <= 10; i++){
                sequence.push(input * i);
            }
            return sequence.map((data)=><h1>{data}</h1>)
        }
    }
  return (
    <div className='container'>
        <div className='row py-4'>
            <div className='col-sm'>
                <input
                    type="text" 
                    value={input}
                    onChange={(e)=>{
                        setInput(e.target.value)
                    }}
                />
            </div>
        </div>
        <h1 className='text-primary'>{getMultiplication()}</h1>
    </div>
  )
}

export default MultiplicationTable