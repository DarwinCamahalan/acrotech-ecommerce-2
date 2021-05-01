import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './styles.scss'
import { checkUserIsAdmin } from '../../../Utils'
import LogoutConfirm from '../LogoutConfirm'

import Arrow from '../../../assets/arrow.png'
const mapState = (state) => ({
  currentUser: state.user.currentUser,
})

const MobileSidebar = ({ openMenu, setOpenMenu }) => {
  const { currentUser } = useSelector(mapState)
  const [confirm, setConfirm] = useState(false)

  if (currentUser) {
    var { displayName } = currentUser
  }
  const isAdmin = checkUserIsAdmin(currentUser)

  const showConfirmation = () => {
    setConfirm(!confirm)
  }
  return (
    <div>
      {confirm ? (
        <LogoutConfirm confirm={confirm} setConfirm={setConfirm} />
      ) : (
        ''
      )}
      {openMenu ? (
        <div>
          <div
            className="overlay-sidebar"
            onClick={() => setOpenMenu(!openMenu)}
          ></div>
          <div className="callToActions">
            <div className="close" onClick={() => setOpenMenu(!openMenu)}>
              <img src={Arrow} alt="close button" />
            </div>
            <Link to="/" onClick={() => setOpenMenu(!openMenu)}>
              home
            </Link>
            <Link to="/products" onClick={() => setOpenMenu(!openMenu)}>
              products
            </Link>
            <Link to="/about" onClick={() => setOpenMenu(!openMenu)}>
              about us
            </Link>
            <Link to="/announcement" onClick={() => setOpenMenu(!openMenu)}>
              Announcements
            </Link>
            <Link to="/contact" onClick={() => setOpenMenu(!openMenu)}>
              Contact Us
            </Link>
            <div className="menu">
              {currentUser && (
                <>
                  <Link onClick={showConfirmation}>Logout</Link> |{' '}
                  {isAdmin && <Link to="/">{displayName}</Link>}
                  {!isAdmin && <Link to="/dashboard">{displayName}</Link>}
                </>
              )}
              {!currentUser && (
                <>
                  <Link to="/login" onClick={() => setOpenMenu(!openMenu)}>
                    Login
                  </Link>{' '}
                  |{' '}
                  <Link
                    to="/registration"
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    register
                  </Link>
                </>
              )}
              <br />
              <span>Locate Us : </span>
              <a
                href="https://www.google.com/maps/place/Acrotect+Industrial+Sales+Corp./@8.4908966,124.6382007,17z/data=!3m1!4b1!4m5!3m4!1s0x32fff31fcf49851f:0xc9263f3b77dfdac0!8m2!3d8.490894!4d124.6403783"
                target="_blank"
                className="locate"
              >
                Google Map
              </a>
              <br />
              <span>CONTACT TEL: </span> +123 4567 8910
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default MobileSidebar
