import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// import Button from './../../forms/button'
// import { useDispatch } from 'react-redux'
// import { addProduct } from './../../../redux/Cart/cart.actions'
import './styles.scss'
const Product = (product) => {
  // const dispatch = useDispatch()
  // const history = useHistory()
  const { documentID, productThumbnail, productName, productPrice } = product
  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === 'undefined'
  )
    return null

  // const configAddToCartBtn = {
  //   type: 'button',
  // }

  // const handleAddToCart = (product) => {
  //   if (!product) return
  //   dispatch(addProduct(product))
  //   history.push('/cart')
  // }

  return (
    <Link className="product" to={`/product/${documentID}`}>
      <div className="img">
        <img src={productThumbnail} alt={productName} />
      </div>

      <div className="info">
        <p>{productName}</p>
        {/* <p>{productPrice}</p> */}
      </div>
    </Link>
  )
}

export default Product
