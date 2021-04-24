import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './styles.scss'
const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <Carousel
          showArrows={false}
          autoPlay
          interval="2500"
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
          infiniteLoop={true}
        >
          <div>
            <img src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?cs=srgb&dl=pexels-bidvine-1249611.jpg&fm=jpg" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg?cs=srgb&dl=pexels-skitterphoto-38070.jpg&fm=jpg" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?cs=srgb&dl=pexels-photomix-company-224924.jpg&fm=jpg" />
          </div>

          <div>
            <img src="https://images.pexels.com/photos/4641061/pexels-photo-4641061.jpeg?cs=srgb&dl=pexels-igovar-4641061.jpg&fm=jpg" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?cs=srgb&dl=pexels-burst-544966.jpg&fm=jpg" />
          </div>
        </Carousel>
      </div>
      <div className="search">
        <div className="search-bar">
          <input type="text" placeholder="Enter product name" />
          <button>
            <strong>Search</strong>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slider
