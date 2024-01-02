import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLoginPage from '../Pages/Admin/AdminLoginPage'

function AdminRoutes() {
  return (
    <Routes>
        <Route path='/login' element={<AdminLoginPage/>}/>
    </Routes>
  )
}

export default AdminRoutes