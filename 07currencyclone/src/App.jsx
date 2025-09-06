import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { InputBox } from './components/index.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import './App.css'

function App() {
  const [amount, setAmount] = useState(2)
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const [from, setFrom] = useState("eur")
  const [to, setTo] = useState("usd")

  const currencyInfo = useCurrencyInfo(from)
  const currencies = Object.keys(currencyInfo)
  

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  return (
    <>
      <form onSubmit={(e) =>{
                  e.preventDefault() 
                  convert()}} >      
                
        <InputBox
        label="From Section"
        amount={amount}
        currnecyArray={currencies}
        selectedCurrency={from}
        onAmountChange={(amount) => setAmount(amount)}
        onCurrencyChange={(currency) => setFrom(currency)}
      />
        <InputBox
        label="To Section"
        amount={convertedAmount}
        currnecyArray={currencies}
        selectedCurrency={to}
        onAmountChange={(amount) => setFrom(amount)}
        onCurrencyChange={(currency) => setFrom(currency)}
      />

      <button>Swap</button>
      <button 
            type='submit'>
              Convert {from} to {to}</button>



    </form>
      
    
    </>
  )
}

export default App
