import './styles.scss'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection/index'
import LastSection from './LastSection/index'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import image1 from '../../assets/slide-content/1.jpg'
import image2 from '../../assets/slide-content/2.jpeg'
import image3 from '../../assets/slide-content/3.jpeg'

import { Link } from 'react-router-dom'

const HomePage = () => {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <div className="home-container">
        <div className="slider-container">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            swipeable={true}
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={['all']}
            className="slider"
          >
            <img src={image2} alt={image2} />
            <img src={image1} alt={image1} />
            <img src={image3} alt={image3} />
          </Carousel>
          <div className="content">
            <h1>Best & High Quality Industrial Products </h1>
            <Link to="/products">
              Order Now <i class="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <SecondSection />
      <ThirdSection />
      <LastSection />
    </>
  )
}

export default HomePage
