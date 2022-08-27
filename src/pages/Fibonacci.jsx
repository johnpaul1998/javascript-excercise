import React from "react";
import { useState } from "react";

export default function Fibonacci(){
    const [input,setInput] = useState("");

    const getFibonacci = () =>{
        if(isNaN(input || !input)){
            return(<p>please input the number</p>);
        }
        else{
            const laglagyanNGNumber = [];
            let firstNumber = 0;
            let secondNumber = 1;
            for(let i=0;i<=input;i++){
                laglagyanNGNumber.push(firstNumber);
                let result = firstNumber + secondNumber;
                firstNumber = secondNumber;
                secondNumber = result;
            }
            return laglagyanNGNumber.map((data)=>(<h1>{data}</h1>));
        }
    };
    return( 
    <div className='container'>
        <div className='row'>
            <div className='col-md p-5'>
                <input 
                type="text"
                placeholder='input'
                value={input}
                onChange={(event)=>{setInput(event.target.value)}} />
            </div>
            {getFibonacci()}
        </div>
    </div>);
};
