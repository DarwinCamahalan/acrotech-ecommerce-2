import React, { Component } from 'react'
import Signup from './../../components/Signup'
import './styles.scss'
import { Link } from 'react-router-dom'
const Registration = (props) => {
  return (
    <div className="signup">
      <div className="info">
        <h1>User Registration</h1>
        <hr />
        <div className="hint">Entry of customer information</div>
        <p>
          If you would like to register as a user, please be sure to enter all
          the necessary items, and click the Register button.
        </p>
      </div>

      <div className="registration-container">
        <Signup />
        <div className="register">
          <h1>Recover Account</h1>

          <Link to="/recovery">Forgot your password?</Link>
        </div>
      </div>
    </div>
  )
}

export default Registration
