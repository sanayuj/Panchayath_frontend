import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/User/Homepage'
import Signuppage from '../Pages/User/Signuppage'
import Loginpage from '../Pages/User/Loginpage'

function UserRoutes() {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/signup' element={<Signuppage/>}/>
    <Route path='/login' element={<Loginpage/>}/>
   </Routes>
   </div>
  )
}

export default UserRoutes