import './styles.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import SecondSection from './SecondSection'
import img1 from '../../assets/slide-content/1.jpeg'
import img2 from '../../assets/slide-content/2.jpeg'
import img3 from '../../assets/slide-content/3.jpeg'
import img4 from '../../assets/slide-content/4.jpeg'
import img5 from '../../assets/slide-content/5.jpeg'
import ThirdSection from './ThirdSection/index'
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
          <div className="max">
            <div className="flex">
              <div className="content">
                <div className="info">
                  <h1>ACROTECH INDUSTRIAL SALES CORP.</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore unde praesentium beatae eligendi, molestias, illo in
                    eum cupiditate nesciunt, aperiam doloribus quod ipsum alias
                    suscipit rem laborum corrupti consequuntur ea. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Impedit aut
                    officiis, amet exercitationem quia iure accusamus nisi ea
                    eos. Nulla! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Sint veniam quibusdam dolore temporibus
                    eveniet sed? Nam quisquam deserunt Lorem
                  </p>

                  <Link to="/products">
                    <strong>Order Now</strong>{' '}
                  </Link>
                </div>
              </div>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                swipeable={true}
                removeArrowOnDeviceType={['all']}
                autoPlaySpeed={3000}
                className="slider"
              >
                <img src={img1} alt={img1} />
                <img src={img2} alt={img2} />
                <img src={img3} alt={img3} />
                <img src={img4} alt={img4} />
                <img src={img5} alt={img5} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <SecondSection />
      <ThirdSection />
    </>
  )
}

export default HomePage
