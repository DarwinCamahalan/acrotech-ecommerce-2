import React, { useEffect } from 'react'
import './styles.scss'
import worker from '../../../assets/worker.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { Link } from 'react-router-dom'
const SecondSection = () => {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  const dummyTxt =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum praesentium id, eius placeat beatae tempora. A tenetur laborum delectus! Cupiditate deleniti, tempore laboriosam, dolor rem adipisci' +
    'repudiandae consectetur labore vitae quod quidem voluptates ipsa officiis at dolores? Natus, aspernatur, ad nam quia hic voluptatum cumque aliquam corrupti atque incidunt repellendus. Lorem ipsum ' +
    'repudiandae consectetur labore vitae quod quidem voluptates ipsa officiis at dolores? Natus, aspernatur, ad nam quia hic voluptatum cumque aliquam corrupti atque incidunt repellendus. Lorem ipsum '

  const Cards = [
    {
      title: 'About Us',
      info: `${dummyTxt}`,
      class: 'black',
      to: '/about',
    },
    {
      title: 'Our Products',
      info: `${dummyTxt}`,
      class: 'red',
      to: '/products',
    },
    {
      title: 'Contact Us',
      info: `${dummyTxt}`,
      class: 'black',
      to: '/contact',
    },
    {
      title: 'Offers',
      info: `${dummyTxt}`,
      class: 'red',
      to: '/about',
    },
  ]
  return (
    <section className="max">
      <div className="second-section">
        <img src={worker} alt={worker} data-aos="fade-right" />
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          swipeable={true}
          autoPlaySpeed={4000}
          removeArrowOnDeviceType={['all']}
          className="content"
        >
          {Cards.map((Cards, key) => {
            return (
              <div key={key} data-aos="fade-right">
                <div className={Cards.class}>
                  <h1>{Cards.title}</h1>
                  <p>{Cards.info}</p>
                  <Link to={Cards.to}>
                    Explore Now <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}

export default SecondSection
