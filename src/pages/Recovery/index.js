import React from 'react'
import ForgotPassword from './../../components/ForgotPassword'
import { Link } from 'react-router-dom'
import './styles.scss'
const Recovery = (props) => {
  return (
    <div className="max">
      <div className="recovery">
        <div className="recovery-container">
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
    </div>
  )
}

export default Recovery
