import React from 'react'
import Header from "./Header"
import {Outlet} from "react-router-dom"
import Sider from './Sider'
const Layout = () => {
  return (
    <div>
      <Header />
      <div className='flex bg-slate-600 w-[100%]'>
      <Sider/>
        <div className='w-[calc(100%-90px)] bg-[white]'>
      <Outlet/>
        </div>
      </div>
      
    
    </div>
  )
}

export default Layout
