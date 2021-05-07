import './styles.scss'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import worker from '../../../assets/worker2.png'

const LastSection = ({}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div className="max">
      <section className="last-section" data-aos="fade-down">
        <h1>Contact Us</h1>
        <form action="submit">
          <img src={worker} alt={worker} className="img1" />
          <input type="email" placeholder="From :" />
          <input type="email" placeholder="To :" />
          <input type="email" placeholder="Subject :" />
          <input
            type="text"
            placeholder="Compose Email :"
            className="message"
          />
          <button>Submit</button>
        </form>
      </section>
    </div>
  )
}

export default LastSection
