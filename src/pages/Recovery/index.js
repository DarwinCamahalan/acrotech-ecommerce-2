import React from 'react'
import ForgotPassword from './../../components/ForgotPassword'
import { Link } from 'react-router-dom'
import './styles.scss'
const Recovery = (props) => {
  return (
    <div className="recovery">
      <div className="info">
        <h1>Recovery</h1>
        <hr />
        <div className="hint">Forgot your password?</div>
        <p>
          If your have forgotten your password, fill in the following form. A
          password will be sent to the registered e-mail address.
        </p>
      </div>

      <div className="container">
        <ForgotPassword />
        <div className="login-register">
          <h1>Login & Registration</h1>

          <Link to="/registration" style={{ marginTop: '20px' }}>
            To new registration screen
          </Link>
          <Link to="/login">To login screen</Link>
        </div>
      </div>
    </div>
  )
}

export default Recovery
