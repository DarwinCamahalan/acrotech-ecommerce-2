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
  }

  useEffect(() => {
    setActiveMenu(false)
  }, [location])

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Acrotech Logo" />
          </Link>
        </div>

        <div className="callToActions">
          {!currentUser && [
            <Link to="/login">
              <p style={{ marginTop: '19px', marginLeft: '20px' }}> Login</p>
            </Link>,
          ]}
          <div className="menu">
            {currentUser && [
              <p style={{ marginBottom: '5px' }}> {displayName}</p>,

              <span>
                {isAdmin ? (
                  <Link to="/admin" style={{ color: '#ff0000' }}>
                    Admin Settings
                  </Link>
                ) : (
                  <Link to="/">
                    <span>My Page</span>
                  </Link>
                )}
              </span>,
              <span style={{ color: '#000' }}> | </span>,
              <Link>
                <span onClick={() => signOut()}>Logout</span>
              </Link>,
            ]}
          </div>
        </div>
      </div>

      <div className="second-header">
        <Link to="/">HOME</Link>
        <Link to="/">Product Information</Link>
        <Link to="/">About Acrotech</Link>
        <Link to="/">Support / Contact Us</Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  currentUser: null,
}

export default Header
