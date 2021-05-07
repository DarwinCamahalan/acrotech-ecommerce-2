import './styles.scss'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const LastSection = ({}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div className="max">
      <section className="last-section" data-aos="fade-down">
        Being Built 🚧
      </section>
    </div>
  )
}

export default LastSection
