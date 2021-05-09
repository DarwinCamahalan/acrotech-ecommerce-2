import React from 'react'
import './styles.scss'
import ForgotPassword from './../../components/ForgotPassword'
import { Link } from 'react-router-dom'
import WorkerImage from '../../assets/slide-content/1.jpg'

const Recovery = (props) => {
  return (
    <div className="max">
      <div className="recovery">
        <div className="img">
          <img src={WorkerImage} alt={WorkerImage} />
        </div>
        <div className="form">
          <ForgotPassword />
        </div>
      </div>
    </div>
  )
}

export default Recovery
