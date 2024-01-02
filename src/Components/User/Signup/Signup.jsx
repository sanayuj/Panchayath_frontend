import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="bodyClass">
      <div className="signup-form">
        <center>
          <h2>Signup</h2>
        </center>
        <form>
          <div className="form-group">
            <label className="signupLabel"  for="username">Username:</label>
            <input  className="signupInput" type="text" id="username" name="username" required />
          </div>

          <div className="form-group">
            <label className="signupLabel" for="phonenumber">Phone Number:</label>
            <input className="signupInput"  type="tel" id="phonenumber" name="phonenumber" required />
          </div>

          <div className="form-group">
            <label className="signupLabel" for="email">Email:</label>
            <input  className="signupInput" type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label className="signupLabel" for="password">Password:</label>
            <input  className="signupInput" type="password" id="password" name="password" required />
          </div>

          <div className="form-group">
            <label className="signupLabel" for="confirmpassword">Confirm Password:</label>
            <input
            className="signupInput"
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              required
            />
          </div>
          <p>
            Already hava an account
            <Link className="text-decoration-none" to={"/login"}>
              <span> Login </span>
            </Link>
          </p>
          <button className="SignupBtn" type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
