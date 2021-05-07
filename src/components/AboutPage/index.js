import './styles.scss'
import ClientImage from '../../assets/test.jpg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
const AboutPage = () => {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  }

  const dummyTxt =
    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi voluptatum accusantium ab minus. Iure consectetur,'

  const Client = [
    {
      name: 'Jericho Cruz',
      img: `${ClientImage}`,
      info: `${dummyTxt}`,
    },
    {
      name: 'Jericho Cruz',
      img: `${ClientImage}`,
      info: `${dummyTxt}`,
    },
    {
      name: 'Jericho Cruz',
      img: `${ClientImage}`,
      info: `${dummyTxt}`,
    },
  ]
  return (
    <div className="max">
      <div className="testimonials">
        <div className="content">
          <div className="title">
            <h1>About Us</h1>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
              aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis modi voluptatum accusantium ab minus. Iure
              consectetur,
            </p>
          </div>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            swipeable={true}
            autoPlaySpeed={4000}
            className="container"
          >
            {Client.map((Client, key) => {
              return (
                <div className="card" key={key}>
                  <div className="client-image">
                    <img src={Client.img} alt={Client.img} />
                  </div>

                  <div className="info">
                    <h5>{Client.name}</h5>
                    <p>{Client.info}</p>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
