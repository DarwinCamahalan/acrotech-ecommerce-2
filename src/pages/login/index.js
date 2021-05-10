import React from 'react'
import './styles.scss'
import SignIn from './../../components/signin'
import { Link } from 'react-router-dom'
import WorkerImage from '../../assets/slide-content/1.jpg'
const Login = (props) => {
  return (
    <div className="signin">
      <div className="img">
        <img src={WorkerImage} alt={WorkerImage} />
      </div>
      <div className="form">
        <div className="back">
          <Link to="/">
            <i class="fas fa-arrow-left"></i> Back to Homepage
          </Link>
        </div>
        <SignIn />
      </div>
    </div>
  )
}

export default Login
