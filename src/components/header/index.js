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
          <Link to="/">home</Link>
          <Link to="/login">about us</Link>
          <Link to="/products">products & services</Link>
          <Link to="/admin">support</Link>
          <Link to="/" onClick={signOut}>
            news & events
          </Link>
          <div className="menu">
            <span>Home</span> |
            <select id="region">
              <option value="Select Your Region">Select Your Region</option>
              <option value="Philippines">Philippines</option>
            </select>
            <br />
            <span>Locate Us</span> | <span>Costumer Enquiry Portal (CEP)</span>
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
