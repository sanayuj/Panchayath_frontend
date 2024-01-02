import React from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='bodyClass'>
    <div className="signup-form">
    <center><h2>Signup</h2></center>
    <form >
      <div className="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required/>
      </div>
  
      <div className="form-group">
        <label for="phonenumber">Phone Number:</label>
        <input type="tel" id="phonenumber" name="phonenumber" required/>
      </div>
  
      <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
  
      <div className="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
      </div>
  
      <div className="form-group">
        <label for="confirmpassword">Confirm Password:</label>
        <input type="password" id="confirmpassword" name="confirmpassword" required/>
      </div>
  <p>Already hava an account<Link className='text-decoration-none' to={"/login"}><span > Login </span></Link></p>
      <button type="submit">Signup</button>
    </form>
  </div>
  </div>

  );
}

export default Signup;
