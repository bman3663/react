import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [colour, setColour] = useState("white")


  return (
    <>
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: colour}}>
     
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-indigo-600 px-3 py-2 rounded-3xl">
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500' onClick={() => setColour("red")}>red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500' onClick={() => setColour("green")}>green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500' onClick={() => setColour("blue")}>blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500' onClick={() => setColour("yellow")}>yellow</button>
        </div>
      </div>  
    </div>      
    </>
  )
}


export default App
