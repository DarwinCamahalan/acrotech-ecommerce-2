import React from 'react'
import './styles.scss'
import SignIn from './../../components/signin'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (
    <div className="signin">
      <div className="info">
        <h1>Login</h1>
        <hr />
        <p>
          It is necessary to perform User Registration to use My List. <br />
          For the users who have already performed User Registration, enter the
          e-mail address and password to login. <br />
          For new users, perform User Registration to be able to use My List.
        </p>
      </div>

      <div className="container">
        <SignIn />
        <div className="register">
          <h1>New user registration</h1>

          <Link to="/registration">To new registration screen</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
