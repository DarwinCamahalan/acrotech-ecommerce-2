import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import Logo from './../../assets/acrotech-logo-compress.png'
const Footer = (props) => {
  return (
    <footer className="footer">
      <img src={Logo} alt="acrotech logo" />
      <a
        className="site-map"
        href="https://www.google.com/maps/place/Acrotect+Industrial+Sales+Corp./@8.4908966,124.6382007,17z/data=!3m1!4b1!4m5!3m4!1s0x32fff31fcf49851f:0xc9263f3b77dfdac0!8m2!3d8.490894!4d124.6403783"
        target="_blank"
      >
        <p style={{ marginTop: '15px' }}>+</p>
        <p>Sitemap</p>
      </a>
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
        <h5>About Acrotech Industrial Sales Corp.</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          quidem aut mollitia harum perspiciatis delectus laborum deserunt
          fugiat? Natus, placeat? Cumque hic sed iure labore pariatur sit et
          dolorem debitis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vitae,
          modi perspiciatis quis eaque at fugiat dignissimos quaerat a tempore
          natus nesciunt saepe, quod, iure cumque optio fugit reprehenderit
          obcaecati libero aliquid dolore dolores suscipit! Et repudiandae id
          error quisquam sequi voluptates, ducimus optio ea, illum expedita amet
          culpa sapiente ex assumenda molestias quas! Impedit, odit! Fuga
          recusandae quos a nostrum, voluptatum iste id, velit corporis
          laudantium cupiditate accusamus error soluta placeat illo! Tempore at,
          quod ipsa excepturi veritatis iure.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          corporis excepturi repellat aliquam et, pariatur placeat expedita aut,
          itaque, necessitatibus optio sequi? Odit quae aliquid deserunt natus
          facere minima deleniti consectetur. Sequi quo ipsum explicabo debitis,
          amet dolores officia obcaecati provident ab modi asperiores quam,
          ullam recusandae exercitationem enim repellendus aspernatur corrupti
          optio mollitia quasi! Corporis minus atque quae ducimus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          veniam incidunt corrupti dolorum quos eum minima iste ab! Consequuntur
          quaerat consequatur eligendi blanditiis obcaecati inventore sequi
          soluta id facilis vitae.
        </p>
      </section>
    </footer>
  )
}

export default Footer
