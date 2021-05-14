import './styles.scss'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductsStart } from '../../../redux/Products/products.actions'

const mapState = ({ productsData }) => ({
  products: productsData.products,
})

export default function MoreProducts() {
  const dispatch = useDispatch()
  const { filterType } = useParams()
  const { products } = useSelector(mapState)
  const { data } = products

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }))
  }, [filterType])

  if (!Array.isArray(data)) return null
  if (data.length < 1) {
    return (
      <div className="no-network" data-aos="fade">
        <p>Something Went Wrong</p>
      </div>
    )
  }

  return (
    <div className="more-products">
      {data.map((product, key) => {
        const { productThumbnail, productName, documentID } = product
        return (
          <a href={`/product/${documentID}`} key={key}>
            <div className="card">
              <img src={productThumbnail} alt="" />
              <p>{productName}</p>
            </div>
          </a>
        )
      })}
    </div>
  )
}
