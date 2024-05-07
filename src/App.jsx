import React, { useState } from 'react'
import { CalculatorIcon } from "lucide-react"
import "./index.css"

export function App() {

  const [result, setResult] = useState()
  const handleClick = e => setResult(result.concat(e.target.id))
  const clear = () => setResult("")
  const deleteEl = () => setResult(result.slice((0, -1)))
 
  const calculate = () => {
    try {
      setResult(eval(result))
    } catch (error) {
      setResult("error")
      
    }
 
  }


  return (
    
    <div className="bg-gray-700 flex justify-center items-center h-screen">
      <div className=" bg-zinc-900 text-white font-sans p-2 rounded-lg">Calculadora
        <div className='text-right p-2 text-white'>
          <input className='bg-zinc-900 ' type="text" value={result} disabled />
        </div>
        <div className="text-right p-2"></div>
        
        <div className="grid grid-cols-4 text-right p-2 g-3">
          
          <button id='CE' onClick={clear} className="bg-zinc-800/100 p-4 rounded-md m-0.5 hover:bg-zinc-700" >CE</button>
          <button id='C' onClick={clear} className="bg-zinc-800/100 p-4 rounded-md m-0.5 hover:bg-zinc-700" >C</button>
          <button id='DEL' onClick={deleteEl} className="bg-zinc-800/100 p-4 rounded-md m-0.5 hover:bg-zinc-700" >DEL</button>
          <button id='/' onClick={handleClick} className="bg-zinc-800/100 p-4 rounded-md m-0.5 hover:bg-zinc-700" >/</button>
          <button id='7' onClick={handleClick} className="bg-zinc-700/65 p-4 rounded-md m-0.5 hover:bg-zinc-700"  >7</button>
          <button id='8' onClick={handleClick} className="bg-zinc-700/65 p-4 rounded-md m-0.5 hover:bg-zinc-700"  >8</button>
          <button id='9' onClick={handleClick} className="bg-zinc-700/65 p-4 rounded-md m-0.5 hover:bg-zinc-700"  >9</button>
          <button id='*' onClick={handleClick} className="bg-zinc-800/100 p-4 rounded-md m-0.5 hover:bg-zinc-700" >*</button>
          <button id='4' onClick={handleClick} className="bg-zinc-700/65 p-4 rounded-md m-0.5 hover:bg-zinc-700"  >4</button>
          <button id='5' onClick={handleClick} className="bg-zinc-700/65 p-4 rounded-md m-0.5 hover:bg-zinc-700"  >5</button>
          <button id='6' onClick={handleClick} className="bg-zinc-700/65 p-4 rounded-md m-0.5 hover:bg-zinc-700"  >6</button>
          <button id='-' onClick={handleClick} className="bg-zinc-800/100 p-4 rounded-md m-0.5 hover:bg-zinc-700" >-</button>
          <button id='1' onClick={handleClick} className="bg-zinc-700/65 p-4 rounded-md m-0.5 hover:bg-zinc-700"  >1</button>
          <button id='2' onClick={handleClick} className="bg-zinc-700/65 p-4 rounded-md m-0.5 hover:bg-zinc-700"  >2</button>
          <button id='3' onClick={handleClick} className="bg-zinc-700/65 p-4 rounded-md m-0.5 hover:bg-zinc-700"  >3</button>
          <button id='+' onClick={handleClick} className="bg-zinc-800/100 p-4 rounded-md m-0.5 hover:bg-zinc-700" >+</button>
          <button id='0' onClick={handleClick} className="bg-zinc-700/65 p-4 rounded-md m-0.5 hover:bg-zinc-700"  >0</button>
          <button id=',' onClick={handleClick} className="bg-zigoc-700/65 p-4 rounded-md m-0.5 hover:bg-zinc-700"  >,</button>
          <button id='=' onClick={calculate} className="bg-red-700/55 p-4 rounded-md m-0.5  hover:bg-red-700/7 col-span-2"   >=</button>
        
        </div>
      
      </div>
      
   
</div>

  )
}

