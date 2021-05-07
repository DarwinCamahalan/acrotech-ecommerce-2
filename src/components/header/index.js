import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './styles.scss'
import Logo from './../../assets/acrotech-logo-compress.png'
import { checkUserIsAdmin } from '../../Utils'
import MobileSidebar from './MobileSidebar/index'
import LogoutConfirm from './LogoutConfirm'

const mapState = (state) => ({
  currentUser: state.user.currentUser,
})

const Header = (props) => {
  const { currentUser } = useSelector(mapState)
  const [confirm, setConfirm] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  if (currentUser) {
    var { displayName } = currentUser
  }
  const isAdmin = checkUserIsAdmin(currentUser)

  const showConfirmation = () => {
    document.body.style.overflow = 'hidden'
    setConfirm(!confirm)
  }
  return (
    <header className="header">
      {confirm ? (
        <LogoutConfirm confirm={confirm} setConfirm={setConfirm} />
      ) : (
        ''
      )}
      <div
        className="mobile-menu"
        onClick={() => {
          document.body.style.overflow = 'hidden'
          setOpenMenu(!openMenu)
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="mobile-sidebar">
        {openMenu ? (
          <MobileSidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        ) : (
          <> </>
        )}
      </div>
      <div className="max">
        <div className="wrap">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Acrotech Logo" />
            </Link>
          </div>
          {isAdmin && (
            <Link to="/admin" className="admin-settings">
              Admin Settings
            </Link>
          )}

          <div className="callToActions">
            <Link to="/">home</Link>
            <Link to="/products">products </Link>
            <Link to="/about">about us</Link>
            <Link to="/announcement">Announcements</Link>
            <Link to="/contact">Contact Us</Link>
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
                  <Link to="/login">Login</Link> |{' '}
                  <Link to="/registration">register</Link>
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
      </div>
    </header>
  )
}

Header.defaultProps = {
  currentUser: null,
}

export default Header
