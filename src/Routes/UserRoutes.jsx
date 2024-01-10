import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/User/Homepage'
import Signuppage from '../Pages/User/Signuppage'
import Loginpage from '../Pages/User/Loginpage'
import Complaintpage from '../Pages/User/Complaintpage'
import ShowRequirementPage from '../Pages/User/ShowRequirementPage'

function UserRoutes() {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/signup' element={<Signuppage/>}/>
    <Route path='/login' element={<Loginpage/>}/>
    <Route path='/complaint' element={<Complaintpage/>}/>
    <Route path='/showRequirement/:id' element={<ShowRequirementPage/>}/>
   </Routes>
   </div>
  )
}

export default UserRoutes