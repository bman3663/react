import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  function App() {
    const [pw, setPW] = useState("")
    const [length, setLength] = useState(10);  // password length
    const [numbers, setNumbers] = useState(false); // include numbers?
    const [chars, setChars] = useState(false);     // include special characters?
    const pwRef = useRef(null)


    const copyPWToClipBoard = () => {
      window.navigator.clipboard.writeText(pw)
      pwRef.current?.focus()

    }

    const generatePW = useCallback(() => {
      let charSelection = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (numbers) charSelection += "0123456789";
      if (chars) charSelection += "!@#$%^&*()-_=+[]{};:,.<>/?|~`";

      let pw = Array.from({ length }, () =>
        charSelection[Math.floor(Math.random() * charSelection.length)]
      ).join("");
      setPW(pw)
    }, [length, numbers, chars])

    useEffect(()=>{
      generatePW()
    }, [length, numbers, chars] )

  return (
    <>
     <div className='w-full h-screen bg-black flex justify-center'>
      <div className='w-max p-5 h-max bg-gray-500 m-10 rounded-3xl' >
        <h2>Password Generator</h2>
        <div className="w-full max-w-sm min-w-[200px]">
          <div className="relative flex items-center">
          
        
            <input
            className="w-full bg-transparent placeholder:text-slate-400  text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={pw}
            placeholder='password'
            readOnly
            ref={pwRef}
            />
            
            <button
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
              onClick={copyPWToClipBoard}
            >
              Copy
            </button> 
          
          </div>
        </div>
        <div>
          <input id="default-range" type="range" value={length} min={6} max={100} onChange={(e) => setLength(Number(e.target.value))}  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
          <p>Length: {length}</p>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked={numbers} onChange={() => setNumbers((prev) => !prev)}  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700">Numbers</span>
          </label>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked={chars} onChange={() => setChars((prev) => !prev)}  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <span className="text-gray-700">Characters</span>
          </label>
        </div>
        
      </div>
     </div>
    </>
  )
}

export default App
