import './styles.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductsStart } from '../../../redux/Products/products.actions'

const mapState = ({ productsData }) => ({
  products: productsData.products,
})

const ThirdSection = ({}) => {
  const [view, setView] = useState(false)
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  const responsive = {
    all: {
      breakpoint: { max: 1360, min: 1120 },
      items: 6,
    },

    medium: {
      breakpoint: { max: 1120, min: 768 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 500 },
      items: 3,
    },
    small: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  }

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
      <div className="products">
        <p>No search results.</p>
      </div>
    )
  }

  const View = () => {
    setView(!view)
  }
  return (
    <section className="third-section" data-aos="fade-up">
      <div className="max">
        <div className="flex">
          <div className="content" onMouseEnter={View} onMouseLeave={View}>
            {view ? (
              <div className="order">
                <Link to="/products">
                  <strong>Order Now</strong>
                </Link>
              </div>
            ) : (
              ''
            )}
            <h1>Our Products</h1>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              swipeable={true}
              autoPlaySpeed={1700}
              removeArrowOnDeviceType={['all', 'medium', 'mobile', 'small']}
            >
              {data.map((product, key) => {
                const { productThumbnail } = product
                return (
                  <div className="card" key={key}>
                    <img src={productThumbnail} alt="" />
                  </div>
                )
              })}
            </Carousel>
            <h1>We also Offers</h1>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              swipeable={true}
              autoPlaySpeed={2000}
              removeArrowOnDeviceType={['all', 'medium', 'mobile', 'small']}
            >
              {data.map((product, key) => {
                const { productThumbnail } = product
                return (
                  <div className="card" key={key}>
                    <img src={productThumbnail} alt="" />
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection
