import './styles.scss'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection/index'
import LastSection from './LastSection/index'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import image1 from '../../assets/slide-content/1.jpeg'
import image2 from '../../assets/slide-content/2.jpeg'
import image3 from '../../assets/slide-content/3.jpeg'
import acrotechLogo from '../../assets/acrotech-logo-transparent.png'
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
            <img src={image1} alt={image1} />
            <img src={image2} alt={image2} />
            <img src={image3} alt={image3} />
          </Carousel>
          <div className="content">
            <img src={acrotechLogo} alt={acrotechLogo} />
            <h1>Industrial Sales Corp.</h1>
            <Link to="/products">Order Now</Link>
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
