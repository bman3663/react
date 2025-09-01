import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

const reactElenment = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: "Click me to visit Google"
}

function MyApp(){ 
  return(
    <div>
      <h1>custom react appplicationssss</h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://www.google.com" target="_blank">
    Click me to visit Googleee
  </a>
)



const areactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visitsdddd Google with React.createElement'
)

createRoot(document.getElementById('root')).render(
    < MyApp />
     
)
