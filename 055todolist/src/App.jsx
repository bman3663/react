import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("");

    
      const sayHello = useCallback(() =>{  {
        setMessage("Hello!!!!1")
      }  
    })


    function increaseCount() {
      const newCount = count+1
      setCount(newCount)
    }

  useEffect(() => { // should this be triggered on render?
    console.log("Count changed to " + count)
  }, [count])

  return (
    <>
      <div>
        <button onClick={() => increaseCount()} >increase count</button>
        <p>Count: {count}</p>
        <button onClick={() => sayHello()}></button>
        <p>Message: {message}</p>
        
      </div>

    </>
  )
}

export default App
