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
import Button from './../forms/button'

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

  const configAuthWrapper = {
    headline: 'Already registered users',
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
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
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
            id="pass"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <div className="show-pass " onClick={showPass}>
            <input type="checkbox" className="checkPass" />
            <p>Show Password</p>
          </div>

          <Button type="submit" id="submit" onClick={login}>
            Login
          </Button>
          <div className="socialSignin">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  )
}

export default SignIn
