import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { fetchProductsStart } from './../../redux/Products/products.actions'
import Product from './Product'
import LoadMore from './../LoadMore'
import './styles.scss'

import worker from '../../assets/slide-content/1.jpg'
const mapState = ({ productsData }) => ({
  products: productsData.products,
})

const ProductResults = ({}) => {
  const [searchResult, setSearchResult] = useState('')
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
      <div className="no-network-products">
        <p>Something Went Wrong</p>
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
    searchResult: searchResult,
  }
  const onChangeHandler = (event) => {
    setSearchResult(event.target.value)
  }
  return (
    <div className="max">
      <div className="hero">
        <img src={worker} alt={worker} />
        <div className="input">
          <input
            type="text"
            placeholder="Search Products..."
            onChange={onChangeHandler}
            value={searchResult}
          />
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div className="products-page ">
        <div className="products-container">
          {data
            .filter((product) => {
              const { productName, productPrice } = product
              if (searchResult == '') {
                return product
              } else if (
                productName
                  .toLowerCase()
                  .includes(searchResult.toLowerCase()) ||
                productPrice.includes(searchResult)
              ) {
                return product
              }
            })
            .map((product, pos) => {
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

          {!isLastPage && <LoadMore {...configLoadMore} className="btn" />}
        </div>
      </div>
    </div>
  )
}

export default ProductResults
