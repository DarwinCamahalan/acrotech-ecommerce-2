import React, { useEffect } from 'react'
import './styles.scss'
import worker from '../../../assets/worker.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
const SecondSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <section className="max">
      <div className="second-section">
        <div data-aos="fade-right" className="img">
          <img src={worker} alt={worker} />
        </div>
        <div data-aos="fade-right" className="content">
          <h1>Acrotech Best Offers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam
            at placeat maxime asperiores aperiam corrupti! Voluptatem sunt non
            tempore ducimus dolorum suscipit mollitia quaerat aliquid magnam
            consequatur itaque quae incidunt, deleniti assumenda similique autem
            inventore unde officia ex. In quia nostrum repellat ullam
            consectetur voluptates ipsum blanditiis, nisi eos. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Et ducimus quasi unde
            voluptate, corrupti corporis possimus porro numquam! Nesciunt,
            temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut, repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Cupiditate minus aliquam consequuntur eveniet architecto.
            Laborum numquam molestias nulla laboriosam quasi!
          </p>

          <Link to="/announcement" data-aos="fade-top">
            <strong>Learn More</strong>{' '}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SecondSection
