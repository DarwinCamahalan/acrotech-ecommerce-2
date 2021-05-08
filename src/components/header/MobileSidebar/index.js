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
          <div className="overlay-sidebar" onClick={openSidebar}></div>
          <div className="callToActions">
            <i class="fas fa-arrow-left" onClick={openSidebar}></i>
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
                  <Link to="/login" onClick={openSidebar}>
                    Login
                  </Link>{' '}
                  |{' '}
                  <Link to="/registration" onClick={openSidebar}>
                    register
                  </Link>
                </>
              )}
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
