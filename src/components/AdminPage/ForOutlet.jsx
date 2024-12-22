import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

function ForOutlet() {
  return (
    <>
    {/* Use header in Admin Page */}
    <Header/>

    {/* Use Outlet for Router */}
    <Outlet/>
    </>
  )
}

export default ForOutlet