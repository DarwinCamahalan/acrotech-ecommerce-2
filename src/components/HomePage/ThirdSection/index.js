import './styles.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { Link } from 'react-router-dom'
import worker2 from '../../../assets/worker2.png'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductsStart } from '../../../redux/Products/products.actions'

import acrotechLogo from '../../../assets/acrotech-logo-transparent.png'
import bg from '../../../assets/bg.png'

const mapState = ({ productsData }) => ({
  products: productsData.products,
})

const ThirdSection = ({}) => {
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
      <div className="no-network" data-aos="fade">
        <p>Something Went Wrong</p>
      </div>
    )
  }

  return (
    <section className="third-section" data-aos="fade">
      <div className="max">
        <div className="flex">
          <img src={bg} alt={bg} className="bg" />
          <div className="title">
            <img src={acrotechLogo} alt={acrotechLogo} />
            <p>Products</p>
          </div>
          <div className="content">
            <img
              src={worker2}
              alt={worker2}
              className="img"
              data-aos="fade-right"
            />
            <p>Our Products</p>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              swipeable={true}
              autoPlaySpeed={1700}
              removeArrowOnDeviceType={['all', 'medium', 'mobile', 'small']}
            >
              {data.map((product, key) => {
                const { productThumbnail, productName, documentID } = product
                return (
                  <Link to={`/product/${documentID}`} key={key}>
                    <div className="card">
                      <img src={productThumbnail} alt="" />
                      <p>{productName}</p>
                    </div>
                  </Link>
                )
              })}
            </Carousel>
            <p>We also Offers</p>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              swipeable={true}
              autoPlaySpeed={2000}
              removeArrowOnDeviceType={['all', 'medium', 'mobile', 'small']}
            >
              {data.map((product, key) => {
                const { productThumbnail, productName, documentID } = product
                return (
                  <Link to={`/product/${documentID}`} key={key}>
                    <div className="card">
                      <img src={productThumbnail} alt="" />
                      <p>{productName}</p>
                    </div>
                  </Link>
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
