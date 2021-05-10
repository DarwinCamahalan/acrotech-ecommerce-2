import React from 'react'
import './styles.scss'
import ForgotPassword from './../../components/ForgotPassword'
import { Link } from 'react-router-dom'
import WorkerImage from '../../assets/slide-content/1.jpg'

const Recovery = (props) => {
  return (
    <div className="recovery">
      <div className="img">
        <img src={WorkerImage} alt={WorkerImage} />
      </div>
      <div className="form">
        <div className="back">
          <Link to="/">
            <i class="fas fa-arrow-left"></i> Back to Homepage
          </Link>
        </div>
        <ForgotPassword />
      </div>
    </div>
  )
}

export default Recovery
