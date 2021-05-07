import React from 'react'
import './styles.scss'

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="btn" {...otherProps} type="button" autofocus>
      {children}
    </button>
  )
}

export default Button
