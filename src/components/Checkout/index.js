import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from './../../redux/Cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import './styles.scss'
import Button from './../forms/button'
import Item from './Item'

import empty from '../../assets/empty.gif'
const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

const Checkout = ({}) => {
  const history = useHistory()
  const { cartItems, total } = useSelector(mapState)

  const errMsg = 'No Orders Available'

  return (
    <>
      <div className="header-black-bg"></div>
      <div className="checkout">
        <div className="cart">
          {cartItems.length > 0 ? (
            <table border="0" cellPadding="0" cellSpacing="0">
              <h1>My Orders</h1>
              <tbody>
                <tr>
                  <td>
                    <table
                      className="checkoutHeader"
                      border="0"
                      cellPadding="10"
                      cellSpacing="0"
                    >
                      <tbody>
                        <tr>
                          <th>Product Image</th>
                          <th>Product Name</th>
                          <th>Quantity</th>
                          <th>Remove</th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table border="0" cellSpacing="0" cellPadding="0">
                      <tbody>
                        {cartItems.map((item, pos) => {
                          return (
                            <tr key={pos}>
                              <td>
                                <Item {...item} />
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table border="0" cellSpacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <td>
                            <table border="0" cellPadding="10" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td>
                                    <Button onClick={() => history.goBack()}>
                                      Continue Ordering
                                    </Button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className="no-order">
              {errMsg}
              <img src={empty} alt={empty} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Checkout
