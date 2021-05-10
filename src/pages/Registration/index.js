import React from 'react'
import './styles.scss'
import Signup from './../../components/Signup'
import { Link } from 'react-router-dom'
import WorkerImage from '../../assets/slide-content/1.jpg'
const Registration = (props) => {
  return (
    <div className="signup">
      <div className="img">
        <img src={WorkerImage} alt={WorkerImage} />
      </div>
      <div className="form">
        <div className="back">
          <Link to="/">
            <i class="fas fa-arrow-left"></i> Back to Homepage
          </Link>
        </div>
        <Signup />
      </div>
    </div>
  )
}

export default Registration
