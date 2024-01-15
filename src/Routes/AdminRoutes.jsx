import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLoginPage from '../Pages/Admin/AdminLoginPage'
import AdminHomepage from '../Pages/Admin/AdminHomepage'
import AddCertificatePage from '../Pages/Admin/AddCertificatePage'
import CertificateRequirement from '../Pages/Admin/CertificateRequirement'
import AppliedCertViewPage from '../Pages/Admin/AppliedCertViewPage'

function AdminRoutes() {
  return (
    <Routes>
        <Route path='/' element={<AdminLoginPage/>}/>
        <Route path='/home' element={<AdminHomepage/>}/>
        <Route path='/addDocument' element={<AddCertificatePage/>}/>
        <Route path='/addRequirement' element={<CertificateRequirement/>}/>
        <Route path='/viewAppliedCert' element={<AppliedCertViewPage/>}/>

    </Routes>
  )
}

export default AdminRoutes