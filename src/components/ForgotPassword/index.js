import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import {
  resetPasswordStart,
  resetUserState,
} from '../../redux/User/user.actions'
import './styles.scss'

import AuthWrapper from '../AuthWrapper'
import FormInput from '../forms/FormInput'
import { googleSignInStart } from './../../redux/User/user.actions'

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr,
})

const ForgotPassword = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { resetPasswordSuccess, userErr } = useSelector(mapState)
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState())
      history.push('/login')
    }
  }, [resetPasswordSuccess])

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr)
    }
  }, [userErr])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(resetPasswordStart({ email }))
  }

  const sendEmail = (e) => {
    e = e || window.event
    if (e.keyCode == 13) {
      document.getElementById('submit').click()
      return false
    }
    return true
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart())
  }
  return (
    <>
      <div className="socialSignin">
        <button className="google-btn" onClick={handleGoogleSignIn}>
          <i class="fab fa-google"></i> Login with Google
        </button>

        <div className="separator">
          <span>or Recover Account</span>
        </div>
      </div>
      <AuthWrapper>
        <div className="formWrap">
          {errors.length > 0 && (
            <ul>
              {errors.map((e, index) => {
                return <li key={index}>{e}</li>
              })}
            </ul>
          )}

          <form onSubmit={handleSubmit}>
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="recovery-btn"
              type="submit"
              id="submit"
              onClick={sendEmail}
            >
              Send Code
            </button>
          </form>
        </div>
      </AuthWrapper>
      <div className="create-acc">
        Not Registered Yet?
        <Link to="/signup">Create an Account</Link>
      </div>
    </>
  )
}

export default ForgotPassword
