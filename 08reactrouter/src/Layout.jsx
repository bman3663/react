import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
// 08reactrouter\src\components\Footer\Footer.jsx

function Layout() {
  return (
    <>
    <Header/>
    
    <Outlet/>
    
    <Footer/>
    </>
  )
}

export default Layout