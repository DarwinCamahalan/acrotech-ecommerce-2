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
    <div className="product">
      <div className="img">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>

      <div className="info">
        <Link to={`/product/${documentID}`}>
          <p>{productName}</p>
          <p>{productPrice}</p>
        </Link>
      </div>
    </div>
  )
}

export default Product
