import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { signUpUserStart } from './../../redux/User/user.actions'
import './styles.scss'

import AuthWrapper from './../AuthWrapper'
import FormInput from './../forms/FormInput'
import Button from './../forms/button'

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
})

const Signup = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { currentUser, userErr } = useSelector(mapState)
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState([])

  useEffect(() => {
    if (currentUser) {
      reset()
      history.push('/')
    }
  }, [currentUser])

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr)
    }
  }, [userErr])

  const reset = () => {
    setDisplayName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setErrors([])
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    dispatch(
      signUpUserStart({
        displayName,
        email,
        password,
        confirmPassword,
      })
    )
  }

  const register = (e) => {
    e = e || window.event
    if (e.keyCode == 13) {
      document.getElementById('submit').click()
      return false
    }
    return true
  }
  const showPass = () => {
    const pass1 = document.getElementById('pass1')
    const pass2 = document.getElementById('pass2')

    if (pass1.type === 'password' && pass2.type === 'password') {
      pass1.type = 'text'
      pass2.type = 'text'
    } else {
      pass1.type = 'password'
      pass2.type = 'password'
    }
  }
  return (
    <AuthWrapper>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>
            })}
          </ul>
        )}

        <form onSubmit={handleFormSubmit}>
          <FormInput
            label="Full Name"
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={(e) => setDisplayName(e.target.value)}
          />

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
            id="pass1"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            id="pass2"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="show-pass ">
            <label>
              <input type="checkbox" onClick={showPass} />
              <p>Show Password</p>
            </label>
          </div>
          <button
            className="signup-btn"
            type="submit"
            id="submit"
            onClick={register}
          >
            Signup
          </button>
        </form>

        <div className="links">
          <span> Already have account?</span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </AuthWrapper>
  )
}

export default Signup
