import React, { Component } from 'react'
import Signup from './../../components/Signup'
import './styles.scss'
import { Link } from 'react-router-dom'
const Registration = (props) => {
  return (
    <div className="max">
      <div className="signup">
        <div className="registration-container">
          <Signup />
          <div className="register">
            <h1>Recover Account</h1>

            <Link to="/recovery">Forgot your password?</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
