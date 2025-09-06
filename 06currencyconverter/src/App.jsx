import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'



function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('eur')
  const [to, setTo] = useState('usd')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  // console.log("Options: " + options)

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
      <div className=' w-full h-screen flex flex-wrap 
      justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage: `url(https://images.pexels.com/photos/6266453/pexels-photo-6266453.jpeg)`}}>
        <div className='w-full max-w-md mx-auto border border-gray-50
        rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) =>{
            e.preventDefault()
            convert()
            }} >
            <div className='w-full mb-8'>
              <InputBox
                label="from"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}  
                onCurrencyChange={(currency) => setFrom(currency)} 
                currencyOptions={options}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button className='absolute left-1/2 
              -translate-x-1/2 -translate-y-1/2 border-2 
              border-white rounded-md bg-blue-600 
              text-white px-2 py-0.5' 
              onClick={swap}>Swap</button>
            </div>
            <div className='w-full mt-8 mb-2'>
              <InputBox
                label="to"
                amount={convertedAmount}
                amountDisabled={true}
                onAmountChange={(amount) => setConvertedAmount(amount)}  
                onCurrencyChange={(currency) => setTo(currency)} 
                currencyOptions={options}
                selectedCurrency={to}
              />
            </div>
            <div>
            <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' 
              type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
