import React from 'react'
import './styles.scss'
import Signup from './../../components/Signup'
import { Link } from 'react-router-dom'
import WorkerImage from '../../assets/slide-content/1.jpg'
const Registration = (props) => {
  return (
    <div className="max">
      <div className="signup">
        <div className="img">
          <img src={WorkerImage} alt={WorkerImage} />
        </div>
        <div className="form">
          <Signup />
        </div>
      </div>
    </div>
  )
}

export default Registration
