import React from 'react'
import { useDispatch } from 'react-redux'
import {
  removeCartItem,
  addProduct,
  reduceCartItem,
} from './../../../redux/Cart/cart.actions'

import './styles.scss'
const Item = (product) => {
  const dispatch = useDispatch()
  const { productName, productThumbnail, productPrice, quantity, documentID } =
    product

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID,
      })
    )
  }

  const handleAddProduct = (product) => {
    dispatch(addProduct(product))
  }

  const handleReduceItem = (product) => {
    dispatch(reduceCartItem(product))
  }

  return (
    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td className="name">{productName}</td>
          <td>
            <span className="cartBtn" onClick={() => handleReduceItem(product)}>
              <i class="fas fa-minus"></i>
            </span>
            <span className="quantity">{quantity}</span>
            <span className="cartBtn" onClick={() => handleAddProduct(product)}>
              <i class="fas fa-plus"></i>
            </span>
          </td>

          <td>
            <span
              onClick={() => handleRemoveCartItem(documentID)}
              className="trash"
            >
              <i class="fas fa-trash"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Item
