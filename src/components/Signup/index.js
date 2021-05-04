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

  const configAuthWrapper = {
    headline: 'Registration',
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
    const x = document.querySelector('.pass')
    const y = document.querySelector('.confirm-pass')

    if (x.type === 'password' && y.type === 'password') {
      x.type = 'text'
      y.type = 'text'
    } else {
      x.type = 'password'
      y.type = 'password'
    }
  }
  return (
    <AuthWrapper {...configAuthWrapper}>
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
            label="Full name"
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={(e) => setDisplayName(e.target.value)}
          />

          <FormInput
            label="E-mail address"
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
            className="pass"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            className="confirm-pass"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="show-pass" onClick={showPass}>
            <label>
              <input type="checkbox" />
              <p> Show Password </p>
            </label>
          </div>
          <Button type="submit" id="submit" onClick={register}>
            Register
          </Button>
        </form>

        <div className="links">
          <Link to="/login">Already have account?</Link>
        </div>
      </div>
    </AuthWrapper>
  )
}

export default Signup
