import React, { useState, useEffect } from 'react'
import './styles.scss'
import AnnouncementImage from '../../../assets/announcement.png'
import { Link } from 'react-router-dom'
const Popup = () => {
  const [popupStart, setPopupStart] = useState()
  useEffect(() => {
    setPopupStart(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeOverlay = () => {
    document.body.style.overflow = 'unset'
    setPopupStart(!popupStart)
  }
  return (
    <div>
      {popupStart && (
        <div className="overlay-close" onClick={closeOverlay}></div>
      )}
      {popupStart ? (
        <div className="announcement">
          <div className="close" onClick={closeOverlay}>
            X
          </div>
          <Link to="/announcement">
            <img
              src={AnnouncementImage}
              alt={AnnouncementImage}
              onClick={closeOverlay}
            />
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Popup
