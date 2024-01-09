import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLoginPage from '../Pages/Admin/AdminLoginPage'
import AdminHomepage from '../Pages/Admin/AdminHomepage'

function AdminRoutes() {
  return (
    <Routes>
        <Route path='/' element={<AdminLoginPage/>}/>
        <Route path='/home' element={<AdminHomepage/>}/>
    </Routes>
  )
}

export default AdminRoutes