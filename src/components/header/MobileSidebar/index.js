import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './styles.scss'
import { checkUserIsAdmin } from '../../../Utils'
import LogoutConfirm from '../LogoutConfirm'

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
    document.body.style.overflow = 'hidden'
    setConfirm(!confirm)
  }

  const openSidebar = () => {
    document.body.style.overflow = 'unset'
    setOpenMenu(!openMenu)
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
          <div className="overlay-sidebar"></div>
          <div className="callToActions">
            <div className="exit" onClick={openSidebar}>
              <div className="right"></div>
              <div className="left"></div>
            </div>
            <Link to="/" onClick={openSidebar}>
              home
            </Link>
            <Link to="/products" onClick={openSidebar}>
              products
            </Link>
            <Link to="/about" onClick={openSidebar}>
              about us
            </Link>

            <Link to="/contact" onClick={openSidebar}>
              Contact Us
            </Link>
            {currentUser && (
              <>
                {isAdmin && (
                  <Link to="/admin" className="admin-settings">
                    Admin Settings
                  </Link>
                )}

                {!isAdmin && <Link to="/dashboard">{displayName}</Link>}
                <Link onClick={showConfirmation}>Logout</Link>
              </>
            )}
            {!currentUser && (
              <>
                <Link to="/login" onClick={openSidebar}>
                  Login
                </Link>

                <a href="tel:+123-456-789" className="tel">
                  <i class="fas fa-phone-alt"> </i> 123-456-789
                </a>
              </>
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default MobileSidebar
