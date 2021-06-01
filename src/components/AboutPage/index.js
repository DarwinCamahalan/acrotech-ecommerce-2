import './styles.scss'

import client1 from '../../assets/1.png'
import client2 from '../../assets/2.png'
import client3 from '../../assets/3.jpg'
import brands from '../../assets/brands.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const AboutPage = () => {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  }

  const dummyTxt =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias veniam porro modi quod laborum ducimus facere reprehenderit obcaecati placeat.'

  const Cards = [
    {
      img: `${client1}`,
      name: 'Hannah Sweet G. Pallorina ',
      position: 'Secretary at Acro-Tech Inc.',
      description: `${dummyTxt}`,
    },
    {
      img: `${client2}`,
      name: 'Mamerto A. Regis III',
      position: 'Manager at Acro-Tech Inc.',
      description: `${dummyTxt}`,
    },
    {
      img: `${client3}`,
      name: 'Georgin Asay',
      position: 'Sales Engineer at Acro-Tech Inc.',
      description: `${dummyTxt}`,
    },
  ]
  return (
    <>
      <div className="header-bg-about"></div>
      <div className="about-page">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          swipeable={true}
          autoPlaySpeed={4000}
          className="container"
        >
          {Cards.map((Cards, key) => {
            return (
              <div className="card" key={key}>
                <div className="img">
                  <img src={Cards.img} alt={Cards.img} />
                </div>
                <h1>{Cards.name}</h1>
                <h5>{Cards.position}</h5>
                <p>{Cards.description}</p>
              </div>
            )
          })}
        </Carousel>
        <h3>About Acrotech</h3>
        <p className="about-text">
          <strong>Acro-Tech Industrial Sales Corp. (the “corporation”) </strong>
          is a third-party and a trading company that started on March 16, 2012
          that provides the latest, good and quality products at affordable
          price with their strategic alliance with local and international
          supplier. They are located at Zone 3 – Near Kung Hua School,
          Kauswagan, Cagayan de Oro City.
          <h4>PRODUCT LINES:</h4>
        </p>
        <img src={brands} alt={brands} className="brands" />
      </div>
    </>
  )
}

export default AboutPage
