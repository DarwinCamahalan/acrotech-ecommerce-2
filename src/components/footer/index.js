import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import Logo from './../../assets/acrotech-logo-compress.png'
const Footer = (props) => {
  return (
    <footer className="footer">
      <img src={Logo} alt="acrotech logo" />
      <div className="site-map">
        <p style={{ marginTop: '15px' }}>+</p>
        <p>Sitemap</p>
      </div>
      <section className="links">
        <div className="categories">
          <p>About Us</p>
          <Link>Corporate Overview</Link>
          <Link>MD’s Message</Link>
          <Link>SMC Singapore</Link>
          <Link>SMC United Arab Emirates</Link>
          <Link>SMC Malaysia</Link>
          <Link>SMC Vietnam</Link>
          <Link>SMC Indonesia</Link>
          <Link>SMC Philippines</Link>
          <Link>Other Regions We Serve</Link>
          <Link>SMC Corporation Japan</Link>
          <Link>Global Sales Network</Link>
          <Link>Global Engineering Network</Link>
        </div>
        <div className="categories">
          <p>Strategic Products</p>
          <Link>2 Port Valve</Link>
          <Link>Air Dryer</Link>
          <Link>Chiller</Link>
          <Link>Electric Actuators</Link>
          <Link>Process Gas Equipment</Link>
          <Link>Training Equipment</Link>
          <p>Products</p>
          <Link>All Products</Link>
          <Link>New Products</Link>
          <Link>Specialized Products for General Use</Link>
          <Link>Discontinued Products</Link>
          <Link>News & Events</Link>
        </div>
        <div className="categories">
          <p>Services</p>
          <Link>2 Port Valve</Link>
          <Link>Air Dryer</Link>
          <Link>Chiller</Link>
          <Link>Electric Actuators</Link>
          <Link>Process Gas Equipment</Link>
          <Link>Training Equipment</Link>
          <p>Products</p>
          <Link>All Products</Link>
          <Link>New Products</Link>
          <Link>Specialized Products for General Use</Link>
          <Link>Discontinued Products</Link>
          <Link>News & Events</Link>
        </div>
        <div className="categories">
          <p>Support</p>
          <Link>2 Port Valve</Link>
          <Link>Air Dryer</Link>
          <Link>Chiller</Link>
          <Link>Electric Actuators</Link>
          <Link>Process Gas Equipment</Link>
          <Link>Training Equipment</Link>
          <p>Products</p>
          <Link>All Products</Link>
          <Link>New Products</Link>
          <Link>Specialized Products for General Use</Link>
          <Link>Discontinued Products</Link>
          <Link>News & Events</Link>
        </div>
      </section>
      <section className="about">
        <h5>About Acrotech Sales Industrial Corp.</h5>
        <p>
          Shoketsu SMC Corporation is a 100% subsidiary of SMC Corporation, the
          world’s largest pneumatic automation products manufacturer which was
          established in Japan and now has more than 50 years of experience.
        </p>
        <p>
          The Philippine subsidiary was established in 2003 and its headquarters
          is located at Lot 9E First Philippine Industrial Park II (FPIP II)
          Sto. Tomas Batangas with-five local distributors all over the country.
          While production facility is provided to produce customized cylinders,
          the main objective is to offer a wide range of high quality advanced
          pneumatic automation products to suit the exacting needs of industries
          from a myriad of fields and sectors, including semiconductor,
          automotive, medical, and petrochemical, just to name a few. Products
          offered range from valves like process valve and water valve, to
          thermo equipment like thermo chiller and heat exchanger to air dryers
          and a variety of static eliminators and pneumatic systems.
        </p>
        <p>
          Striving to maintain high standards not only in products but also in
          customer service, Shoketsu SMC Corporation works hard to ensure that
          existing machines in the Philippines containing SMC products installed
          are readily supported with technical assistance, and with reasonable
          quantity of spare parts, in stores stocked with around 15,000 product
          variations.
        </p>
        <p>
          The company also provides technology updates by offering technical
          seminars, and projects to help customers increase their productivity.
        </p>
      </section>
    </footer>
  )
}

export default Footer
