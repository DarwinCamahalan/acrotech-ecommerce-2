import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './styles.scss'
import Logo from './../../assets/acrotech-logo.png'
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
    setOpenMenu(!openMenu)
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

          <div className="callToActions">
            <Link to="/">home</Link>
            <Link to="/products">products </Link>
            <Link to="/about">about us</Link>
            <Link to="/contact">Contact Us</Link>
            <div className="menu">
              {currentUser && (
                <>
                  <Link
                    className="user-name"
                    onClick={() => {
                      setOpenMenu(!openMenu)
                    }}
                  >
                    {displayName}
                    <i class="fas fa-sort-down"></i>
                    {openMenu ? (
                      <div
                        className="user-menu"
                        onMouseLeave={() => {
                          setOpenMenu(!openMenu)
                        }}
                      >
                        {isAdmin ? (
                          <Link to="/admin" className="settings">
                            Admin Settings
                          </Link>
                        ) : (
                          <Link to="/dashboard" className="settings">
                            My Orders     
                          </Link>
                        )}

                        <Link onClick={showConfirmation}>Logout</Link>
                      </div>
                    ) : (
                      ''
                    )}
                  </Link>
                </>
              )}

              {!currentUser && (
                <>
                  <Link to="/login">
                    <span>Log In</span> <i class="fas fa-arrow-right"></i>
                  </Link>
                </>
              )}
              <br />
            </div>
            <div className="number">
              <i class="fas fa-phone-alt"> </i>
              <a href="tel:+123-456-789" className="tel">
                123-456-789
              </a>
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
