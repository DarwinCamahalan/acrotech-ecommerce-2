import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProductStart,
  setProduct,
} from './../../redux/Products/products.actions'
import { addProduct } from './../../redux/Cart/cart.actions'
import './styles.scss'
import worker from '../../assets/slide-content/1.jpg'

const mapState = (state) => ({
  product: state.productsData.product,
})

const ProductCard = ({}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { productID } = useParams()
  const { product } = useSelector(mapState)

  const { productThumbnail, productName, productPrice, productDesc } = product

  useEffect(() => {
    dispatch(fetchProductStart(productID))

    return () => {
      dispatch(setProduct({}))
    }
  }, [])

  const handleAddToCart = (product) => {
    if (!product) return
    dispatch(addProduct(product))
    history.push('/cart')
  }

  const configAddToCartBtn = {
    type: 'button',
  }

  return (
    <>
      <div className="img-product">
        <img src={worker} alt={worker} />
      </div>
      <div className="max">
        <div className="productCard">
          <div className="product-img">
            <img src={productThumbnail} />
          </div>
          <div className="productDetails">
            <ul>
              <li>
                <h1>{productName}</h1>
              </li>
              {/* <li>
              <span>₱{productPrice}</span>
            </li> */}
              <li>
                <div className="addToCart">
                  <button
                    {...configAddToCartBtn}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Order
                  </button>
                </div>
              </li>
              <li className="desc">
                <span dangerouslySetInnerHTML={{ __html: productDesc }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
