import './styles.scss'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import client1 from '../../../assets/client1.jpg'
import client2 from '../../../assets/client2.jpg'
import client3 from '../../../assets/client3.jpg'

const LastSection = ({}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

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
      name: 'Jericho Cruz',
      description: `${dummyTxt}`,
    },
    {
      img: `${client2}`,
      name: 'Jericho Cruz',
      description: `${dummyTxt}`,
    },
    {
      img: `${client3}`,
      name: 'Jericho Cruz',
      description: `${dummyTxt}`,
    },
    {
      img: `${client2}`,
      name: 'Jericho Cruz',
      description: `${dummyTxt}`,
    },
  ]
  return (
    <div className="max">
      <section className="last-section" data-aos="fade-up">
        <div className="title">
          <h1>Testimonials</h1>
        </div>

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
                <p>{Cards.description}</p>
              </div>
            )
          })}
        </Carousel>
      </section>
    </div>
  )
}

export default LastSection