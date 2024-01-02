import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='loginbodyClass'>
    <div className="login-container">
    <div className="login-form ">
      <h2>Login</h2>
      <form >
        <div className="form-group my-3">
          <input className='loginInput my-3' type="email" id="email" name="email" placeholder='Email' required/>
        </div>
  
        <div className="form-group ">
          
          <input className='loginInput ' type="password" id="password" name="password" placeholder='Password' required/>
        </div>
        <p>Don't have account<Link className='text-decoration-none' to={"/signup"}><span> Signup</span></Link></p>
        <button className='submitBtn' type="submit">Login</button>

      </form>
     
    </div>
  </div>
  </div>
  )
}

export default Login