import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { ThemeProvider } from '../../Context/NewContext'

function ForOutlet() {
  return (
    <>
    < ThemeProvider>
    {/* Use header in Admin Page */}
    <Header/>

    {/* Use Outlet for Router */}
    <Outlet/>
    </ThemeProvider>
    </>
  )
}

export default ForOutlet