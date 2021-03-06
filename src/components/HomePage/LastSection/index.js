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

  const Cards = [
    {
      img: `${client1}`,
      name: 'Juan dela Cruz',
      description:
        "I like Acrotech Products, It's durable high quality and reliable at any situation also the design is so good and comforable to use",
    },
    {
      img: `${client2}`,
      name: 'Martin Luther',
      description:
        "I like Acrotech Products, It's durable high quality and reliable at any situation also the design is so good and comforable to use",
    },
    {
      img: `${client3}`,
      name: 'Kyle Joe',
      description:
        "I like Acrotech Products, It's durable high quality and reliable at any situation also the design is so good and comforable to use",
    },
   
  ]
  return (
    <div className="max">
      <section className="last-section" data-aos="fade-up">
        <div className="title">
          <h1>Client Review</h1>
       
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
