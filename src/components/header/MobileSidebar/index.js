import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOutUserStart } from '../../../redux/User/user.actions'
import { selectCartItemsCount } from '../../../redux/Cart/cart.selectors'
import './styles.scss'

import { checkUserIsAdmin } from '../../../Utils'

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
})
const MobileSidebar = ({ openMenu, setOpenMenu }) => {
  const [confirm, setConfirm] = useState(false)

  const dispatch = useDispatch()
  const { currentUser } = useSelector(mapState)
  if (currentUser) {
    var { displayName } = currentUser
  }
  const isAdmin = checkUserIsAdmin(currentUser)

  const signOut = () => {
    dispatch(signOutUserStart())
    setOpenMenu(!openMenu)
    setConfirm(!confirm)
    history.push('/')
  }
  const showConfirmation = () => {
    setConfirm(!confirm)
  }

  const close = () => {
    setOpenMenu(!openMenu)
  }
  const history = useHistory()
  return (
    <div>
      {confirm ? (
        <div
          onClick={() => {
            setConfirm(!confirm)
          }}
          className="overlay-logout"
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

      <div className="overlay" onClick={close}>
        <div className="sidebar">
          <div className="x" onClick={close}>
            <div className="x1"></div>
            <div className="x2"></div>
          </div>
          <Link to="/">home</Link>
          <Link to="/products">products </Link>
          <Link to="/about">about us</Link>
          <Link to="/">Announcements</Link>
          <Link to="/contact">Contact Us</Link>
          <div className="menu">
            {currentUser && (
              <>
                <Link onMouseEnter={showConfirmation}>Logout</Link> |{' '}
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
  )
}

export default MobileSidebar
