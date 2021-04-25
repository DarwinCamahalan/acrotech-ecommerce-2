import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { fetchProductsStart } from './../../redux/Products/products.actions'
import Product from './Product'
import LoadMore from './../LoadMore'
import './styles.scss'

const mapState = ({ productsData }) => ({
  products: productsData.products,
})

const ProductResults = ({}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { filterType } = useParams()
  const { products } = useSelector(mapState)

  const { data, queryDoc, isLastPage } = products

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }))
  }, [filterType])

  if (!Array.isArray(data)) return null
  if (data.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    )
  }

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    )
  }

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  }

  return (
    <div className="products">
      <div className="productResults">
        {data.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product
          if (
            !productThumbnail ||
            !productName ||
            typeof productPrice === 'undefined'
          )
            return null

          const configProduct = {
            ...product,
          }

          return <Product key={pos} {...configProduct} />
        })}
      </div>

      {!isLastPage && <LoadMore {...configLoadMore} />}
    </div>
  )
}

export default ProductResults
