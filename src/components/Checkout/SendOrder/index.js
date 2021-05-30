import './styles.scss'
import emailjs from 'emailjs-com'

import {
  selectCartTotal,
  selectCartItemsCount,
  selectCartItems,
} from '../../../redux/Cart/cart.selectors'

import { createStructuredSelector } from 'reselect'
import { useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'

const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems,
})

const useState = (state) => ({
  currentUser: state.user.currentUser,
})

export const SendOrder = () => {
  const history = useHistory()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_e1jzkx3',
        'template_nblt8ia',
        e.target,
        'user_wC0X1OMRPWvT0Rc402HN5'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    document.body.style.overflow = 'hidden'
    document.querySelector('.prompt-order').style.display = 'block'
    setTimeout(() => {
      document.body.style.overflow = 'unset'
      document.querySelector('.prompt-order').style.display = 'none'
      history.push('/')
    }, 3000)
  }

  const { total, itemCount, cartItems } = useSelector(mapState)
  const { currentUser } = useSelector(useState)
  if (currentUser) {
    var { displayName } = currentUser
  }
  return (
    <>
      <div className="header-black-bg"></div>
      <div className="prompt-order">
        <div className="show">
          <h3>
            Order Sucessfully Sent <i class="fas fa-check-circle"></i>
          </h3>
          <img src="https://i.gifer.com/ZKZg.gif" alt="spinner" />
          <p>Redirecting to Home Page... </p>
        </div>
      </div>
      <div className="order-page">
        <form onSubmit={sendEmail}>
          <h1>Contact Information</h1>
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            value={displayName}
            readonly="true"
          />
          <label>Address</label>
          <input type="text" name="address" required />
          <label>Contact Number</label>
          <input className="number" type="number" name="number" required />
          <h1>Ordered Products</h1>
          <div className="labels">
            <span>Product Name</span>
            <span>Quantity</span>
          </div>

          {cartItems.map((item) => {
            const { productName, productPrice, quantity } = item
            return (
              <>
                <div className="display">
                  <span>{productName}</span>
                  <span>{quantity}</span>
                </div>
                <div className="hide">
                  <textarea name="product" id="" readonly="true">
                    {productName}
                  </textarea>
                  <textarea name="quantity" id="" readonly="true">
                    {quantity}
                  </textarea>
                </div>
              </>
            )
          })}
          <input type="submit" value="Send Order" className="send-btn" />
        </form>
      </div>
    </>
  )
}
