import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOutUserStart } from '../../redux/User/user.actions'
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors'
import './styles.scss'

import Logo from './../../assets/acrotech-logo-compress.png'

import { checkUserIsAdmin } from '../../Utils'

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
})

const Header = (props) => {
  const [confirm, setConfirm] = useState(false)
  const location = useLocation()

  const [activeMenu, setActiveMenu] = useState(false)
  const dispatch = useDispatch()
  const { currentUser, totalNumCartItems } = useSelector(mapState)
  if (currentUser) {
    var { displayName } = currentUser
  }
  const isAdmin = checkUserIsAdmin(currentUser)

  const signOut = () => {
    dispatch(signOutUserStart())
    setConfirm(!confirm)
  }
  const showConfirmation = () => {
    setConfirm(!confirm)
  }
  useEffect(() => {
    setActiveMenu(false)
  }, [location])

  return (
    <header className="header">
      {confirm ? (
        <div
          onClick={() => {
            setConfirm(!confirm)
          }}
          className="overlay"
        >
          <div className="confirmation">
            <p>Log out</p>
            <h6>You will be returned to the home page.</h6>
            <hr />
            <div className="options">
              <a
                onClick={() => {
                  setConfirm(!confirm)
                }}
              >
                Cancel
              </a>

              <a onClick={signOut} style={{ borderLeft: '1px solid #dad8d8' }}>
                Log out
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="mobile-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>

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
          <Link to="/">Announcements</Link>
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
    </header>
  )
}

Header.defaultProps = {
  currentUser: null,
}

export default Header
