import React from 'react'
import './styles.scss'
import SignIn from './../../components/signin'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (
    <div className="max">
      <div className="signin">
        <div className="signin-container">
          <SignIn />
          <div className="register">
            <h1>New user registration</h1>

            <Link to="/registration">To new registration screen</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
