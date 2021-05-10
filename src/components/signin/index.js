import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import {
  emailSignInStart,
  googleSignInStart,
} from './../../redux/User/user.actions'

import './styles.scss'

import AuthWrapper from './../AuthWrapper'
import FormInput from './../forms/FormInput'

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
})

const SignIn = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { currentUser } = useSelector(mapState)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (currentUser) {
      resetForm()
      history.push('/')
    }
  }, [currentUser])

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(emailSignInStart({ email, password }))
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart())
  }

  const login = (e) => {
    e = e || window.event
    if (e.keyCode == 13) {
      document.getElementById('submit').click()
      return false
    }
    return true
  }
  const showPass = () => {
    const x = document.getElementById('pass')

    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }
  return (
    <>
      <div className="socialSignin">
        <button className="google-btn" onClick={handleGoogleSignIn}>
          <i class="fab fa-google"></i> Login with Google
        </button>

        <div className="separator">
          <span>or Log in with Email</span>
        </div>
      </div>
      <AuthWrapper>
        <div className="formWrap">
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              id="pass"
              value={password}
              placeholder="Password"
              handleChange={(e) => setPassword(e.target.value)}
            />
            <div className="show-pass ">
              <label>
                <input type="checkbox" onClick={showPass} />
                <p>Show Password</p>
                <Link to="/recovery">Forgot Password?</Link>
              </label>
            </div>

            <button
              type="submit"
              id="submit"
              onClick={login}
              className="login-btn"
            >
              Login
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

export default SignIn
